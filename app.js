// Design mockup only — placeholder photos/text for most sections (career
// dates/companies are real, pulled from resume). See docs/SPEC.md for
// decisions and open questions. No backend, no build step.

const NAV = [
  { id: "career", glyph: "💼", label: { ru: "Карьера", en: "Career" } },
  { id: "projects", glyph: "🧩", label: { ru: "Проекты", en: "Projects" } },
  { id: "blog", glyph: "📝", label: { ru: "Блог", en: "Blog" }, external: "https://blog.khaiminov.com" },
  { id: "personal", glyph: "🎸", label: { ru: "Личное", en: "Personal" } },
  { id: "contacts", glyph: "✉️", label: { ru: "Контакты", en: "Contacts" } },
];

const DATA = {
  hero: { ru: "Алексей Хайминов", en: "Alexey Khaiminov" },
  sectionIntro: {
    career: { ru: "Путь по компаниям и продуктам — с фото рабочих мест (скоро настоящих).", en: "A path through companies and products — with photos of the places (real ones coming soon)." },
    projects: { ru: "Фриланс и сторонние проекты. Список пополняется.", en: "Freelance and side projects. List is growing." },
    personal: { ru: "То, что вне программирования.", en: "The things outside of programming." },
    contacts: { ru: "Как со мной связаться.", en: "How to reach me." },
  },
  career: [
    {
      id: "kazakhstan", glyph: "🏔️", placeholder: true,
      title: { ru: "Казахстан", en: "Kazakhstan" },
      role: { ru: "Портлеты под IBM WebSphere Portal", en: "Portlets on IBM WebSphere Portal" },
      period: { ru: "уточняется", en: "TBD" },
      summary: { ru: "Начало карьеры. Детали и достижения — уточняются у Алексея.", en: "Where the career started. Details and highlights to be confirmed." },
      highlights: { ru: [], en: [] },
    },
    {
      id: "bss", glyph: "🏦",
      title: { ru: "BSS", en: "BSS" },
      role: { ru: "Android-разработчик", en: "Android Developer" },
      period: { ru: "июн 2013 – апр 2015 · Москва", en: "Jun 2013 – Apr 2015 · Moscow" },
      summary: { ru: "Два года в банковской разработке.", en: "Two years in banking software." },
      highlights: { ru: ["Разрабатывал и поддерживал портфель из 26 банковских Android-приложений"], en: ["Developed and maintained a portfolio of 26 banking Android applications"] },
    },
    {
      id: "mailru-games", glyph: "🎮",
      title: { ru: "Mail.Ru Игры", en: "Mail.Ru Games" },
      role: { ru: "Android-разработчик", en: "Android Developer" },
      period: { ru: "апр – ноя 2015 · Москва", en: "Apr – Nov 2015 · Moscow" },
      summary: { ru: "Два проекта под NDA — подробности пока закрыты.", en: "Two projects under NDA — details stay closed." },
      highlights: { ru: [], en: [] },
    },
    {
      id: "odnoklassniki", glyph: "👥",
      title: { ru: "Одноклассники (OK.RU)", en: "Odnoklassniki (OK.RU)" },
      role: { ru: "Android-разработчик, Mail.Ru Group", en: "Android Developer, Mail.Ru Group" },
      period: { ru: "ноя 2015 – апр 2018 · Москва", en: "Nov 2015 – Apr 2018 · Moscow" },
      summary: { ru: "Социальная сеть с ~40 млн MAU.", en: "A social network with ~40M MAU." },
      highlights: { ru: ["Отвечал за флоу входа, регистрации и восстановления аккаунта для воронки новых пользователей"], en: ["Owned login, registration, and account recovery flows for the new-user acquisition funnel"] },
    },
    {
      id: "youla", glyph: "🛒",
      title: { ru: "Юла", en: "Youla" },
      role: { ru: "Principal Android Engineer, Mail.Ru Group", en: "Principal Android Engineer, Mail.Ru Group" },
      period: { ru: "2018 – 2021 · Москва", en: "2018 – 2021 · Moscow" },
      summary: { ru: "Маркетплейс: ~1,8 млн DAU, ~11,5 млн MAU, crash-free 99,9%.", en: "Marketplace: ~1.8M DAU, ~11.5M MAU, 99.9% crash-free." },
      highlights: {
        ru: ["Проектировал и развивал Android-архитектуру Юлы; определял технологические стандарты", "Внедрил Clean + MVI — провёл масштабный рефакторинг кодовой базы", "Сократил сетевые запросы при запуске с 6 до 1 за счёт миграции на GraphQL (Apollo)", "Реализовал мультистор-дистрибуцию: Google Play, Huawei AppGallery, RuStore"],
        en: ["Designed and owned Youla's Android architecture; defined technology standards", "Introduced Clean + MVI — led a major codebase refactoring", "Reduced startup network calls from 6 to 1 via GraphQL (Apollo) migration", "Built multi-store distribution: Google Play, Huawei AppGallery, RuStore"],
      },
    },
    {
      id: "vk", glyph: "🌐",
      title: { ru: "ВКонтакте", en: "VK Company" },
      role: { ru: "Android Platform Lead, Marketplace BU", en: "Android Platform Lead, Marketplace BU" },
      period: { ru: "дек 2021 – мар 2023 · Москва · 1 год 3 мес", en: "Dec 2021 – Mar 2023 · Moscow · 1 yr 3 mos" },
      summary: { ru: "Горизонтальный лид для ~20 разработчиков (VK Маркет + Юла).", en: "Horizontal lead across ~20 engineers (VK Marketplace + Youla)." },
      highlights: {
        ru: ["Ускорил холодный старт приложения Юла на 55%", "Запустил «Инициативные группы» — добровольную программу работы с техдолгом", "Выстроил кросс-командные практики: release management, бэклог техдолга, найм", "Доклады на Mobius и Heisenbug, преподавание в Сириусе и Техносфере ВК"],
        en: ["Reduced Youla app cold start by 55%", "Launched Initiative Groups — a voluntary tech-debt program", "Established cross-team practices: release management, tech debt backlog, hiring", "Spoke at Mobius and Heisenbug; taught at VK's Sirius and Technopark"],
      },
    },
    {
      id: "banco-plata", glyph: "🏝️",
      title: { ru: "Plata-банк", en: "Banco Plata" },
      role: { ru: "Senior Android Engineer — Platform", en: "Senior Android Engineer — Platform" },
      period: { ru: "дек 2022 – н.в. · Лимасол, Кипр", en: "Dec 2022 – Present · Limassol, Cyprus" },
      summary: { ru: "Платформенная команда из 4 человек, поддержка 20+ Android-разработчиков.", en: "Platform team of 4, supporting 20+ Android engineers." },
      highlights: {
        ru: ["Сократил медианное время сборки на 35% через дашборды Grafana со Slack-алертами", "Мигрировал DI с Dagger 2 на Metro: холодная сборка ускорилась в 1,5 раза", "Внедрил Baseline Profiles: холодный старт улучшился на ~20%", "Заложил основы Mobile Toolbox — внутреннего сервиса телеметрии"],
        en: ["Reduced median build time by 35% via Grafana dashboards with Slack alerting", "Migrated DI from Dagger 2 to Metro: 1.5× faster cold builds", "Introduced Baseline Profiles: ~20% cold start improvement", "Founded Mobile Toolbox — an internal telemetry service"],
      },
    },
  ],
  projects: [
    { id: "proj-1", glyph: "💻", placeholder: true, title: { ru: "Скоро", en: "Coming soon" }, role: { ru: "", en: "" }, period: { ru: "", en: "" }, summary: { ru: "Первый фриланс-проект появится здесь.", en: "The first freelance project will appear here." }, highlights: { ru: [], en: [] } },
    { id: "proj-2", glyph: "🛠️", placeholder: true, title: { ru: "Скоро", en: "Coming soon" }, role: { ru: "", en: "" }, period: { ru: "", en: "" }, summary: { ru: "Ещё один проект — на подходе.", en: "Another project — on the way." }, highlights: { ru: [], en: [] } },
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

let lang = localStorage.getItem("km-lang") || "ru";
const app = document.getElementById("app");
const sideNavEl = document.getElementById("side-nav");
const crumbBar = document.getElementById("crumb-bar");
const footerEl = document.getElementById("site-footer");
const langButtons = document.querySelectorAll(".lang-toggle button");

function t(field) { return field ? field[lang] : ""; }
function navLabel(id) { const n = NAV.find((x) => x.id === id); return n ? n.label[lang] : id; }

function setLang(next) {
  lang = next;
  localStorage.setItem("km-lang", lang);
  langButtons.forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  document.documentElement.lang = lang;
  renderAll();
}
langButtons.forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

// "Rain" curtain garland: parallel vertical strands hanging from the top
// wire, each strand strung with a few glowing points — modeled after
// straight-strand LED curtain lights (semi-transparent, twinkling).
function garlandSVG() {
  const strands = 26;
  let content = "";
  for (let i = 0; i < strands; i++) {
    const x = (1000 / (strands - 1)) * i + (Math.sin(i * 3.1) * 3);
    const len = 55 + Math.sin(i * 1.7) * 20 + (i % 5) * 4;
    content += `<line x1="${x}" y1="4" x2="${x}" y2="${len}" stroke="#fff" stroke-opacity=".18" stroke-width="1"/>`;
    const dots = 3;
    for (let d = 1; d <= dots; d++) {
      const y = (len / (dots + 1)) * d;
      content += `<circle class="bulb-glow" cx="${x}" cy="${y}" r="7" fill="url(#glowGrad)"/><circle cx="${x}" cy="${y}" r="2.6" fill="url(#bulbGrad)"/>`;
    }
  }
  return `<svg viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <radialGradient id="bulbGrad" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#FFF9E8"/><stop offset="45%" stop-color="#FFDA8A"/><stop offset="100%" stop-color="#B9812C"/>
      </radialGradient>
      <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FFDA8A" stop-opacity=".6"/><stop offset="100%" stop-color="#FFDA8A" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <line x1="0" y1="2" x2="1000" y2="2" stroke="#6d5638" stroke-width="1.5" stroke-opacity=".6"/>
    ${content}
  </svg>`;
}
document.querySelectorAll(".garland").forEach((g) => (g.innerHTML = garlandSVG()));

function randomTape() {
  const corners = ["tl", "tr", "bl", "br"];
  for (let i = corners.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [corners[i], corners[j]] = [corners[j], corners[i]];
  }
  const count = 1 + Math.floor(Math.random() * 3);
  return corners.slice(0, count).map((c) => {
    const rot = (Math.random() * 18 - 9).toFixed(1);
    return `<span class="tape tape-${c}" style="transform:rotate(${rot}deg)" aria-hidden="true"></span>`;
  }).join("");
}

function renderSideNav(activeId) {
  sideNavEl.innerHTML = NAV.map((n) => {
    if (n.external) {
      return `<li><a href="${n.external}" target="_blank" rel="noopener" data-sync="${n.id}"><span class="dot" aria-hidden="true"></span>${n.label[lang]} ↗</a></li>`;
    }
    return `<li><a href="#/${n.id}" data-sync="${n.id}" class="${n.id === activeId ? "active" : ""}"><span class="dot" aria-hidden="true"></span>${n.label[lang]}</a></li>`;
  }).join("");
  wireSync();
}

function wireSync() {
  document.querySelectorAll("[data-sync]").forEach((el) => {
    el.addEventListener("mouseenter", () => syncSet(el.dataset.sync, true));
    el.addEventListener("mouseleave", () => syncSet(el.dataset.sync, false));
    el.addEventListener("focus", () => syncSet(el.dataset.sync, true));
    el.addEventListener("blur", () => syncSet(el.dataset.sync, false));
  });
}
function syncSet(id, on) {
  document.querySelectorAll(`[data-sync="${id}"]`).forEach((el) => el.classList.toggle("is-synced", on));
}

function crumb(route) {
  if (route === "home") return "";
  return `<button type="button" data-nav="home">&larr; ${lang === "ru" ? "На главную" : "Home"}</button><span style="opacity:.5">/ ${navLabel(route)}</span>`;
}

function photoCard({ id, glyph, caption, meta, placeholder, href, syncId }) {
  const rot = (((id.charCodeAt(0) + id.length) % 7) - 3) * 1.1;
  const tag = href ? "a" : "button";
  const extAttrs = href && href.startsWith("http") ? `target="_blank" rel="noopener"` : "";
  const attrs = href ? `href="${href}" ${extAttrs}` : `type="button" data-open="${id}"`;
  const sync = syncId ? `data-sync="${syncId}"` : "";
  return `<${tag} class="photo-card ${href ? "link" : ""}" style="--rot:${rot}deg" ${attrs} ${sync}>
    <span class="polaroid">
      ${randomTape()}
      ${placeholder ? `<span class="ph-flag">${lang === "ru" ? "план" : "planned"}</span>` : ""}
      <span class="frame"><span class="glyph">${glyph}</span></span>
      <span class="caption">${caption}${meta ? `<span class="meta">${meta}</span>` : ""}</span>
    </span>
  </${tag}>`;
}

function renderHome() {
  const cards = NAV.map((n, i) => photoCard({
    id: n.id, glyph: n.glyph, caption: n.label[lang],
    href: n.external, syncId: n.id,
  })).join("");
  return `
    <section class="hero"><h1>${t(DATA.hero)}</h1></section>
    <section class="wall"><div class="wall-grid">${cards}</div></section>
  `;
}

function renderCollectionWall(key) {
  const items = DATA[key];
  const cards = items.map((it, i) => photoCard({
    id: it.id, glyph: it.glyph, placeholder: it.placeholder,
    caption: t(it.title), meta: t(it.period),
  })).join("");
  return `
    <section class="wall">
      <h2 class="section-title">${navLabel(key)}</h2>
      <p class="section-lede">${t(DATA.sectionIntro[key])}</p>
      <div class="wall-grid">${cards}</div>
    </section>
  `;
}

function renderContacts() {
  const c = DATA.contacts;
  const items = [
    { id: "email", glyph: "✉️", caption: c.email, href: `mailto:${c.email}` },
    { id: "telegram", glyph: "💬", caption: c.telegram, href: `https://t.me/${c.telegram.replace("@", "")}` },
    { id: "github", glyph: "🐙", caption: c.github, href: `https://${c.github}` },
    { id: "cv", glyph: "📄", caption: lang === "ru" ? "Скачать CV" : "Download CV", href: c.cv[lang] },
  ];
  const cards = items.map((it) => photoCard(it)).join("");
  return `
    <section class="wall">
      <h2 class="section-title">${navLabel("contacts")}</h2>
      <p class="section-lede">${t(DATA.sectionIntro.contacts)} · 📍 ${t(c.location)}</p>
      <div class="wall-grid">${cards}</div>
    </section>
  `;
}

function openStory(collection, id) {
  const job = DATA[collection].find((j) => j.id === id);
  if (!job) return;
  const gallery = [1, 2].map((n) => photoCard({ id: id + n, glyph: job.glyph, caption: "", placeholder: job.placeholder })).join("");
  const metaParts = [t(job.role), t(job.period)].filter(Boolean).join(" · ");
  const overlay = document.createElement("div");
  overlay.className = "story-overlay";
  overlay.innerHTML = `
    <div class="story-panel" role="dialog" aria-modal="true">
      <button class="story-close" aria-label="${lang === "ru" ? "Закрыть" : "Close"}">&times;</button>
      <div class="story-gallery">${gallery}</div>
      <h3 class="story-head">${t(job.title)}</h3>
      ${metaParts ? `<p class="story-meta">${metaParts}</p>` : ""}
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

function renderAll() {
  const route = currentRoute();
  const activeTop = ["career", "projects", "personal", "contacts"].includes(route) ? route : null;
  renderSideNav(activeTop);
  crumbBar.innerHTML = crumb(route);
  crumbBar.querySelectorAll("[data-nav]").forEach((el) => el.addEventListener("click", () => (location.hash = "/" + el.dataset.nav)));

  if (route === "home") app.innerHTML = renderHome();
  else if (route === "career") app.innerHTML = renderCollectionWall("career");
  else if (route === "projects") app.innerHTML = renderCollectionWall("projects");
  else if (route === "personal") app.innerHTML = renderCollectionWall("personal");
  else if (route === "contacts") app.innerHTML = renderContacts();
  else app.innerHTML = renderHome();

  wireSync();
  app.querySelectorAll("[data-open]").forEach((el) => el.addEventListener("click", () => openStory(route === "home" ? "career" : route, el.dataset.open)));

  renderFooter();
}

function renderFooter() {
  const label = lang === "ru" ? "версия" : "version";
  footerEl.textContent = `${label}: —`;
  fetch("version.json").then((r) => r.ok ? r.json() : null).then((v) => {
    if (!v) return;
    footerEl.textContent = `${label} ${v.date} · ${v.commit}`;
  }).catch(() => {});
}

window.addEventListener("hashchange", renderAll);
langButtons.forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
document.documentElement.lang = lang;
renderAll();
