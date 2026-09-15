// Pure content — no DOM/browser dependency, so this file can also be
// loaded from plain Node (see scripts/check-content.mjs) to validate
// asset paths and translation completeness in CI.

const NAV = [
  { id: "career", glyph: "💼", label: { ru: "Карьера", en: "Career" } },
  { id: "projects", glyph: "🧩", label: { ru: "Проекты", en: "Projects" } },
  { id: "talks", glyph: "🎤", label: { ru: "Выступления", en: "Public Talks" } },
  { id: "blog", glyph: "📝", label: { ru: "Блог", en: "Blog" }, external: "https://blog.khaiminov.com" },
  { id: "personal", glyph: "🎸", label: { ru: "Личное", en: "Personal" } },
  { id: "contacts", glyph: "✉️", label: { ru: "Контакты", en: "Contacts" } },
];

const DATA = {
  hero: { ru: "Алексей Хайминов", en: "Alexey Khaiminov" },
  heroLede: { ru: "Карьера в мобильной разработке — и человек за ней.", en: "A career in mobile engineering — and the person behind it." },
  sectionIntro: {
    career: { ru: "Путь по компаниям и продуктам — с фото рабочих мест (скоро настоящих).", en: "A path through companies and products — with photos of the places (real ones coming soon)." },
    projects: { ru: "Фриланс и сторонние проекты. Список пополняется.", en: "Freelance and side projects. List is growing." },
    talks: { ru: "Конференции, менторство, митапы.", en: "Conferences, mentoring, meetups." },
    personal: { ru: "То, что вне программирования.", en: "The things outside of programming." },
    contacts: { ru: "Как со мной связаться.", en: "How to reach me." },
  },
  career: [
    {
      id: "bss", glyph: "🏦", logo: "assets/career/bss/logo.webp", order: { desktop: 302, mobile: 7 },
      title: { ru: "BSS", en: "BSS" },
      role: { ru: "Android-разработчик", en: "Android Developer" },
      period: { ru: "июн 2013 – апр 2015 · Москва", en: "Jun 2013 – Apr 2015 · Moscow" },
      summary: { ru: "Первая работа Android-разработчиком в Москве! Android 4.2, и уже тогда — легаси: ActivityTab с переключением Activity вместо фрагментов, AsyncTask как вполне нормальное продуктовое решение, IntentService, завязанный на навигацию по Activity, разные launch mode — сколько открытий тогда было, хах. Часть логики к тому же приходилось писать на BSScript — прослойке между бэком и клиентом.", en: "My first job as an Android developer in Moscow! Android 4.2, and even then it was already legacy: ActivityTab-based tab switching instead of fragments, AsyncTask as a perfectly normal production solution, an IntentService tied to Activity navigation, different launch modes — so many discoveries back then, haha. On top of that, part of the logic had to be written in BSScript — the layer between backend and client." },
      highlights: {
        ru: ["Разрабатывал и поддерживал портфель из 26 банковских Android-приложений", "Консультировал коллег при переходе на новый Android-клиент", "Собрал первое приложение под умные часы"],
        en: ["Developed and maintained a portfolio of 26 banking Android applications", "Advised colleagues during the transition to a new Android client", "Built the team's first smartwatch app"],
      },
      photos: ["assets/career/bss/nagatinskaya-street.webp", "assets/career/bss/chertanovo.webp", "assets/career/bss/tatfondbank-app.webp"],
    },
    {
      id: "mailru-games", glyph: "🎮", logo: "assets/career/mailru-games/logo.svg", order: { desktop: 301, mobile: 6 },
      title: { ru: "Mail.Ru Игры", en: "Mail.Ru Games" },
      role: { ru: "Android-разработчик", en: "Android Developer" },
      period: { ru: "апр – ноя 2015 · Москва", en: "Apr – Nov 2015 · Moscow" },
      summary: { ru: "Тут делал не игры, а проект под NDA — подробности пока закрыты. Дополнительно собрал приложение на Windows Universal Platform (UWP), которое показывало статистику игроков «Арматы».", en: "Not games here, actually — an NDA project, details still under wraps. On the side, I built a Windows Universal Platform (UWP) app that showed player stats for Armata." },
      highlights: {
        ru: ["Разрабатывал проект под NDA (детали закрыты соглашением)", "Собрал приложение на Windows Universal Platform (UWP) со статистикой игроков «Арматы»"],
        en: ["Worked on an NDA project (details under confidentiality)", "Built a Windows Universal Platform (UWP) app with player stats for Armata"],
      },
      photos: ["assets/career/mailru-games/baltiysky.webp", "assets/career/mailru-games/skylight-tower.webp"],
    },
    {
      id: "odnoklassniki", glyph: "👥", logo: "assets/career/ok/logo.webp", order: { desktop: 300, mobile: 5 },
      title: { ru: "Одноклассники (OK.RU)", en: "Odnoklassniki (OK.RU)" },
      role: { ru: "Android-разработчик, Mail.Ru Group", en: "Android Developer, Mail.Ru Group" },
      period: { ru: "ноя 2015 – апр 2018 · Москва", en: "Nov 2015 – Apr 2018 · Moscow" },
      summary: { ru: "С Димой и Мишей здесь мы прошли всё — от запуска стартапа до правок в разделах «до логина» (экраны, которые видели миллионы пользователей каждый день). Считали аналитику, спорили с core-командой, чтобы успеть замержить новую архитектуру в срок. Феерический финал этой работы стал ступенькой к ещё большему росту как специалиста.", en: "With Dima and Misha, we went through everything here — from launching a startup to tweaking the screens before login (screens seen by millions of users every day). Crunched analytics, argued with the core team to merge the new architecture in time. The wild finale of this job became a stepping stone to an even bigger jump in my growth as an engineer." },
      highlights: {
        ru: ["Соцсеть с аудиторией ~40 млн MAU", "Отвечал за флоу входа, регистрации и восстановления аккаунта для воронки новых пользователей"],
        en: ["A social network with ~40M MAU", "Owned login, registration, and account recovery flows for the new-user acquisition funnel"],
      },
      photos: ["assets/career/ok/anniversary.webp", "assets/career/ok/keychains.webp", "assets/career/ok/app-login.webp", "assets/career/ok/app-notfound.webp", "assets/career/ok/me.webp", "assets/career/ok/prague.webp", "assets/career/ok/analytics.webp"],
    },
    {
      id: "revolut", glyph: "🚀", logo: "assets/career/revolut/logo.svg", placeholder: true, order: { desktop: 100, mobile: 1 },
      title: { ru: "Revolut", en: "Revolut" },
      role: { ru: "", en: "" },
      period: { ru: "С октября 2026", en: "Starting Oct 2026" },
      summary: { ru: "Волнуюсь! Подробности скоро.", en: "I'm excited — details TBD." },
      highlights: { ru: [], en: [] },
    },
    {
      id: "youla", glyph: "🛒", logo: "assets/career/youla/logo.svg", order: { desktop: 201, mobile: 4 },
      title: { ru: "Юла", en: "Youla" },
      role: { ru: "Principal Android Engineer, Mail.Ru Group", en: "Principal Android Engineer, Mail.Ru Group" },
      period: { ru: "2018 – 2021 · Москва", en: "2018 – 2021 · Moscow" },
      summary: { ru: "С командой Юлы прошёл большой путь — от 2 Android-разработчиков и MVP до 25 человек под моим руководством и серьёзного, технически зрелого приложения. Стали запускаться быстрее ближайшего конкурента, обладая большей функциональностью. Чего стоили только тарифы и стейт-машины! Успешно передал дела и оставил планы, которые коллеги реализовали. Серёга, Саня и Лёха — привет! Спасибо за истории (Белгород, Римская империя), дружбу и работу.", en: "With the Youla team, I went a long way — from 2 Android developers and an MVP to a 25-person team under my lead and a serious, technically mature app. We started launching faster than our closest competitor, with more functionality to boot. The tariffs and state machines alone were something else! Successfully handed off my responsibilities and left plans the team went on to execute. Seryoga, Sanya, and Lyokha — big hello! Thanks for the stories (Belgorod, the Roman Empire), the friendship, and the work." },
      highlights: {
        ru: ["Маркетплейс: ~1,8 млн DAU, ~11,5 млн MAU, crash-free 99,9%", "Проектировал и развивал Android-архитектуру Юлы; определял технологические стандарты", "Внедрил Clean + MVI — провёл масштабный рефакторинг кодовой базы", "Сократил сетевые запросы при запуске с 6 до 1 за счёт миграции на GraphQL (Apollo)", "Реализовал мультистор-дистрибуцию: Google Play, Huawei AppGallery, RuStore", "Разрабатывал внутренние инструменты: ленту с динамической рекламой, замеры перформанса", "Провёл более сотни технических собеседований", "Курировал в команде внедрение дизайн-системы, тёмной темы и нативных UI-тестов, интеграции с внешними системами", "Выступал на конференциях; ревьюил Android-статьи коллег для блога на Хабре"],
        en: ["Marketplace: ~1.8M DAU, ~11.5M MAU, 99.9% crash-free", "Designed and owned Youla's Android architecture; defined technology standards", "Introduced Clean + MVI — led a major codebase refactoring", "Reduced startup network calls from 6 to 1 via GraphQL (Apollo) migration", "Built multi-store distribution: Google Play, Huawei AppGallery, RuStore", "Built internal tools: a dynamic-ad feed, performance measurement", "Conducted 100+ technical interviews", "Oversaw the team's rollout of a design system, dark theme, and native UI tests, and integrations with external systems", "Spoke at conferences; reviewed teammates' Android articles for the Habr blog"],
      },
      photos: ["assets/career/youla/iron-throne.webp", "assets/career/youla/backpack-patch.webp", "assets/career/youla/dark-theme.webp", "assets/career/youla/conference-talk.webp", "assets/career/youla/build-stats.webp", "assets/career/youla/old-logo.webp", "assets/career/youla/new-logo-2020.webp", "assets/career/youla/offsite-game.webp"],
    },
    {
      id: "vk", glyph: "🌐", logo: "assets/career/vk/logo.svg", order: { desktop: 202, mobile: 3 },
      title: { ru: "ВКонтакте", en: "VK Company" },
      role: { ru: "Android Platform Lead, Marketplace BU", en: "Android Platform Lead, Marketplace BU" },
      period: { ru: "дек 2021 – мар 2023 · Москва · 1 год 3 мес", en: "Dec 2021 – Mar 2023 · Moscow · 1 yr 3 mos" },
      summary: { ru: "Стал техлидом команды Юлы и ВК Маркета, подхватив дела у предыдущего лида. Горизонтальный лид для ~20 разработчиков (VK Маркет + Юла).", en: "Became tech lead for the Youla and VK Marketplace team, picking up where the previous lead left off. Horizontal lead across ~20 engineers (VK Marketplace + Youla)." },
      highlights: {
        ru: ["Удержал команду от распада в непростой 2022 год", "Ускорил холодный старт приложения Юла на 55%", "Запустил «Инициативные группы» — добровольную программу работы с техдолгом", "Выстроил кросс-командные практики: release management, бэклог техдолга с роадмапом устранения для бизнеса"],
        en: ["Held the team together through a rough 2022", "Reduced Youla app cold start by 55%", "Launched Initiative Groups — a voluntary tech-debt program", "Established cross-team practices: release management, a tech-debt backlog with a remediation roadmap for the business"],
      },
      photos: ["assets/career/vk/office-entrance.webp", "assets/career/vk/office-cube.webp", "assets/career/vk/spb.webp"],
    },
    {
      id: "banco-plata", glyph: "🏝️", logo: "assets/career/plata/logo.svg", order: { desktop: 200, mobile: 2 },
      title: { ru: "Plata-банк", en: "Banco Plata" },
      role: { ru: "Senior Android Engineer — Platform", en: "Senior Android Engineer — Platform" },
      period: { ru: "дек 2022 – июн 2026 · Лимасол, Кипр", en: "Dec 2022 – Jun 2026 · Limassol, Cyprus" },
      summary: { ru: "Стартап, в который пришёл ещё до первого запуска — вместе дошли до миллионов пользователей. Здесь не только про Android: то фичи, то платформа, то просто «вот направление, разберись» без чёткого тз. Нас четверо на платформе, приглядываем за 20+ разработчиками.", en: "A startup I joined before its very first launch — together we got to millions of users. It's not just Android here: sometimes features, sometimes platform work, sometimes just \"here's a direction, figure it out\" with no clear spec. Four of us on the platform team, looking after 20+ engineers." },
      highlights: {
        ru: ["Сократил медианное время сборки на 35% — завёл дашборды Grafana со Slack-алертами вместо разбора логов руками", "Перетащил DI с Dagger 2 на Metro — холодная сборка ускорилась в полтора раза", "Нашёл, где тормозит синхронизация Android Studio, и сделал по этому дашборд с гайдлайном", "Перевёл CI на Kotlin DSL, добавил Baseline Profiles — холодный старт быстрее на ~20%", "Завёл Mobile Toolbox — свой сервис телеметрии, который теперь смотрит и на другие команды, не только Android", "Успел зацепить и security, и профиль пользователя с QR-кодами при запуске продукта"],
        en: ["Cut median build time by 35% — set up Grafana dashboards with Slack alerts instead of digging through logs by hand", "Moved DI from Dagger 2 to Metro — cold builds got 1.5× faster", "Tracked down why Android Studio sync was slow and built a dashboard (plus a guide) around it", "Moved CI to Kotlin DSL and added Baseline Profiles — cold start is ~20% faster now", "Started Mobile Toolbox — our own telemetry service, now spreading to non-Android teams too", "Also ended up touching security, the profile screen, and QR codes at launch"],
      },
      photos: ["assets/career/plata/office-sign.webp", "assets/career/plata/office-view.webp", "assets/career/plata/ownership-board.webp", "assets/career/plata/build-dashboard.webp", "assets/career/plata/sync-phases.webp", "assets/career/plata/daily-checks.webp", "assets/career/plata/dagger-metro-meme.webp"],
    },
    {
      id: "bimash", glyph: "🏔️", logo: "assets/career/bimash/logo.webp", order: { desktop: 303, mobile: 8 },
      title: { ru: "Bimash", en: "Bimash" },
      role: { ru: "Портлеты под IBM WebSphere Portal", en: "Portlets on IBM WebSphere Portal" },
      period: { ru: "2010 · Астана", en: "2010 · Astana" },
      summary: { ru: "О, время учёбы — 4 курс, Казахстанский филиал МГУ, и подработка в местной компании Bimash. Уже тогда писал код: портлеты под WebSphere, веб, js, немного бэкенда.", en: "Ah, uni days — 4th year at the Kazakhstan branch of Moscow State University, and a part-time gig at local company Bimash. Even then I was writing code: WebSphere portlets, some web and JS, a bit of backend." },
      highlights: {
        ru: ["Разработал портлет-калькулятор налога на ввоз автотранспорта (компонент сайта) — использовался по всему Казахстану и оставался в эксплуатации вплоть до закрытия старого сайта таможенного департамента customs.kz"],
        en: ["Built a vehicle import tax calculator portlet (a page component) used across Kazakhstan; it remained in production until the old customs department site, customs.kz, was retired"],
      },
      photos: ["assets/career/bimash/portlet.webp", "assets/career/bimash/astana-1.webp", "assets/career/bimash/astana-2.webp"],
    },
  ],
  projects: [
    { id: "proj-1", glyph: "💻", placeholder: true, title: { ru: "Скоро", en: "Coming soon" }, role: { ru: "", en: "" }, period: { ru: "", en: "" }, summary: { ru: "Первый фриланс-проект появится здесь.", en: "The first freelance project will appear here." }, highlights: { ru: [], en: [] } },
    { id: "proj-2", glyph: "🛠️", placeholder: true, title: { ru: "Скоро", en: "Coming soon" }, role: { ru: "", en: "" }, period: { ru: "", en: "" }, summary: { ru: "Ещё один проект — на подходе.", en: "Another project — on the way." }, highlights: { ru: [], en: [] } },
  ],
  talks: [
    {
      id: "mobius", glyph: "🎤",
      title: { ru: "Mobius", en: "Mobius" },
      role: { ru: "Доклад", en: "Conference talk" },
      period: { ru: "2021 – 2023 · Москва", en: "2021 – 2023 · Moscow" },
      summary: { ru: "Доклад на конференции Mobius — во время работы в ВКонтакте.", en: "A conference talk at Mobius, during my time at VK." },
      highlights: { ru: [], en: [] },
    },
    {
      id: "heisenbug", glyph: "🎤",
      title: { ru: "Heisenbug", en: "Heisenbug" },
      role: { ru: "Доклад", en: "Conference talk" },
      period: { ru: "2021 – 2023 · Москва", en: "2021 – 2023 · Moscow" },
      summary: { ru: "Доклад на конференции Heisenbug — во время работы в ВКонтакте.", en: "A conference talk at Heisenbug, during my time at VK." },
      highlights: { ru: [], en: [] },
    },
    {
      id: "sirius", glyph: "👨‍🏫",
      title: { ru: "Сириус", en: "Sirius" },
      role: { ru: "Преподавание", en: "Teaching" },
      period: { ru: "2021 – 2023 · Сочи", en: "2021 – 2023 · Sochi" },
      summary: { ru: "Преподавал в образовательном центре «Сириус» — во время работы в ВКонтакте.", en: "Taught at the Sirius education center, during my time at VK." },
      highlights: { ru: [], en: [] },
    },
    {
      id: "vk-technopark", glyph: "👨‍🏫",
      title: { ru: "Техносфера ВК", en: "VK Technopark" },
      role: { ru: "Преподавание", en: "Teaching" },
      period: { ru: "2021 – 2023 · Москва", en: "2021 – 2023 · Moscow" },
      summary: { ru: "Преподавал в Техносфере ВК — во время работы в ВКонтакте.", en: "Taught at VK's Technopark program, during my time at VK." },
      highlights: { ru: [], en: [] },
    },
  ],
  personal: [
    { id: "guitar", glyph: "🎸", title: { ru: "Гитара", en: "Guitar" }, role: { ru: "", en: "" }, period: { ru: "", en: "" }, summary: { ru: "Подробности и фото — позже.", en: "Details and photos — later." }, highlights: { ru: [], en: [] } },
    { id: "knives", glyph: "🔪", title: { ru: "Ножи", en: "Knives" }, role: { ru: "", en: "" }, period: { ru: "", en: "" }, summary: { ru: "Подробности и фото — позже.", en: "Details and photos — later." }, highlights: { ru: [], en: [] } },
    { id: "mentoring", glyph: "🤝", title: { ru: "Менторство в «Творчестве чувств»", en: "Mentoring at «Tvorchestvo Chuvstv»" }, role: { ru: "", en: "" }, period: { ru: "", en: "" }, summary: { ru: "Подробности и фото — позже.", en: "Details and photos — later." }, highlights: { ru: [], en: [] } },
  ],
  contacts: {
    email: "alex.haiminov@gmail.com",
    telegram: "@SmilingZen",
    github: "github.com/xvar",
    location: { ru: "Лимасол, Кипр", en: "Limassol, Cyprus" },
    cv: { ru: "assets/Alexey_Khaiminov_CV_RU.pdf", en: "assets/Alexey_Khaiminov_CV_EN.pdf" },
  },
};

// Node-only export for scripts/check-content.mjs; browsers never define
// `module`, so this line is a no-op there and NAV/DATA stay plain globals.
if (typeof module !== "undefined") module.exports = { NAV, DATA };
