// Design mockup only — placeholder photos/text. Real content comes later
// (see docs/SPEC.md). Content is bilingual inline for now; final site moves
// this into Astro i18n. No backend, no build step — just open index.html.

const DATA = {
  nav: {
    ru: { career: "Карьера", projects: "Проекты", blog: "Блог", personal: "Личное", contacts: "Контакты" },
    en: { career: "Career", projects: "Projects", blog: "Blog", personal: "Personal", contacts: "Contacts" },
  },
  hero: {
    ru: { title: "Алексей Хайминов", text: "Android-инженер, который остаётся человеком за пределами резюме. Карьера, проекты и то, что не помещается в графу «опыт работы»." },
    en: { title: "Alexey Khaiminov", text: "An Android engineer who stays a person outside the résumé. Career, projects, and the things that don't fit into a job history." },
  },
  sectionIntro: {
    career: { ru: "Путь по компаниям и продуктам — с фото рабочих мест (скоро настоящих).", en: "A path through companies and products — with photos of the places (real ones coming soon)." },
    projects: { ru: "Фриланс и сторонние проекты. Список пополняется.", en: "Freelance and side projects. List is growing." },
    personal: { ru: "То, что вне программирования.", en: "The things outside of programming." },
    contacts: { ru: "Как со мной связаться.", en: "How to reach me." },
  },
  career: [
    {
      id: "kazakhstan",
      glyph: "🏔️",
      placeholder: true,
      company: { ru: "Казахстан", en: "Kazakhstan" },
      role: { ru: "Портлеты под IBM WebSphere Portal", en: "Portlets on IBM WebSphere Portal" },
      period: { ru: "уточняется", en: "TBD" },
      location: { ru: "Казахстан", en: "Kazakhstan" },
      summary: { ru: "Начало карьеры. Детали и достижения — уточняются у Алексея.", en: "Where the career started. Details and highlights to be confirmed." },
      highlights: { ru: [], en: [] },
    },
    {
      id: "bss",
      glyph: "🏦",
      company: { ru: "BSS", en: "BSS" },
      role: { ru: "Android-разработчик", en: "Android Developer" },
      period: { ru: "июн 2013 – апр 2015 · Москва", en: "Jun 2013 – Apr 2015 · Moscow" },
      location: { ru: "Москва", en: "Moscow" },
      summary: { ru: "Два года в банковской разработке.", en: "Two years in banking software." },
      highlights: {
        ru: ["Разрабатывал и поддерживал портфель из 26 банковских Android-приложений"],
        en: ["Developed and maintained a portfolio of 26 banking Android applications"],
      },
    },
    {
      id: "mailru-games",
      glyph: "🎮",
      company: { ru: "Mail.Ru Игры", en: "Mail.Ru Games" },
      role: { ru: "Android-разработчик", en: "Android Developer" },
      period: { ru: "апр – ноя 2015 · Москва", en: "Apr – Nov 2015 · Moscow" },
      location: { ru: "Москва", en: "Moscow" },
      summary: { ru: "Два проекта под NDA — подробности пока закрыты.", en: "Two projects under NDA — details stay closed." },
      highlights: { ru: [], en: [] },
    },
    {
      id: "odnoklassniki",
      glyph: "👥",
      company: { ru: "Одноклассники (OK.RU)", en: "Odnoklassniki (OK.RU)" },
      role: { ru: "Android-разработчик, Mail.Ru Group", en: "Android Developer, Mail.Ru Group" },
      period: { ru: "ноя 2015 – апр 2018 · Москва", en: "Nov 2015 – Apr 2018 · Moscow" },
      location: { ru: "Москва", en: "Moscow" },
      summary: { ru: "Социальная сеть с ~40 млн MAU.", en: "A social network with ~40M MAU." },
      highlights: {
        ru: ["Отвечал за флоу входа, регистрации и восстановления аккаунта для воронки новых пользователей"],
        en: ["Owned login, registration, and account recovery flows for the new-user acquisition funnel"],
      },
    },
    {
      id: "youla",
      glyph: "🛒",
      company: { ru: "Юла", en: "Youla" },
      role: { ru: "Principal Android Engineer, Mail.Ru Group", en: "Principal Android Engineer, Mail.Ru Group" },
      period: { ru: "2018 – 2021 · Москва", en: "2018 – 2021 · Moscow" },
      location: { ru: "Москва", en: "Moscow" },
      summary: { ru: "Маркетплейс: ~1,8 млн DAU, ~11,5 млн MAU, crash-free 99,9%.", en: "Marketplace: ~1.8M DAU, ~11.5M MAU, 99.9% crash-free." },
      highlights: {
        ru: [
          "Проектировал и развивал Android-архитектуру Юлы; определял технологические стандарты",
          "Внедрил Clean + MVI — провёл масштабный рефакторинг кодовой базы",
          "Сократил сетевые запросы при запуске с 6 до 1 за счёт миграции на GraphQL (Apollo)",
          "Реализовал мультистор-дистрибуцию: Google Play, Huawei AppGallery, RuStore",
        ],
        en: [
          "Designed and owned Youla's Android architecture; defined technology standards",
          "Introduced Clean + MVI — led a major codebase refactoring",
          "Reduced startup network calls from 6 to 1 via GraphQL (Apollo) migration",
          "Built multi-store distribution: Google Play, Huawei AppGallery, RuStore",
        ],
      },
    },
    {
      id: "vk",
      glyph: "🌐",
      company: { ru: "ВКонтакте", en: "VK Company" },
      role: { ru: "Android Platform Lead, Marketplace BU", en: "Android Platform Lead, Marketplace BU" },
      period: { ru: "дек 2021 – мар 2023 · Москва · 1 год 3 мес", en: "Dec 2021 – Mar 2023 · Moscow · 1 yr 3 mos" },
      location: { ru: "Москва", en: "Moscow" },
      summary: { ru: "Горизонтальный лид для ~20 разработчиков (VK Маркет + Юла).", en: "Horizontal lead across ~20 engineers (VK Marketplace + Youla)." },
      highlights: {
        ru: [
          "Ускорил холодный старт приложения Юла на 55%",
          "Запустил «Инициативные группы» — добровольную программу работы с техдолгом",
          "Выстроил кросс-командные практики: release management, бэклог техдолга, найм",
          "Доклады на Mobius и Heisenbug, преподавание в Сириусе и Техносфере ВК",
        ],
        en: [
          "Reduced Youla app cold start by 55%",
          "Launched Initiative Groups — a voluntary tech-debt program",
          "Established cross-team practices: release management, tech debt backlog, hiring",
          "Spoke at Mobius and Heisenbug; taught at VK's Sirius and Technopark",
        ],
      },
    },
    {
      id: "banco-plata",
      glyph: "🏝️",
      company: { ru: "Plata-банк", en: "Banco Plata" },
      role: { ru: "Senior Android Engineer — Platform", en: "Senior Android Engineer — Platform" },
      period: { ru: "дек 2022 – н.в. · Лимасол, Кипр", en: "Dec 2022 – Present · Limassol, Cyprus" },
      location: { ru: "Лимасол, Кипр", en: "Limassol, Cyprus" },
      summary: { ru: "Платформенная команда из 4 человек, поддержка 20+ Android-разработчиков.", en: "Platform team of 4, supporting 20+ Android engineers." },
      highlights: {
        ru: [
          "Сократил медианное время сборки на 35% через дашборды Grafana со Slack-алертами",
          "Мигрировал DI с Dagger 2 на Metro: холодная сборка ускорилась в 1,5 раза",
          "Внедрил Baseline Profiles: холодный старт улучшился на ~20%",
          "Заложил основы Mobile Toolbox — внутреннего сервиса телеметрии",
        ],
        en: [
          "Reduced median build time by 35% via Grafana dashboards with Slack alerting",
          "Migrated DI from Dagger 2 to Metro: 1.5× faster cold builds",
          "Introduced Baseline Profiles: ~20% cold start improvement",
          "Founded Mobile Toolbox — an internal telemetry service",
        ],
      },
    },
  ],
  projects: [
    { id: "proj-placeholder-1", glyph: "💻", placeholder: true, title: { ru: "Скоро", en: "Coming soon" }, summary: { ru: "Фриланс-проекты добавятся здесь.", en: "Freelance projects will appear here." } },
  ],
  personal: [
    { id: "guitar", glyph: "🎸", title: { ru: "Гитара", en: "Guitar" }, summary: { ru: "Подробности и фото — позже.", en: "Details and photos — later." } },
    { id: "knives", glyph: "🔪", title: { ru: "Ножи", en: "Knives" }, summary: { ru: "Подробности и фото — позже.", en: "Details and photos — later." } },
    { id: "mentoring", glyph: "🤝", title: { ru: "Менторство в «Творчестве чувств»", en: "Mentoring at «Tvorchestvo Chuvstv»" }, summary: { ru: "Подробности и фото — позже.", en: "Details and photos — later." } },
  ],
  contacts: {
    email: "alex.haiminov@gmail.com",
    telegram: "@SmilingZen",
    github: "github.com/xvar",
    location: { ru: "Лимасол, Кипр", en: "Limassol, Cyprus" },
  },
};

