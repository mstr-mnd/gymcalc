import type { Locale } from "./i18n";

// A block is either a heading (h) or a paragraph (p).
export type Block = { h: string } | { p: string };

export type ArticleContent = {
  title: string;
  description: string;
  body: Block[];
};

export type Article = {
  slug: string;
  date: string; // ISO published/updated date
  en: ArticleContent;
  ru: ArticleContent;
};

export const articles: Article[] = [
  {
    slug: "creatine-loading-phase",
    date: "2026-06-16",
    en: {
      title: "Do You Really Need a Creatine Loading Phase?",
      description:
        "Loading fills your muscles in about a week instead of a month — but it is optional. Here is when it is actually worth doing.",
      body: [
        { p: "A loading phase means taking a big dose of creatine for the first week or so, then dropping to a normal daily dose. It is the fastest way to fill your muscles, but it is not the only way, and plenty of people skip it." },
        { h: "What loading actually does" },
        { p: "Creatine works by saturating the stores in your muscles. Loading just gets you there faster: instead of three to four weeks at a normal dose, your muscles are full in five to seven days. The end result is the same either way — loading only changes how quickly you get there." },
        { h: "Do you need it?" },
        { p: "If you have a competition or a training block coming up and want the benefit sooner, load. If you are not in a hurry, skip it: take your normal daily dose and you will be fully topped up in a few weeks with less powder and zero stomach upset." },
        { h: "How to load" },
        { p: "The classic protocol is about 20 g a day split into four servings, for five to seven days, then drop to your maintenance dose. Rather than guess, put your weight and body fat into the calculator — it gives you both the loading and maintenance numbers for your body." },
        { p: "Bottom line: loading is a shortcut, not a requirement. Most people are fine just taking their daily dose every day." },
      ],
    },
    ru: {
      title: "Нужна ли фаза загрузки креатина?",
      description:
        "Загрузка наполняет мышцы примерно за неделю вместо месяца — но она необязательна. Разбираемся, когда она реально нужна.",
      body: [
        { p: "Фаза загрузки — это приём большой дозы креатина в первую неделю, а затем переход на обычную суточную дозу. Это самый быстрый способ наполнить мышцы, но не единственный, и многие её пропускают." },
        { h: "Что на самом деле даёт загрузка" },
        { p: "Креатин работает за счёт насыщения запасов в мышцах. Загрузка просто ускоряет процесс: вместо трёх-четырёх недель на обычной дозе мышцы наполняются за пять-семь дней. Итог одинаковый — загрузка меняет только скорость." },
        { h: "Нужна ли она вам?" },
        { p: "Если впереди соревнование или тренировочный блок и хочется эффекта быстрее — грузитесь. Если спешки нет — пропустите: принимайте обычную дозу, и через несколько недель мышцы будут полностью насыщены, с меньшим расходом порошка и без дискомфорта в желудке." },
        { h: "Как делать загрузку" },
        { p: "Классический протокол — около 20 г в день в четыре приёма, 5–7 дней, затем переход на поддерживающую дозу. Чтобы не угадывать, введите вес и процент жира в калькулятор — он даст и дозу загрузки, и поддерживающую под ваше тело." },
        { p: "Итог: загрузка — это ускорение, а не обязательное условие. Большинству достаточно просто принимать суточную дозу каждый день." },
      ],
    },
  },
  {
    slug: "creatine-dosage-by-weight",
    date: "2026-06-16",
    en: {
      title: "Creatine Dosage by Body Weight (and Why Lean Mass Matters More)",
      description:
        "3–5 g a day is the usual answer, but your size changes the number. Here is how to dose creatine by weight and body fat.",
      body: [
        { p: "The short answer most sites give is 3–5 g a day. That is fine for an average person, but a 60 kg runner and a 100 kg lifter do not have the same amount of muscle, and creatine lives in muscle." },
        { h: "Why weight alone is not enough" },
        { p: "Creatine is stored in your muscles, not your fat. Two people at the same weight can carry very different amounts of muscle. That is why dosing by lean body mass — your weight minus fat — is more accurate than using total weight." },
        { h: "Rough numbers by weight" },
        { p: "As a guide: around 60–70 kg usually lands near 3 g a day, 80–90 kg around 4 g, and 100 kg or more toward 5 g. Leaner, more muscular people sit at the higher end of their range." },
        { p: "Instead of memorising a table, enter your weight and pick your body-fat level in the calculator. It estimates your lean mass and gives you a dose that fits your body, not just a flat number." },
        { p: "Bottom line: 3–5 g a day works for most, but matching the dose to your lean mass is more precise — especially at the lighter and heavier ends." },
      ],
    },
    ru: {
      title: "Доза креатина по весу тела (и почему сухая масса важнее)",
      description:
        "Обычный ответ — 3–5 г в день, но ваш размер меняет цифру. Разбираем, как дозировать креатин по весу и проценту жира.",
      body: [
        { p: "Короткий ответ, который дают большинство сайтов, — 3–5 г в день. Для среднего человека это нормально, но бегун 60 кг и атлет 100 кг имеют разное количество мышц, а креатин хранится именно в мышцах." },
        { h: "Почему одного веса мало" },
        { p: "Креатин накапливается в мышцах, а не в жире. Два человека с одинаковым весом могут нести очень разное количество мышц. Поэтому дозировать по сухой массе — весу минус жир — точнее, чем по общему весу." },
        { h: "Ориентиры по весу" },
        { p: "Ориентир: около 60–70 кг — обычно ближе к 3 г в день, 80–90 кг — около 4 г, 100 кг и больше — ближе к 5 г. Те, кто суше и мускулистее, находятся в верхней части своего диапазона." },
        { p: "Вместо заучивания таблицы введите вес и выберите уровень жира в калькуляторе. Он оценит сухую массу и даст дозу под ваше тело, а не просто общую цифру." },
        { p: "Итог: 3–5 г в день подходят большинству, но подбор дозы под сухую массу точнее — особенно для лёгких и тяжёлых." },
      ],
    },
  },
  {
    slug: "creatine-for-women",
    date: "2026-06-16",
    en: {
      title: "Creatine for Women: Dosage, Safety, and What to Expect",
      description:
        "Creatine works the same way for women as for men. No bloating myths, no special dose — here is what actually happens.",
      body: [
        { p: "Creatine is often seen as a men's supplement, but the research does not care about sex. It works the same way for women, and the dose is based on body size, not gender." },
        { h: "Will it make you bulky or bloated?" },
        { p: "No. Creatine does not cause the kind of bloat people picture. Any extra water it pulls in goes into the muscle itself, which can actually make muscles look a little fuller, not puffy. It will not make you 'big' — that takes years of heavy training and a lot of food." },
        { h: "How much should women take?" },
        { p: "The same lean-mass logic applies. Most women land around 3 g a day. Since women on average carry a bit less muscle than men at the same weight, the dose is often slightly lower — which is exactly why the calculator asks for body fat." },
        { h: "What to expect" },
        { p: "Slightly better strength and endurance in training, a bit faster recovery, and research increasingly points to benefits for bone and cognitive health too. Effects build over a few weeks, not overnight." },
        { p: "Bottom line: same supplement, same safety, dose by your body. Put your numbers in the calculator to get yours." },
      ],
    },
    ru: {
      title: "Креатин для женщин: доза, безопасность и чего ждать",
      description:
        "У женщин креатин работает так же, как у мужчин. Без мифов про отёки и особых доз — рассказываем, что происходит на самом деле.",
      body: [
        { p: "Креатин часто считают «мужской» добавкой, но исследованиям пол не важен. У женщин он работает так же, а доза зависит от размера тела, а не от пола." },
        { h: "Не сделает ли он вас «массивной» или отёчной?" },
        { p: "Нет. Креатин не вызывает того отёка, который многие себе представляют. Та вода, которую он притягивает, уходит в саму мышцу, и мышцы могут выглядеть чуть наполненнее, а не одутловато. «Большой» он вас не сделает — для этого нужны годы тяжёлых тренировок и много еды." },
        { h: "Сколько принимать женщинам?" },
        { p: "Работает та же логика сухой массы. Большинство женщин приходят к примерно 3 г в день. Поскольку при одинаковом весе у женщин в среднем чуть меньше мышц, доза часто немного ниже — именно поэтому калькулятор спрашивает процент жира." },
        { h: "Чего ждать" },
        { p: "Немного больше силы и выносливости на тренировках, чуть быстрее восстановление, а исследования всё чаще указывают и на пользу для костей и когнитивных функций. Эффект накапливается за несколько недель, не за один день." },
        { p: "Итог: та же добавка, та же безопасность, доза — под ваше тело. Введите свои данные в калькулятор, чтобы узнать свою." },
      ],
    },
  },
  {
    slug: "is-creatine-bad-for-kidneys",
    date: "2026-06-16",
    en: {
      title: "Is Creatine Bad for Your Kidneys? What the Research Says",
      description:
        "The kidney worry is the most common myth about creatine. For healthy people the research is clear — here is the honest answer.",
      body: [
        { p: "If you have heard one scary thing about creatine, it is probably about your kidneys. It is the most common worry, and for healthy people it is also one of the most overblown." },
        { h: "Where the myth comes from" },
        { p: "Kidney function is often checked by measuring creatinine in your blood. Creatine naturally breaks down into creatinine, so supplementing can nudge that number up a little. A doctor who does not know you take creatine might see a higher reading and worry — but the kidneys themselves are working fine. The marker moved, not your health." },
        { h: "What the research shows" },
        { p: "Studies running for months and even years, including in athletes taking high doses, have not found kidney harm in healthy people. The major sports-nutrition reviews all conclude the same thing: at normal doses, creatine is safe for healthy adults." },
        { h: "Who should be careful" },
        { p: "If you already have kidney disease or reduced kidney function, that is a different situation — talk to your doctor before starting. And if you ever get a blood test, mention that you take creatine so the creatinine reading is interpreted correctly." },
        { p: "Bottom line: for healthy people, creatine does not damage your kidneys. Stick to a sensible dose — the calculator gives you one based on your body." },
      ],
    },
    ru: {
      title: "Вреден ли креатин для почек? Что говорят исследования",
      description:
        "Страх за почки — самый частый миф о креатине. Для здоровых людей исследования однозначны — даём честный ответ.",
      body: [
        { p: "Если вы слышали о креатине что-то пугающее, скорее всего, это было про почки. Это самое частое опасение — и для здоровых людей одно из самых преувеличенных." },
        { h: "Откуда взялся миф" },
        { p: "Функцию почек часто проверяют по уровню креатинина в крови. Креатин естественным образом распадается до креатинина, поэтому приём добавки может немного поднять это число. Врач, который не знает, что вы принимаете креатин, увидит повышенный показатель и забеспокоится — но сами почки при этом работают нормально. Сдвинулся маркер, а не здоровье." },
        { h: "Что показывают исследования" },
        { p: "Исследования длиной в месяцы и даже годы, в том числе у спортсменов на высоких дозах, не нашли вреда для почек у здоровых людей. Все крупные обзоры по спортивному питанию приходят к одному выводу: в обычных дозах креатин безопасен для здоровых взрослых." },
        { h: "Кому стоит быть осторожнее" },
        { p: "Если у вас уже есть болезнь почек или сниженная функция почек — это другая ситуация, перед началом проконсультируйтесь с врачом. И если будете сдавать анализ крови, упомяните приём креатина, чтобы показатель креатинина истолковали верно." },
        { p: "Итог: для здоровых людей креатин не вредит почкам. Придерживайтесь разумной дозы — калькулятор даст её под ваше тело." },
      ],
    },
  },
  {
    slug: "when-to-take-creatine",
    date: "2026-06-16",
    en: {
      title: "When to Take Creatine: Does Timing Actually Matter?",
      description:
        "Before or after a workout? Empty stomach? The honest answer: timing barely matters. Here is what does.",
      body: [
        { p: "People overthink creatine timing more than almost anything else about it. The truth is freeing: when you take it barely matters." },
        { h: "The short answer" },
        { p: "Creatine works by keeping your muscles saturated over time. That is a slow, steady thing — it does not spike and crash like caffeine. So what matters is taking it every day, not the exact hour you take it." },
        { h: "Is post-workout slightly better?" },
        { p: "Some research hints that taking creatine around your workout, especially after, might be very slightly better than other times. The effect is small enough that it is not worth stressing over. If it is easy to take it post-workout, do; if not, do not worry." },
        { h: "Empty stomach, rest days, with food?" },
        { p: "All fine. You can take it with or without food. On rest days, take it whenever — there is no workout to time it around. The only rule that actually matters is consistency: one dose, every day." },
        { p: "Bottom line: pick a time you will not forget and stick to it. Need your dose? The calculator sorts that in seconds." },
      ],
    },
    ru: {
      title: "Когда принимать креатин: важно ли время приёма?",
      description:
        "До или после тренировки? Натощак? Честный ответ: время почти не важно. Рассказываем, что важно на самом деле.",
      body: [
        { p: "О времени приёма креатина думают больше, чем почти обо всём остальном. И правда освобождает: когда именно вы его принимаете — почти не важно." },
        { h: "Короткий ответ" },
        { p: "Креатин работает за счёт поддержания насыщенности мышц со временем. Это медленный, ровный процесс — без резких подъёмов и спадов, как у кофеина. Поэтому важно принимать его каждый день, а не в конкретный час." },
        { h: "Правда ли, что после тренировки чуть лучше?" },
        { p: "Некоторые исследования намекают, что приём рядом с тренировкой, особенно после, может быть совсем чуть-чуть лучше. Эффект настолько мал, что переживать из-за него не стоит. Удобно принять после тренировки — принимайте; нет — не волнуйтесь." },
        { h: "Натощак, в дни отдыха, с едой?" },
        { p: "Всё подходит. Можно принимать с едой или без. В дни отдыха — когда угодно, тренировки, под которую подгадывать, нет. Единственное правило, которое действительно важно, — регулярность: одна доза каждый день." },
        { p: "Итог: выберите время, которое не забудете, и придерживайтесь его. Нужна доза? Калькулятор посчитает её за секунды." },
      ],
    },
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function articleContent(a: Article, locale: Locale): ArticleContent {
  return a[locale];
}
