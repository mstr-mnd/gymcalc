import type { Locale } from "./i18n";

const en = {
  meta: {
    homeTitle: "Creatine Calculator: Daily Dose by Weight and Body Fat",
    homeDescription:
      "Work out how much creatine to take each day from your body weight and body fat. Free, no sign-up, with an optional loading phase.",
    privacyTitle: "Privacy Policy | CreatineCalc",
    privacyDescription:
      "How CreatineCalc handles your data and cookies. What you type into the calculators stays in your browser and is never sent to our servers.",
  },
  header: { howItWorks: "How it works", faq: "FAQ", calculate: "Calculate" },
  hero: {
    badge: "Free, no sign-up",
    title: "Creatine Calculator",
    subtitle:
      "How much creatine should you take? Get a precise daily dose based on your lean body mass, not just your weight.",
  },
  calc: {
    youAre: "You are",
    male: "Male",
    female: "Female",
    bodyWeight: "Your body weight",
    weightPlaceholder: "e.g. 80",
    bodyFat: "Body fat",
    bodyFatHint: "(pick the closest)",
    units: { kg: "kg", lb: "lb" },
    dailyDose: "Your daily dose",
    perDay: "g/day",
    resultDesc:
      "Based on about {lean} {unit} of lean mass. Take it every day, at any time. Your muscles fully saturate in roughly 3–4 weeks.",
    enterPrompt: "Enter your weight and pick a body-fat level to see your dose.",
    loadingTitle: "Optional: faster loading",
    loadingDesc:
      "For the first 5–7 days, take {daily} g a day (4 servings of about {perDose} g). After that, drop back to {maint} g a day. This fills your muscles in under a week instead of 3–4.",
    bfDesc: {
      male: ["Visible abs", "Athletic", "Fit / avg", "Some belly", "Higher", "High"],
      female: ["Athlete", "Fit", "Average", "Curvy", "Higher", "High"],
    },
    errInvalid: "Enter a valid weight.",
    errRange: "Enter a weight between {min} and {max} {unit}.",
  },
  how: {
    title: "How it works",
    intro:
      "Creatine is stored in your muscles, so dosing by lean body mass (your weight minus fat) is more accurate than using total weight.",
    maintTitle: "Maintenance dose",
    maintFormula: "≈ 0.06 g × lean mass (kg)",
    maintDesc:
      "Usually 3–5 g a day, and that is all you need. Your muscles fully saturate within 3–4 weeks.",
    loadTitle: "Loading dose (optional)",
    loadFormula: "≈ 5 × maintenance dose",
    loadDesc:
      "Split into 4 servings a day for 5–7 days to saturate faster, then drop to the maintenance dose.",
  },
  faqTitle: "FAQ",
  faq: [
    {
      q: "How much creatine should I take per day?",
      a: "For most healthy adults the standard maintenance dose is 3–5 g of creatine monohydrate a day. Since creatine is stored in muscle, dosing by lean body mass is a bit more precise: about 0.06 g per kg of lean mass per day.",
    },
    {
      q: "Do I need a loading phase?",
      a: "No, the loading phase is optional. Taking about 5 times your maintenance dose (split into 4 servings) for 5–7 days fills your muscles faster. If you skip it and just take your normal dose, you reach the same point in about 3–4 weeks.",
    },
    {
      q: "When is the best time to take creatine?",
      a: "Timing barely matters; what counts is taking it every day. Any time works, with or without food. Taking it around your workout might be very slightly better, but the difference is tiny.",
    },
    {
      q: "Do I need to cycle creatine?",
      a: "No. There is no need to cycle creatine on and off. Continuous daily use is safe and effective for healthy people.",
    },
    {
      q: "Is creatine safe for women?",
      a: "Yes. The dose depends on your body size (lean mass), not your sex, so it works the same way for women. Research keeps showing benefits for strength, recovery, and even brain function.",
    },
    {
      q: "Is creatine monohydrate safe?",
      a: "Creatine monohydrate is one of the most researched supplements and is considered safe for healthy adults at normal doses. If you have a kidney condition or take medication, check with your doctor first.",
    },
    {
      q: "Does creatine damage your kidneys?",
      a: "For healthy people, no. Years of research show normal creatine doses do not harm kidney function. The worry comes from creatine slightly raising creatinine, a marker used in kidney tests, but that is a harmless side effect, not damage. If you already have kidney disease, check with your doctor first.",
    },
    {
      q: "Can I mix creatine with protein or coffee?",
      a: "Yes to both. Stirring creatine into a protein shake is fine and common. The old idea that caffeine cancels out creatine has not held up, so having it with coffee is fine too. Warm or cold drinks both work; just stir well.",
    },
    {
      q: "How much creatine should I take for my weight?",
      a: "It depends on your lean mass, not just total weight, which is why the calculator asks for body fat. As a rough guide, most people land at 3–5 g a day: lighter or leaner people toward 3 g, heavier or more muscular people toward 5 g or a bit more.",
    },
    {
      q: "Should I take creatine on rest days?",
      a: "Yes. The goal is to keep your muscles saturated, so take your daily dose every day, including rest days. On rest days the timing does not matter at all.",
    },
  ],
  about: {
    title: "Is creatine actually worth it?",
    p1: "Short answer: for most people who train, yes. Creatine is one of the few supplements that genuinely does what it claims, and it has been studied for decades. It helps your muscles make energy during hard sets, so you squeeze out a couple more reps, recover a little quicker, and build more strength over time.",
    p2: "It is not a stimulant, so you will not feel it kick in like caffeine. The effect is quiet: over a few weeks your muscles fill up with creatine and your training simply gets a bit better. The “water weight” people worry about is mostly water pulled into the muscle itself, not bloat under the skin.",
    p3: "You do not need the expensive versions. Plain creatine monohydrate is the cheapest and the most researched, and nothing has beaten it yet. Take your dose every day, do not stress about a missed day, and give it a month before you decide if it works for you.",
  },
  howto: {
    title: "How to take creatine",
    steps: [
      {
        name: "Find your dose",
        text: "Use the calculator above: enter your weight and body fat to get your daily dose in grams.",
      },
      {
        name: "Take it daily",
        text: "Mix your dose into water, juice, or a shake once a day. Timing barely matters, so pick a moment you will remember.",
      },
      {
        name: "Load it if you are impatient (optional)",
        text: "For the first 5 to 7 days you can take about five times your normal dose, split into four servings, to fill your muscles faster.",
      },
      {
        name: "Give it a few weeks",
        text: "Without loading, your muscles are fully topped up in three to four weeks. After that, just keep taking your daily dose.",
      },
    ],
  },
  byline: {
    text: "Based on ISSN creatine guidelines",
    published: "Published 16 June 2026",
    updated: "Updated 16 June 2026",
  },
  sources: {
    title: "Sources",
    intro:
      "These numbers are not guesswork. The dosing follows the International Society of Sports Nutrition (ISSN) — the main scientific consensus on creatine.",
    formulaNote:
      "Why we dose by lean mass: creatine is stored in muscle, so lean (fat-free) mass is a better basis than total weight. The standard maintenance dose is 3–5 g a day, and our figure of about 0.06 g per kg of lean mass lands in that range for most people. The optional loading phase (around five times maintenance for 5–7 days) mirrors the classic ~20 g/day protocol from the research.",
    items: [
      {
        label: "ISSN Position Stand: Safety and Efficacy of Creatine Supplementation (2017)",
        url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0173-z",
      },
      {
        label: "ISSN: Creatine Supplementation in Exercise, Sport, and Medicine (2021)",
        url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-021-00412-w",
      },
    ],
  },
  aboutPage: {
    metaTitle: "About CreatineCalc — How We Calculate Creatine Doses",
    metaDescription:
      "Who is behind CreatineCalc, how the creatine dose is worked out, and the research it is based on.",
    title: "About CreatineCalc",
    intro:
      "CreatineCalc is a small, independent tool with one job: tell you how much creatine to take, without the fluff. No accounts, no upsells, no wall of pop-ups — enter your weight and body fat, get a clear number.",
    methodologyTitle: "How the dose is calculated",
    methodology1:
      "Creatine is stored in your muscles, so we base the dose on your lean body mass (your weight minus fat) rather than total weight. You pick your body-fat level from the silhouettes, we estimate how much of you is muscle, and dose from there.",
    methodology2:
      "Maintenance is about 0.06 g per kg of lean mass per day, which comes out to the usual 3–5 g for most people. The optional loading phase is roughly five times that for the first 5–7 days, matching the ~20 g/day protocol used in studies. All of it follows ISSN guidance (see the Sources section on the home page).",
    disclaimerTitle: "Not medical advice",
    disclaimer:
      "This is an educational tool. Creatine monohydrate is well studied and safe for most healthy adults, but if you have a kidney condition or take medication, talk to a doctor first.",
    contactTitle: "Contact",
    contactText: "Spotted a mistake or have a question? Email us at",
    back: "← Back to the calculator",
  },
  footer: {
    disclaimer:
      "This is an educational tool, not medical advice. Creatine monohydrate is well studied and safe for most healthy adults, but check with a doctor if you have kidney problems or take medication.",
    home: "Home",
    about: "About",
    blog: "Guides",
    widget: "Embed",
    privacy: "Privacy Policy",
    cookieSettings: "Cookie settings",
    rights: "All rights reserved.",
  },
  blog: {
    metaTitle: "Creatine Guides & Articles — CreatineCalc",
    metaDescription:
      "Plain-language guides on creatine: dosing, loading, timing, safety, and more.",
    title: "Creatine guides",
    intro: "Short, practical reads on getting creatine right.",
    backToBlog: "← All guides",
    ctaTitle: "Find your creatine dose",
    ctaNote: "Enter your weight and body fat to get your daily dose in seconds.",
    ctaButton: "Open the calculator",
  },
  widget: {
    metaTitle: "Embed the Creatine Calculator on Your Site",
    metaDescription:
      "Add the free creatine calculator to your website with one line of code.",
    title: "Embed this calculator",
    intro:
      "Run a fitness site, blog, or forum? Drop the creatine calculator into any page with the code below. It is free — a small credit link back to us is all we ask.",
    codeTitle: "Copy and paste this code",
    copy: "Copy code",
    copied: "Copied!",
    previewTitle: "Live preview",
  },
  cookie: {
    text: "We use cookies to remember your settings and, if you agree, to measure traffic and show ads. See our",
    privacyLink: "Privacy Policy",
    reject: "Reject",
    accept: "Accept",
  },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: 15 June 2026",
    shortTitle: "The short version",
    shortItems: [
      "Everything you type into the calculators (your weight, body fat, and so on) is worked out right in your browser. It is never sent to or stored on our servers.",
      "We use only a few cookies: one to remember your cookie choice, and, with your consent, cookies for analytics and ads.",
      "We never sell your personal data.",
    ],
    s1Title: "1. Who we are",
    s1: 'This site ("CreatineCalc", "we", "us") is run by {company}. This policy explains how we handle information when you visit {domain}.',
    s2Title: "2. Information we collect",
    s2a: "What you enter. The numbers you put into the calculators are used only to work out your result on your device. They are not sent to us, logged, or saved on a server.",
    s2b: "What is collected automatically. If you allow analytics or advertising cookies, our providers may collect your IP address, browser and device type, the pages you view, and your approximate location, using cookies and similar technologies.",
    s3Title: "3. Cookies",
    s3Intro: "We group cookies into three categories:",
    s3Items: [
      "Essential: remembers your cookie choice. Always on, because the site needs it to work.",
      "Analytics: shows us how people use the site, such as Google Analytics. Set only if you agree.",
      "Advertising: used to show and measure ads. Set only if you agree.",
    ],
    s3Tail:
      "You can change or withdraw your choice at any time through Cookie settings in the footer, or by clearing cookies in your browser.",
    s4Title: "4. How we use information",
    s4: "To run and improve the site, understand our traffic, and, only with your consent, to show and measure ads. We do not use your data to make automated decisions about you.",
    s5Title: "5. Third-party services",
    s5Intro: "When enabled with your consent, we may use:",
    s5Analytics: "Google Analytics",
    s5Tail: "These providers process data under their own privacy policies.",
    s6Title: "6. Your rights",
    s6: "Depending on where you live (for example, the EEA or UK under GDPR, or California under the CCPA and CPRA), you may have the right to access, correct, delete, or restrict the use of your personal data, and to opt out of the sale or sharing of personal information. To exercise any of these rights, email us at {email}.",
    s7Title: "7. Data retention",
    s7: "We do not store your calculator inputs. Any analytics or advertising data is kept only as long as needed for the purposes above, according to our providers' retention settings.",
    s8Title: "8. Children's privacy",
    s8: "This site is not aimed at children under 13 (or the minimum age in your country), and we do not knowingly collect their personal data.",
    s9Title: "9. Changes to this policy",
    s9: 'We may update this policy from time to time. When we do, we will change the "Last updated" date at the top of this page.',
    s10Title: "10. Contact",
    s10: "Questions about this policy? Email us at {email} or write to {company}.",
    back: "← Back to the calculator",
  },
};