let lang = localStorage.getItem("km-lang") || "ru";
const app = document.getElementById("app");
const langButtons = document.querySelectorAll(".lang-toggle button");

function t(field) { return field[lang]; }

function setLang(next) {
  lang = next;
  localStorage.setItem("km-lang", lang);
  langButtons.forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  document.documentElement.lang = lang;
  render();
}
langButtons.forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

function garlandSVG() {
  const bulbs = 14;
  let circles = "";
  for (let i = 0; i < bulbs; i++) {
    const x = (1000 / (bulbs - 1)) * i;
    const wave = Math.sin(i * 1.1) * 14 + 26;
    circles += `<circle class="bulb" cx="${x}" cy="${wave}" r="6" fill="url(#bulbGrad)"/>`;
  }
  return `<svg viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <radialGradient id="bulbGrad" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#FFF4D6"/>
        <stop offset="45%" stop-color="#FFDA8A"/>
        <stop offset="100%" stop-color="#B9812C"/>
      </radialGradient>
    </defs>
    <path d="M0,26 C 80,55 170,5 250,26 S 420,55 500,26 S 670,5 750,26 S 920,55 1000,26"
      fill="none" stroke="#6d5638" stroke-width="1.5" opacity=".7"/>
    ${circles}
  </svg>`;
}
document.querySelectorAll(".garland").forEach((g) => (g.innerHTML = garlandSVG()));

