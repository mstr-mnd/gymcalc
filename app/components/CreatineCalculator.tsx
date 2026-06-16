"use client";

import { useMemo, useState } from "react";
import BodySilhouette from "./BodySilhouette";
import type { Dict } from "@/lib/dictionaries";

type Unit = "kg" | "lb";
type Sex = "male" | "female";

const LB_TO_KG = 0.453592;
const round1 = (n: number) => Math.round(n * 10) / 10;
const fmt = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1));
const fill = (tpl: string, vars: Record<string, string | number>) =>
  tpl.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));

// Reasonable adult weight bounds for validation.
const LIMITS: Record<Unit, { min: number; max: number }> = {
  kg: { min: 30, max: 300 },
  lb: { min: 66, max: 660 },
};

// Representative body-fat % per preset; labels are universal, descriptions come from the dict.
const BODY_FAT: Record<Sex, { bf: number; label: string }[]> = {
  male: [
    { bf: 10, label: "~10%" },
    { bf: 15, label: "~15%" },
    { bf: 20, label: "~20%" },
    { bf: 25, label: "~25%" },
    { bf: 30, label: "~30%" },
    { bf: 35, label: "~35%+" },
  ],
  female: [
    { bf: 16, label: "~16%" },
    { bf: 20, label: "~20%" },
    { bf: 25, label: "~25%" },
    { bf: 30, label: "~30%" },
    { bf: 35, label: "~35%" },
    { bf: 40, label: "~40%+" },
  ],
};

export default function CreatineCalculator({ dict }: { dict: Dict["calc"] }) {
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<Unit>("kg");
  const [sex, setSex] = useState<Sex>("male");
  const [bodyFat, setBodyFat] = useState<number | null>(null);

  // Validate the weight: empty = no error (just no result yet); otherwise it must be a
  // sensible number within range. Returns the converted kg only when valid.
  const { error, kg } = useMemo(() => {
    const raw = weight.trim();
    if (raw === "") return { error: null as string | null, kg: null as number | null };
    const w = parseFloat(raw);
    const { min, max } = LIMITS[unit];
    if (isNaN(w) || w <= 0) return { error: dict.errInvalid, kg: null };
    if (w < min || w > max)
      return {
        error: fill(dict.errRange, { min, max, unit: dict.units[unit] }),
        kg: null,
      };
    return { error: null, kg: unit === "kg" ? w : w * LB_TO_KG };
  }, [weight, unit, dict]);

  const result = useMemo(() => {
    if (kg == null || bodyFat == null) return null;

    const leanKg = kg * (1 - bodyFat / 100); // lean body mass
    const maintenance = Math.max(3, round1(leanKg * 0.06)); // ~0.06 g/kg lean mass
    const loadingDaily = round1(maintenance * 5); // loading ≈ 5× maintenance
    const loadingPerDose = round1(loadingDaily / 4); // split into 4 servings
    const leanDisplay = round1(unit === "kg" ? leanKg : leanKg / LB_TO_KG);

    return { maintenance, loadingDaily, loadingPerDose, leanDisplay };
  }, [kg, unit, bodyFat]);

  return (
    <div className="rounded-2xl border border-border bg-elevated p-6 shadow-sm sm:p-8">
      {/* Sex toggle */}
      <p className="text-sm font-semibold text-muted">{dict.youAre}</p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {(["male", "female"] as Sex[]).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              setSex(s);
              setBodyFat(null);
            }}
            className={`rounded-xl border py-2 text-sm font-bold transition-colors ${
              sex === s
                ? "border-accent bg-accent/10 text-text"
                : "border-border bg-base text-muted hover:text-text"
            }`}
          >
            {s === "male" ? dict.male : dict.female}
          </button>
        ))}
      </div>

      {/* Weight input + unit toggle */}
      <label htmlFor="weight" className="mt-6 block text-sm font-semibold text-muted">
        {dict.bodyWeight}
      </label>
      <div className="mt-2 flex items-center gap-3">
        <input
          id="weight"
          type="number"
          inputMode="decimal"
          min={0}
          placeholder={dict.weightPlaceholder}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "weight-error" : undefined}
          className={`w-full rounded-lg border bg-base px-4 py-3 text-2xl font-bold text-text outline-none placeholder:text-muted/50 ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-border focus:border-accent"
          }`}
        />
        <div className="flex shrink-0 rounded-full bg-base p-1">
          {(["kg", "lb"] as Unit[]).map((u) => (
            <button
              key={u}
              type="button"
              onClick={() => setUnit(u)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                unit === u ? "bg-accent text-white" : "text-muted hover:text-text"
              }`}
            >
              {dict.units[u]}
            </button>
          ))}
        </div>
      </div>
      {error && (
        <p id="weight-error" className="mt-2 text-sm font-medium text-red-500">
          {error}
        </p>
      )}

      {/* Body-fat picker with generated silhouettes */}
      <p className="mt-6 text-sm font-semibold text-muted">
        {dict.bodyFat} <span className="font-normal">{dict.bodyFatHint}</span>
      </p>
      <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {BODY_FAT[sex].map((opt, i) => {
          const active = bodyFat === opt.bf;
          return (
            <button
              key={opt.bf}
              type="button"
              onClick={() => setBodyFat(opt.bf)}
              className={`group flex flex-col items-center rounded-xl border p-2 transition-colors ${
                active
                  ? "border-accent bg-accent/10"
                  : "border-border bg-base hover:bg-elevated-hover"
              }`}
            >
              <div
                className={`h-16 w-full sm:h-20 ${
                  active ? "text-accent" : "text-zinc-400 group-hover:text-muted"
                }`}
              >
                <BodySilhouette sex={sex} bf={opt.bf} />
              </div>
              <span className="mt-1 text-xs font-bold text-text">{opt.label}</span>
              <span className="text-[10px] leading-tight text-muted">
                {dict.bfDesc[sex][i]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Result — single recommended dose; loading is just an optional sub-note.
          Structure is always present; only numbers change (no layout jump). */}
      <div className="mt-6 rounded-xl bg-base p-6">
        <p className="text-sm font-semibold text-muted">{dict.dailyDose}</p>
        <p className="mt-1 text-5xl font-extrabold text-accent">
          {result ? fmt(result.maintenance) : "—"}{" "}
          <span className="text-2xl">{dict.perDay}</span>
        </p>
        <p className="mt-3 text-sm text-muted">
          {result
            ? fill(dict.resultDesc, {
                lean: fmt(result.leanDisplay),
                unit: dict.units[unit],
              })
            : dict.enterPrompt}
        </p>

        <div className="mt-4 border-t border-border pt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            {dict.loadingTitle}
          </p>
          <p className="mt-1 text-sm text-muted">
            {result
              ? fill(dict.loadingDesc, {
                  daily: fmt(result.loadingDaily),
                  perDose: fmt(result.loadingPerDose),
                  maint: fmt(result.maintenance),
                })
              : "—"}
          </p>
        </div>
      </div>
    </div>
  );
}