export type Dict = typeof en;

const ru: Dict = {
  meta: {
    homeTitle: "Калькулятор креатина: суточная доза по весу и проценту жира",
    homeDescription:
      "Посчитайте, сколько креатина принимать в день, по весу и проценту жира. Бесплатно, без регистрации, с опцией фазы загрузки.",
    privacyTitle: "Политика конфиденциальности | CreatineCalc",
    privacyDescription:
      "Как CreatineCalc обращается с вашими данными и cookie. То, что вы вводите в калькуляторы, остаётся в браузере и не отправляется на наши серверы.",
  },
  header: { howItWorks: "Как это работает", faq: "Вопросы", calculate: "Рассчитать" },
  hero: {
    badge: "Бесплатно, без регистрации",
    title: "Калькулятор креатина",
    subtitle:
      "Сколько креатина вам нужно? Точная суточная доза по сухой массе тела, а не просто по весу.",
  },
  calc: {
    youAre: "Вы",
    male: "Мужчина",
    female: "Женщина",
    bodyWeight: "Ваш вес",
    weightPlaceholder: "напр. 80",
    bodyFat: "Процент жира",
    bodyFatHint: "(выберите ближайший)",
    units: { kg: "кг", lb: "lb" },
    dailyDose: "Ваша суточная доза",
    perDay: "г/день",
    resultDesc:
      "Исходя из примерно {lean} {unit} сухой массы. Принимайте каждый день в любое время. Мышцы полностью насыщаются примерно за 3–4 недели.",
    enterPrompt: "Введите вес и выберите уровень жира, чтобы увидеть дозу.",
    loadingTitle: "Опционально: ускоренная загрузка",
    loadingDesc:
      "Первые 5–7 дней принимайте {daily} г в день (4 приёма по ~{perDose} г). Потом вернитесь к {maint} г в день. Так мышцы наполнятся меньше чем за неделю вместо 3–4.",
    bfDesc: {
      male: ["Видны кубики", "Атлетично", "Норма", "Есть живот", "Выше", "Высокий"],
      female: ["Атлет", "В форме", "Среднее", "Округлая", "Выше", "Высокий"],
    },
    errInvalid: "Введите корректный вес.",
    errRange: "Введите вес от {min} до {max} {unit}.",
  },
  how: {
    title: "Как это работает",
    intro:
      "Креатин хранится в мышцах, поэтому дозировать по сухой массе тела (вес минус жир) точнее, чем по общему весу.",
    maintTitle: "Поддерживающая доза",
    maintFormula: "≈ 0.06 г × сухая масса (кг)",
    maintDesc:
      "Обычно 3–5 г в день, и это всё, что нужно. Мышцы полностью насыщаются за 3–4 недели.",
    loadTitle: "Доза загрузки (опционально)",
    loadFormula: "≈ 5 × поддерживающая доза",
    loadDesc:
      "Разделите на 4 приёма в день на 5–7 дней для быстрого насыщения, затем перейдите на поддерживающую дозу.",
  },
  faqTitle: "Частые вопросы",
  faq: [
    {
      q: "Сколько креатина принимать в день?",
      a: "Для большинства здоровых взрослых стандартная поддерживающая доза составляет 3–5 г моногидрата креатина в день. Поскольку креатин хранится в мышцах, точнее дозировать по сухой массе тела: около 0,06 г на кг сухой массы в день.",
    },
    {
      q: "Нужна ли фаза загрузки?",
      a: "Нет, фаза загрузки не обязательна. Если 5–7 дней принимать примерно в 5 раз больше обычной дозы (разделив на 4 приёма), мышцы наполнятся быстрее. Если её пропустить и принимать обычную дозу, тот же результат будет примерно через 3–4 недели.",
    },
    {
      q: "Когда лучше всего принимать креатин?",
      a: "Время приёма почти не важно, важна ежедневная регулярность. Подойдёт любое время, с едой или без. Приём рядом с тренировкой может быть чуть лучше, но разница крошечная.",
    },
    {
      q: "Нужно ли делать перерывы (циклировать)?",
      a: "Нет. Циклировать креатин, то есть делать перерывы, не нужно. Постоянный ежедневный приём безопасен и эффективен для здоровых людей.",
    },
    {
      q: "Безопасен ли креатин для женщин?",
      a: "Да. Доза зависит от размера тела (сухой массы), а не от пола, поэтому для женщин всё работает так же. Исследования всё чаще показывают пользу для силы, восстановления и даже работы мозга.",
    },
    {
      q: "Безопасен ли моногидрат креатина?",
      a: "Моногидрат креатина — одна из самых изученных добавок, и для здоровых взрослых в обычных дозах он считается безопасным. При болезнях почек или приёме лекарств сначала проконсультируйтесь с врачом.",
    },
    {
      q: "Вредит ли креатин почкам?",
      a: "Для здоровых людей — нет. Годы исследований показывают, что обычные дозы креатина не вредят функции почек. Опасение связано с тем, что креатин немного повышает креатинин — маркер в анализах почек, но это безобидный эффект, а не повреждение. Если у вас уже есть болезнь почек, сначала проконсультируйтесь с врачом.",
    },
    {
      q: "Можно ли смешивать креатин с протеином или кофе?",
      a: "Да, и с тем, и с другим. Размешать креатин в протеиновом шейке — нормально и привычно. Старое мнение, что кофеин нейтрализует креатин, не подтвердилось, так что с кофе тоже можно. Подходят и тёплые, и холодные напитки, просто хорошо размешайте.",
    },
    {
      q: "Сколько креатина принимать по моему весу?",
      a: "Зависит от сухой массы, а не просто от общего веса — поэтому калькулятор спрашивает процент жира. Ориентир: большинство приходит к 3–5 г в день. Кто легче или суше — ближе к 3 г, кто тяжелее или мускулистее — к 5 г или чуть больше.",
    },
    {
      q: "Нужно ли принимать креатин в дни отдыха?",
      a: "Да. Цель — поддерживать мышцы насыщенными, поэтому принимайте суточную дозу каждый день, включая дни отдыха. В дни отдыха время приёма вообще не важно.",
    },
  ],
  about: {
    title: "Стоит ли вообще принимать креатин?",
    p1: "Если коротко — почти всем, кто тренируется, да. Креатин одна из немногих добавок, которая реально делает то, что обещает, и её изучают уже десятки лет. Он помогает мышцам вырабатывать энергию в тяжёлых подходах: выжимаешь пару лишних повторений, чуть быстрее восстанавливаешься и со временем набираешь больше силы.",
    p2: "Это не стимулятор, поэтому его не почувствуешь, как кофеин. Эффект тихий: за несколько недель мышцы наполняются креатином, и тренировки просто идут чуть лучше. Та самая “вода”, которой все боятся, — это в основном вода в самих мышцах, а не отёк под кожей.",
    p3: "Дорогие формы не нужны. Обычный моногидрат креатина самый дешёвый и самый изученный, и пока его никто не обошёл. Принимай дозу каждый день, не переживай из-за пропущенного дня и дай себе месяц, прежде чем решать, работает ли он для тебя.",
  },
  howto: {
    title: "Как принимать креатин",
    steps: [
      {
        name: "Узнайте свою дозу",
        text: "Воспользуйтесь калькулятором выше: введите вес и процент жира, чтобы получить суточную дозу в граммах.",
      },
      {
        name: "Принимайте каждый день",
        text: "Размешайте дозу в воде, соке или шейке один раз в день. Время почти не важно, так что выберите момент, который не забудете.",
      },
      {
        name: "Сделайте загрузку, если не терпится (опционально)",
        text: "Первые 5–7 дней можно принимать примерно в пять раз больше обычной дозы, разделив на четыре приёма, чтобы быстрее наполнить мышцы.",
      },
      {
        name: "Подождите несколько недель",
        text: "Без загрузки мышцы полностью наполняются за три-четыре недели. Дальше просто продолжайте принимать суточную дозу.",
      },
    ],
  },
  byline: {
    text: "На основе рекомендаций ISSN по креатину",
    published: "Опубликовано 16 июня 2026",
    updated: "Обновлено 16 июня 2026",
  },
  sources: {
    title: "Источники",
    intro:
      "Эти цифры не взяты с потолка. Дозировка следует рекомендациям Международного общества спортивного питания (ISSN) — основного научного консенсуса по креатину.",
    formulaNote:
      "Почему дозируем по сухой массе: креатин хранится в мышцах, поэтому сухая (безжировая) масса — более точная основа, чем общий вес. Стандартная поддерживающая доза составляет 3–5 г в день, и наш коэффициент около 0,06 г на кг сухой массы попадает в этот диапазон для большинства людей. Опциональная фаза загрузки (примерно в пять раз больше поддерживающей в течение 5–7 дней) повторяет классический протокол ~20 г в день из исследований.",
    items: [
      {
        label: "ISSN Position Stand: безопасность и эффективность приёма креатина (2017)",
        url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0173-z",
      },
      {
        label: "ISSN: приём креатина в спорте, тренировках и медицине (2021)",
        url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-021-00412-w",
      },
    ],
  },
  aboutPage: {
    metaTitle: "О проекте CreatineCalc — как мы считаем дозу креатина",
    metaDescription:
      "Кто стоит за CreatineCalc, как рассчитывается доза креатина и на каких исследованиях это основано.",
    title: "О проекте CreatineCalc",
    intro:
      "CreatineCalc — небольшой независимый инструмент с одной задачей: подсказать, сколько креатина принимать, без лишней воды. Без регистрации, без навязывания и без кучи всплывающих окон — введите вес и процент жира и получите понятную цифру.",
    methodologyTitle: "Как рассчитывается доза",
    methodology1:
      "Креатин хранится в мышцах, поэтому мы считаем дозу от сухой массы тела (вес минус жир), а не от общего веса. Вы выбираете уровень жира по силуэтам, мы оцениваем, сколько в вас мышц, и считаем дозу от этого.",
    methodology2:
      "Поддерживающая доза — около 0,06 г на кг сухой массы в день, что для большинства даёт привычные 3–5 г. Опциональная фаза загрузки — примерно в пять раз больше в первые 5–7 дней, что соответствует протоколу ~20 г в день из исследований. Всё это следует рекомендациям ISSN (см. раздел «Источники» на главной).",
    disclaimerTitle: "Не медицинская рекомендация",
    disclaimer:
      "Это образовательный инструмент. Моногидрат креатина хорошо изучен и безопасен для большинства здоровых взрослых, но при болезнях почек или приёме лекарств сначала проконсультируйтесь с врачом.",
    contactTitle: "Контакты",
    contactText: "Нашли ошибку или есть вопрос? Напишите нам на",
    back: "← Назад к калькулятору",
  },
  footer: {
    disclaimer:
      "Это образовательный инструмент, а не медицинская рекомендация. Моногидрат креатина хорошо изучен и безопасен для большинства здоровых взрослых, но при проблемах с почками или приёме лекарств проконсультируйтесь с врачом.",
    home: "Главная",
    about: "О проекте",
    blog: "Гайды",
    widget: "Виджет",
    privacy: "Политика конфиденциальности",
    cookieSettings: "Настройки cookie",
    rights: "Все права защищены.",
  },
  blog: {
    metaTitle: "Гайды и статьи о креатине — CreatineCalc",
    metaDescription:
      "Понятные гайды о креатине: дозировка, загрузка, время приёма, безопасность и не только.",
    title: "Гайды о креатине",
    intro: "Короткие практичные материалы о том, как правильно принимать креатин.",
    backToBlog: "← Все гайды",
    ctaTitle: "Узнайте свою дозу креатина",
    ctaNote: "Введите вес и процент жира, чтобы получить суточную дозу за секунды.",
    ctaButton: "Открыть калькулятор",
  },
  widget: {
    metaTitle: "Встройте калькулятор креатина на свой сайт",
    metaDescription:
      "Добавьте бесплатный калькулятор креатина на свой сайт одной строкой кода.",
    title: "Встроить этот калькулятор",
    intro:
      "Ведёте фитнес-сайт, блог или форум? Добавьте калькулятор креатина на любую страницу кодом ниже. Это бесплатно — просим лишь небольшую ссылку на нас.",
    codeTitle: "Скопируйте и вставьте этот код",
    copy: "Скопировать код",
    copied: "Скопировано!",
    previewTitle: "Живой пример",
  },
  cookie: {
    text: "Мы используем cookie, чтобы запоминать ваши настройки и, если вы согласны, измерять трафик и показывать рекламу. См. нашу",
    privacyLink: "Политику конфиденциальности",
    reject: "Отклонить",
    accept: "Принять",
  },
  privacy: {
    title: "Политика конфиденциальности",
    updated: "Обновлено: 15 июня 2026",
    shortTitle: "Коротко",
    shortItems: [
      "Всё, что вы вводите в калькуляторы (вес, процент жира и так далее), считается прямо в вашем браузере. Эти данные не отправляются и не хранятся на наших серверах.",
      "Мы используем всего несколько cookie: одну для запоминания вашего выбора и, с вашего согласия, cookie для аналитики и рекламы.",
      "Мы никогда не продаём ваши персональные данные.",
    ],
    s1Title: "1. Кто мы",
    s1: 'Этот сайт ("CreatineCalc", «мы») управляется {company}. Эта политика объясняет, как мы обращаемся с информацией при посещении {domain}.',
    s2Title: "2. Какие данные мы собираем",
    s2a: "Что вы вводите. Числа, которые вы вводите в калькуляторы, используются только для расчёта результата на вашем устройстве. Они не отправляются нам, не логируются и не сохраняются на сервере.",
    s2b: "Что собирается автоматически. Если вы разрешите cookie аналитики или рекламы, наши провайдеры могут собирать ваш IP-адрес, тип браузера и устройства, просмотренные страницы и примерное местоположение с помощью cookie и схожих технологий.",
    s3Title: "3. Cookie",
    s3Intro: "Мы делим cookie на три категории:",
    s3Items: [
      "Необходимые: запоминают ваш выбор по cookie. Всегда включены, без них сайт не работает корректно.",
      "Аналитические: показывают, как люди используют сайт, например Google Analytics. Устанавливаются только с вашего согласия.",
      "Рекламные: используются для показа и оценки рекламы. Устанавливаются только с вашего согласия.",
    ],
    s3Tail:
      "Вы можете изменить или отозвать свой выбор в любой момент через «Настройки cookie» в подвале сайта или очистив cookie в браузере.",
    s4Title: "4. Как мы используем данные",
    s4: "Чтобы поддерживать и улучшать сайт, понимать трафик и, только с вашего согласия, показывать и оценивать рекламу. Мы не используем ваши данные для автоматических решений о вас.",
    s5Title: "5. Сторонние сервисы",
    s5Intro: "При включении с вашего согласия мы можем использовать:",
    s5Analytics: "Google Analytics",
    s5Tail: "Эти провайдеры обрабатывают данные согласно собственным политикам конфиденциальности.",
    s6Title: "6. Ваши права",
    s6: "В зависимости от места проживания (например, ЕЭЗ или Великобритания по GDPR, Калифорния по CCPA и CPRA) вы можете иметь право на доступ, исправление, удаление или ограничение использования ваших персональных данных, а также право отказаться от их продажи или передачи. Чтобы воспользоваться этими правами, напишите нам на {email}.",
    s7Title: "7. Хранение данных",
    s7: "Мы не храним данные ваших калькуляторов. Данные аналитики или рекламы хранятся только столько, сколько нужно для указанных целей, согласно настройкам наших провайдеров.",
    s8Title: "8. Конфиденциальность детей",
    s8: "Сайт не предназначен для детей младше 13 лет (или минимального возраста в вашей стране), и мы сознательно не собираем их персональные данные.",
    s9Title: "9. Изменения политики",
    s9: 'Мы можем время от времени обновлять эту политику. При обновлении мы изменим дату "Обновлено" вверху страницы.',
    s10Title: "10. Контакты",
    s10: "Вопросы по этой политике? Напишите нам на {email} или по адресу {company}.",
    back: "← Назад к калькулятору",
  },
};

const dictionaries: Record<Locale, Dict> = { en, ru };

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}