function crumb(route) {
  if (route === "home") return "";
  const label = DATA.nav[lang][route.split("/")[0]] || "";
  return `<button class="crumb" data-nav="home">&larr; ${lang === "ru" ? "На стену" : "Back to the wall"}</button><span class="crumb" style="opacity:.5">/ ${label}</span>`;
}

function photoCard({ id, glyph, caption, meta, placeholder, hang, href }) {
  const cls = hang === "tape" ? "taped" : "";
  const threadStyle = hang === "tape" ? "" : `style="--thread-len:${16 + (id.length % 4) * 8}px"`;
  const rot = (((id.charCodeAt(0) + id.length) % 7) - 3) * 1.1;
  const tag = href ? "a" : "button";
  const attrs = href ? `href="${href}" target="_blank" rel="noopener"` : `type="button" data-open="${id}"`;
  return `<${tag} class="photo-card ${cls} ${href ? "link" : ""}" style="--rot:${rot}deg" ${attrs}>
    <span class="hook" aria-hidden="true"></span>
    <span class="thread" aria-hidden="true" ${threadStyle}></span>
    <span class="polaroid">
      ${placeholder ? `<span class="ph-flag">${lang === "ru" ? "план" : "planned"}</span>` : ""}
      <span class="frame"><span class="glyph">${glyph}</span></span>
      <span class="caption">${caption}<span class="meta">${meta || ""}</span></span>
    </span>
  </${tag}>`;
}

function renderHome() {
  const cards = [
    { id: "career", glyph: "💼", caption: DATA.nav[lang].career },
    { id: "projects", glyph: "🧩", caption: DATA.nav[lang].projects },
    { id: "blog", glyph: "📝", caption: DATA.nav[lang].blog, href: "https://blog.khaiminov.com" },
    { id: "personal", glyph: "🎸", caption: DATA.nav[lang].personal },
    { id: "contacts", glyph: "✉️", caption: DATA.nav[lang].contacts },
  ];
  return `
    <section class="hero">
      <h1>${t(DATA.hero).title}</h1>
      <p>${t(DATA.hero).text}</p>
    </section>
    <section class="wall">
      <div class="wall-grid">${cards.map((c) => photoCard({ ...c, hang: c.id === "blog" ? "tape" : "thread" })).join("")}</div>
    </section>
  `;
}

