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
  {
    slug: "creatine-monohydrate-vs-other-forms",
    date: "2026-06-19",
    en: {
      title: "Creatine Monohydrate vs HCl, Ethyl Ester and the Rest",
      description:
        "Fancy forms promise better absorption and no bloating. The research keeps landing on plain monohydrate. Here is why.",
      body: [
        { p: "Walk into any supplement shop and you will see creatine HCl, ethyl ester, buffered, liquid, and more — usually at a higher price than plain monohydrate. The marketing promises better absorption and less water retention. The evidence tells a simpler story." },
        { h: "Why monohydrate is the standard" },
        { p: "Creatine monohydrate is the form used in the vast majority of studies, and it has decades of safety and effectiveness data behind it. It is cheap, it dissolves well enough, and it reliably saturates your muscles. When researchers compare it head-to-head with newer forms, monohydrate either wins or ties — it rarely loses." },
        { h: "What about HCl and the others?" },
        { p: "Creatine HCl is more soluble in water, which is its main real advantage: you can mix a smaller scoop. But more soluble does not mean more effective once it is inside you. Ethyl ester actually performs worse in some studies because it breaks down before reaching the muscle. Buffered and liquid versions have not shown a meaningful edge either." },
        { h: "Does form change your dose?" },
        { p: "Your effective dose is about how much creatine reaches your muscles, and that is driven by your lean mass — not the label on the tub. Whichever form you buy, base your daily amount on your body. Put your weight and body fat into the calculator and it gives you a target you can use with any form." },
        { p: "Bottom line: monohydrate is the cheapest and the best-studied. Unless solubility is a dealbreaker for you, there is no strong reason to pay more." },
      ],
    },
    ru: {
      title: "Моногидрат креатина против HCl, этил-эфира и прочих форм",
      description:
        "Модные формы обещают лучшее усвоение и отсутствие отёков. Исследования снова и снова выбирают обычный моногидрат. Разбираемся почему.",
      body: [
        { p: "В любом магазине добавок вы увидите креатин HCl, этил-эфир, буферизованный, жидкий и другие формы — обычно дороже обычного моногидрата. Маркетинг обещает лучшее усвоение и меньше задержки воды. Данные говорят проще." },
        { h: "Почему моногидрат — стандарт" },
        { p: "Моногидрат креатина — это форма из подавляющего большинства исследований, за ней десятилетия данных по безопасности и эффективности. Он дешёвый, неплохо растворяется и надёжно насыщает мышцы. Когда его сравнивают напрямую с новыми формами, моногидрат либо выигрывает, либо вничью — проигрывает редко." },
        { h: "А что с HCl и остальными?" },
        { p: "Креатин HCl лучше растворяется в воде — это его главное реальное преимущество: меньше мерная ложка. Но лучше растворяется не значит эффективнее внутри тела. Этил-эфир в части исследований даже хуже, потому что распадается, не дойдя до мышцы. Буферизованные и жидкие версии тоже не показали заметного превосходства." },
        { h: "Меняет ли форма дозу?" },
        { p: "Ваша рабочая доза — это сколько креатина доходит до мышц, а это зависит от сухой массы, а не от надписи на банке. Какую бы форму вы ни купили, считайте суточное количество по своему телу. Введите вес и процент жира в калькулятор — он даст цель, которая подходит к любой форме." },
        { p: "Итог: моногидрат — самый дешёвый и лучше всего изученный. Если растворимость для вас не критична, переплачивать незачем." },
      ],
    },
  },
  {
    slug: "does-creatine-cause-hair-loss",
    date: "2026-06-19",
    en: {
      title: "Does Creatine Cause Hair Loss? What the Evidence Actually Shows",
      description:
        "The hair-loss fear traces back to a single small study about a hormone — not about hair. Here is the honest picture.",
      body: [
        { p: "The idea that creatine causes baldness is one of the stickiest worries online, and it comes from one small study. Look at what that study actually measured and the fear gets a lot smaller." },
        { h: "Where the worry comes from" },
        { p: "A 2009 study in rugby players found that creatine raised levels of DHT, a hormone linked to male-pattern baldness in people who are genetically prone to it. That is the entire basis of the claim. The study did not measure hair loss at all — only the hormone." },
        { h: "What is missing from the story" },
        { p: "No study since has shown that creatine actually makes hair fall out. Other research has not even reliably reproduced the DHT increase. So we have one hormone signal in one small group, no direct evidence of thinning hair, and years of creatine use by millions of people without a hair-loss pattern showing up." },
        { h: "Should you worry?" },
        { p: "If you are genetically prone to male-pattern baldness, it is reasonable to be cautious and watch how you respond — but there is no solid evidence that creatine will speed it up. For most people this is a myth built on a single indirect finding." },
        { p: "Bottom line: the hair-loss link is weak and unproven. If you take creatine, dose it sensibly for your body — the calculator handles that part in seconds." },
      ],
    },
    ru: {
      title: "Вызывает ли креатин выпадение волос? Что показывают данные",
      description:
        "Страх облысения тянется от одного маленького исследования про гормон — не про волосы. Даём честную картину.",
      body: [
        { p: "Мысль, что креатин вызывает облысение, — один из самых живучих страхов в сети, и идёт он от одного небольшого исследования. Стоит посмотреть, что в нём на самом деле измеряли, и страх заметно уменьшается." },
        { h: "Откуда взялось опасение" },
        { p: "В исследовании 2009 года на регбистах нашли, что креатин поднял уровень ДГТ — гормона, связанного с облысением по мужскому типу у генетически предрасположенных людей. На этом построено всё утверждение. Само выпадение волос исследование не измеряло вообще — только гормон." },
        { h: "Чего не хватает в этой истории" },
        { p: "Ни одно исследование с тех пор не показало, что креатин реально приводит к выпадению волос. Другие работы даже не смогли надёжно воспроизвести рост ДГТ. Итого: один гормональный сигнал в одной небольшой группе, нет прямых данных о поредении волос и годы приёма креатина миллионами людей без проявившейся картины облысения." },
        { h: "Стоит ли беспокоиться?" },
        { p: "Если у вас есть генетическая склонность к облысению по мужскому типу, осторожность и наблюдение за реакцией разумны — но твёрдых доказательств, что креатин ускорит процесс, нет. Для большинства это миф на одном косвенном наблюдении." },
        { p: "Итог: связь с выпадением волос слабая и недоказанная. Если принимаете креатин — считайте дозу разумно под своё тело, калькулятор делает это за секунды." },
      ],
    },
  },
  {
    slug: "how-long-does-creatine-take-to-work",
    date: "2026-06-19",
    en: {
      title: "How Long Does Creatine Take to Work?",
      description:
        "Days if you load, a few weeks if you do not. Here is the realistic timeline for feeling and seeing creatine work.",
      body: [
        { p: "Creatine is not a stimulant, so do not expect a kick the first time you take it. It works by slowly filling your muscle stores, and the timeline depends mostly on whether you load." },
        { h: "If you load: about a week" },
        { p: "With a loading phase — roughly 20 g a day split into servings for five to seven days — your muscles reach full saturation in under a week. Many people notice slightly better strength endurance and a fuller look in the muscles right after that." },
        { h: "If you do not load: three to four weeks" },
        { p: "Taking a steady daily dose without loading gets you to the same fully saturated point, just slower — usually three to four weeks. The end result is identical; loading only changes the speed, not the ceiling." },
        { h: "What 'working' actually feels like" },
        { p: "The effects are real but subtle: a rep or two more on hard sets, a bit more in the tank late in a workout, faster recovery between sessions. The dramatic part is what builds over months of training with that small edge — not a single-session jolt." },
        { p: "Bottom line: a week with loading, a month without, then steady performance as long as you keep taking it daily. Get your loading and maintenance numbers from the calculator." },
      ],
    },
    ru: {
      title: "Через сколько начинает действовать креатин?",
      description:
        "Дни, если грузитесь, пара недель — если нет. Даём реалистичный график, когда креатин чувствуется и виден.",
      body: [
        { p: "Креатин — не стимулятор, так что не ждите эффекта с первого приёма. Он работает за счёт медленного наполнения запасов в мышцах, и срок зависит в основном от того, делаете ли вы загрузку." },
        { h: "С загрузкой: примерно неделя" },
        { p: "При фазе загрузки — около 20 г в день в несколько приёмов 5–7 дней — мышцы насыщаются полностью меньше чем за неделю. Многие сразу после этого замечают чуть лучшую силовую выносливость и более наполненный вид мышц." },
        { h: "Без загрузки: три-четыре недели" },
        { p: "Ровная суточная доза без загрузки приводит к той же полной насыщенности, просто медленнее — обычно за три-четыре недели. Итог тот же; загрузка меняет только скорость, не потолок." },
        { h: "Как ощущается, что креатин «работает»" },
        { p: "Эффект реальный, но тонкий: повтор-другой сверху в тяжёлых подходах, чуть больше запаса под конец тренировки, быстрее восстановление между занятиями. Главное накапливается за месяцы тренировок с этим небольшим преимуществом, а не как разовый всплеск." },
        { p: "Итог: неделя с загрузкой, месяц без, дальше — стабильная отдача, пока принимаете каждый день. Дозу загрузки и поддержки даст калькулятор." },
      ],
    },
  },
  {
    slug: "creatine-and-water-weight",
    date: "2026-06-19",
    en: {
      title: "Creatine and Water Weight: Why the Scale Jumps",
      description:
        "A quick 1-2 kg bump on the scale scares people off creatine. It is water inside the muscle, not fat. Here is what is happening.",
      body: [
        { p: "Start creatine and the scale often climbs a kilogram or two within a couple of weeks. That jump makes people panic and quit. It is worth understanding, because it is not fat and it is not a bad sign." },
        { h: "Where the weight comes from" },
        { p: "Creatine pulls water into your muscle cells along with itself. That extra water is stored inside the muscle, which is part of how creatine helps performance. So the early weight gain is mostly intracellular water, not body fat and not bloat sitting under your skin." },
        { h: "Will you look puffy?" },
        { p: "Generally no. Because the water goes into the muscle rather than around it, most people look the same or slightly fuller, not softer. The 'creatine bloat' reputation is overblown for normal daily doses; heavy loading is more likely to cause a temporary watery feeling." },
        { h: "Does it ever go away?" },
        { p: "The initial water bump levels off once your muscles are saturated — it does not keep climbing. If you stop creatine, that water weight gradually comes back off over a few weeks. It is a one-time shift, not endless gain." },
        { p: "Bottom line: the early scale jump is water in your muscle, and it stabilises. Keeping your dose sensible keeps it minimal — the calculator sets that for your body." },
      ],
    },
    ru: {
      title: "Креатин и вес воды: почему весы прыгают",
      description:
        "Быстрый плюс 1–2 кг на весах пугает и отталкивает от креатина. Это вода внутри мышцы, не жир. Объясняем, что происходит.",
      body: [
        { p: "Начинаете креатин — и весы за пару недель часто прибавляют килограмм-другой. Этот скачок пугает, и люди бросают. Стоит разобраться, потому что это не жир и не плохой знак." },
        { h: "Откуда берётся вес" },
        { p: "Креатин затягивает воду в мышечные клетки вместе с собой. Эта вода хранится внутри мышцы — отчасти так креатин и помогает работоспособности. Поэтому ранняя прибавка — это в основном внутриклеточная вода, а не жир и не отёк под кожей." },
        { h: "Будете ли выглядеть отёчным?" },
        { p: "Обычно нет. Поскольку вода уходит внутрь мышцы, а не вокруг неё, большинство выглядит так же или чуть наполненнее, а не рыхлее. Репутация «креатинового отёка» преувеличена для обычных суточных доз; временное ощущение воды вероятнее при тяжёлой загрузке." },
        { h: "Это когда-нибудь уходит?" },
        { p: "Начальная прибавка воды выходит на плато, как только мышцы насыщены — дальше не растёт. Если бросить креатин, эта вода постепенно уходит за несколько недель. Это разовый сдвиг, а не бесконечный набор." },
        { p: "Итог: ранний скачок на весах — вода в мышце, и он стабилизируется. Разумная доза держит его минимальным — калькулятор задаёт её под ваше тело." },
      ],
    },
  },
  {
    slug: "creatine-on-rest-days",
    date: "2026-06-19",
    en: {
      title: "Should You Take Creatine on Rest Days?",
      description:
        "Yes — and it is one of the most important habits with creatine. Here is why off-days still count.",
      body: [
        { p: "A common question once people start creatine: do you skip it on days you do not train? The short answer is no — take it on rest days too. Here is the logic." },
        { h: "Creatine is about saturation, not timing" },
        { p: "Creatine helps because your muscles stay topped up over time, not because of a hit on workout day. Keeping that store full is a daily job. Skipping rest days slowly lets the level drift down, which works against the whole point of taking it." },
        { h: "Does the dose change on off days?" },
        { p: "No. Once your muscles are saturated, you take the same maintenance dose every day to keep them there — training day or not. There is no need to take more after a workout or less on a rest day." },
        { h: "When should you take it on a rest day?" },
        { p: "Whenever you will remember. With no workout to anchor it to, just attach it to a daily habit — morning coffee, a meal, whatever is reliable. Consistency is the only rule that matters." },
        { p: "Bottom line: take creatine every day, training or not, at the same dose. Not sure what that dose is? The calculator gives you a maintenance number for your body." },
      ],
    },
    ru: {
      title: "Нужно ли принимать креатин в дни отдыха?",
      description:
        "Да — и это одна из важнейших привычек с креатином. Объясняем, почему дни без тренировок тоже считаются.",
      body: [
        { p: "Частый вопрос после старта креатина: пропускать ли его в дни без тренировок? Короткий ответ — нет, в дни отдыха тоже принимайте. Вот логика." },
        { h: "Креатин про насыщение, а не про время приёма" },
        { p: "Креатин помогает потому, что мышцы постоянно держатся наполненными, а не из-за дозы в день тренировки. Поддержание запаса — ежедневная задача. Пропуск дней отдыха постепенно уводит уровень вниз, а это против самого смысла приёма." },
        { h: "Меняется ли доза в выходной?" },
        { p: "Нет. Когда мышцы насыщены, вы принимаете ту же поддерживающую дозу каждый день, чтобы их там держать — тренировка или нет. Не нужно больше после тренировки или меньше в день отдыха." },
        { h: "Когда принимать в день отдыха?" },
        { p: "Когда не забудете. Тренировки, к которой привязаться, нет — привяжите к ежедневной привычке: утренний кофе, приём пищи, что угодно надёжное. Регулярность — единственное важное правило." },
        { p: "Итог: принимайте креатин каждый день, тренировка или нет, в той же дозе. Не знаете, какой? Калькулятор даст поддерживающую цифру под ваше тело." },
      ],
    },
  },
  {
    slug: "creatine-for-older-adults",
    date: "2026-06-19",
    en: {
      title: "Creatine for Older Adults: Muscle, Strength and Brain",
      description:
        "Creatine may be most useful later in life, not just in the gym at 25. Here is what it offers as you age.",
      body: [
        { p: "Creatine is usually marketed to young lifters, but some of the most interesting research is in people over fifty. As you age, holding onto muscle and strength becomes a health priority — and creatine fits right into that." },
        { h: "Fighting age-related muscle loss" },
        { p: "After about fifty, adults gradually lose muscle and strength, a process called sarcopenia. Studies show that creatine combined with resistance training helps older adults gain more strength and muscle than training alone. The training does the work; creatine adds to the result." },
        { h: "Bone and everyday function" },
        { p: "Because creatine supports strength and the ability to train harder, research is exploring benefits for bone health and practical things like balance and getting up from a chair — the functions that keep people independent later in life." },
        { h: "What about the brain?" },
        { p: "An emerging line of research suggests creatine may support cognition and mental energy, with effects that could be more noticeable in older adults and in people who are sleep-deprived or under stress. It is promising rather than settled, but it adds to the case." },
        { p: "Bottom line: creatine pairs especially well with strength training as you age. Dose it for your body — the calculator gives you a number based on your lean mass." },
      ],
    },
    ru: {
      title: "Креатин для пожилых: мышцы, сила и мозг",
      description:
        "Креатин может быть полезнее всего в зрелом возрасте, а не только в зале в 25. Разбираем, что он даёт с годами.",
      body: [
        { p: "Креатин обычно рекламируют молодым атлетам, но часть самых интересных исследований — на людях старше пятидесяти. С возрастом сохранение мышц и силы становится вопросом здоровья — и креатин сюда хорошо вписывается." },
        { h: "Борьба с возрастной потерей мышц" },
        { p: "Примерно после пятидесяти взрослые постепенно теряют мышцы и силу — это называется саркопения. Исследования показывают, что креатин в сочетании с силовыми тренировками помогает пожилым набрать больше силы и мышц, чем одни тренировки. Работу делает тренинг; креатин добавляет к результату." },
        { h: "Кости и повседневная функция" },
        { p: "Поскольку креатин поддерживает силу и способность тренироваться тяжелее, исследования изучают пользу для здоровья костей и практических вещей — равновесия, подъёма со стула, то есть функций, которые сохраняют самостоятельность в зрелом возрасте." },
        { h: "А что с мозгом?" },
        { p: "Развивающееся направление исследований предполагает, что креатин может поддерживать когнитивные функции и умственную энергию, причём эффект заметнее у пожилых и у людей в недосыпе или под стрессом. Это скорее перспективно, чем доказано окончательно, но добавляет аргументов." },
        { p: "Итог: креатин особенно хорошо сочетается с силовыми тренировками с возрастом. Дозируйте под своё тело — калькулятор даст цифру по сухой массе." },
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
