type Sex = "male" | "female";

// Map a body-fat % to a 0..1 "fatness" used to shape the silhouette.
function fatness(sex: Sex, bf: number) {
  const [lo, hi] = sex === "male" ? [8, 38] : [12, 46];
  return Math.min(1, Math.max(0, (bf - lo) / (hi - lo)));
}

// Build a symmetric front-view body outline whose waist/hips widen with fatness.
function bodyPath(sex: Sex, f: number) {
  const cx = 50;
  const yNeck = 31,
    yShoulder = 46,
    yWaist = 86,
    yHip = 110,
    yBottom = 134;
  const male = sex === "male";
  const neckHalf = male ? 5 : 4.5;
  const sh = (male ? 21 : 17) + f * 5; // shoulders
  const wa = (male ? 12 : 11) + f * (male ? 18 : 15); // waist (grows most)
  const hi = (male ? 16 : 20) + f * (male ? 11 : 15); // hips
  const th = (male ? 13 : 15) + f * 9; // bottom width

  const Lx = (x: number) => cx - x;
  const Rx = (x: number) => cx + x;
  const mid = (a: number, b: number) => (a + b) / 2;
  // smooth vertical cubic between two side points
  const seg = (x1: number, y1: number, x2: number, y2: number) =>
    `C ${x1} ${mid(y1, y2)} ${x2} ${mid(y1, y2)} ${x2} ${y2}`;

  return [
    `M ${Lx(neckHalf)} ${yNeck}`,
    `C ${Lx(neckHalf + 2)} ${yNeck + 4} ${Lx(sh)} ${yShoulder - 6} ${Lx(sh)} ${yShoulder}`,
    seg(Lx(sh), yShoulder, Lx(wa), yWaist),
    seg(Lx(wa), yWaist, Lx(hi), yHip),
    seg(Lx(hi), yHip, Lx(th), yBottom),
    `Q ${cx} ${yBottom + 12} ${Rx(th)} ${yBottom}`,
    seg(Rx(th), yBottom, Rx(hi), yHip),
    seg(Rx(hi), yHip, Rx(wa), yWaist),
    seg(Rx(wa), yWaist, Rx(sh), yShoulder),
    `C ${Rx(sh)} ${yShoulder - 6} ${Rx(neckHalf + 2)} ${yNeck + 4} ${Rx(neckHalf)} ${yNeck}`,
    "Z",
  ].join(" ");
}

export default function BodySilhouette({ sex, bf }: { sex: Sex; bf: number }) {
  const f = fatness(sex, bf);
  const headR = 9 + f * 1.5;
  return (
    <svg
      viewBox="0 0 100 150"
      className="h-full w-full"
      fill="currentColor"
      aria-hidden="true"
    >
      <ellipse cx="50" cy="18" rx={headR} ry="11" />
      <path d={bodyPath(sex, f)} />
    </svg>
  );
}