function renderCareer() {
  const cards = DATA.career
    .map((j, i) => photoCard({
      id: j.id, glyph: j.glyph, placeholder: j.placeholder,
      caption: t(j.company), meta: t(j.period),
      hang: i % 3 === 0 ? "tape" : "thread",
    }))
    .join("");
  return `
    <section class="wall">
      <h2 class="section-title">${DATA.nav[lang].career}</h2>
      <p class="section-lede">${t(DATA.sectionIntro.career)}</p>
      <div class="wall-grid">${cards}</div>
    </section>
  `;
}

function renderSimpleWall(key, items) {
  const cards = items
    .map((it, i) => photoCard({
      id: it.id, glyph: it.glyph, placeholder: it.placeholder,
      caption: t(it.title), hang: i % 2 === 0 ? "thread" : "tape",
    }))
    .join("");
  return `
    <section class="wall">
      <h2 class="section-title">${DATA.nav[lang][key]}</h2>
      <p class="section-lede">${t(DATA.sectionIntro[key])}</p>
      <div class="wall-grid">${cards}</div>
    </section>
  `;
}

function renderContacts() {
  const c = DATA.contacts;
  return `
    <section class="wall">
      <h2 class="section-title">${DATA.nav[lang].contacts}</h2>
      <p class="section-lede">${t(DATA.sectionIntro.contacts)}</p>
      <ul class="contact-list">
        <li>Email: <a href="mailto:${c.email}">${c.email}</a></li>
        <li>Telegram: <a href="https://t.me/${c.telegram.replace("@", "")}" target="_blank" rel="noopener">${c.telegram}</a></li>
        <li>GitHub: <a href="https://${c.github}" target="_blank" rel="noopener">${c.github}</a></li>
        <li>${lang === "ru" ? "Локация" : "Location"}: ${t(c.location)}</li>
      </ul>
      <a class="cv-button" href="#" onclick="alert('${lang === "ru" ? "CV появится здесь позже" : "CV will be added here later"}');return false;">
        ${lang === "ru" ? "Скачать CV" : "Download CV"} ↓
      </a>
    </section>
  `;
}

function openStory(id) {
  const job = DATA.career.find((j) => j.id === id);
  if (!job) return;
  const gallery = [1, 2].map((n) => photoCard({ id: id + n, glyph: job.glyph, caption: "", hang: n % 2 ? "thread" : "tape", placeholder: job.placeholder })).join("");
  const overlay = document.createElement("div");
  overlay.className = "story-overlay";
  overlay.innerHTML = `
    <div class="story-panel" role="dialog" aria-modal="true">
      <button class="story-close" aria-label="${lang === "ru" ? "Закрыть" : "Close"}">&times;</button>
      <div class="story-gallery">${gallery}</div>
      <h3 class="story-head">${t(job.company)}</h3>
      <p class="story-meta">${t(job.role)} · ${t(job.period)}</p>
      <p class="story-summary">${t(job.summary)}</p>
      ${t(job.highlights).length ? `<ul class="story-highlights">${t(job.highlights).map((h) => `<li>${h}</li>`).join("")}</ul>` : ""}
    </div>
  `;
  document.body.appendChild(overlay);
  const close = () => overlay.remove();
  overlay.querySelector(".story-close").addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", function onEsc(e) {
    if (e.key === "Escape") { close(); document.removeEventListener("keydown", onEsc); }
  });
}

function currentRoute() {
  return (location.hash.replace(/^#\/?/, "") || "home");
}

function render() {
  const route = currentRoute();
  document.querySelector(".crumb-bar").innerHTML = crumb(route);
  if (route === "home") app.innerHTML = renderHome();
  else if (route === "career") app.innerHTML = renderCareer();
  else if (route === "projects") app.innerHTML = renderSimpleWall("projects", DATA.projects);
  else if (route === "personal") app.innerHTML = renderSimpleWall("personal", DATA.personal);
  else if (route === "contacts") app.innerHTML = renderContacts();
  else app.innerHTML = renderHome();

  app.querySelectorAll("[data-nav]").forEach((el) => el.addEventListener("click", () => (location.hash = "/" + el.dataset.nav)));
  document.querySelectorAll(".crumb-bar [data-nav]").forEach((el) => el.addEventListener("click", () => (location.hash = "/" + el.dataset.nav)));
  app.querySelectorAll("[data-open]").forEach((el) => el.addEventListener("click", () => openStory(el.dataset.open)));
}

window.addEventListener("hashchange", render);
langButtons.forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
document.documentElement.lang = lang;
render();
