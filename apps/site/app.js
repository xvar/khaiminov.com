// Design mockup only — placeholder photos/text for most sections (career
// dates/companies are real, pulled from resume). See docs/SPEC.md for
// decisions and open questions. No backend, no build step.
// NAV/DATA content lives in data.js, loaded before this file.

// Intrinsic pixel sizes for every "natural" (uncropped) card-face photo, so
// the <img> width/height attributes let the browser reserve the right box
// before the file has loaded -- without this, "natural" cards visibly pop
// and reflow the whole grid around them once each image arrives, which
// reads as the wall "jittering" during a route change.
const PHOTO_DIMS = {
  "assets/education/msu/main-building-exterior.webp": [640, 1138],
  "assets/education/lyceum-165/facade.webp": [640, 480],
  "assets/talks/mobius-graphql-rest/thumb.webp": [480, 270],
  "assets/talks/heisenbug-ui-tests/thumb.webp": [480, 270],
  "assets/talks/podlodka-performance-battle/thumb.webp": [480, 270],
  "assets/talks/podlodka-cicd-roundtable/thumb.webp": [480, 270],
  "assets/talks/kotlin-scripts-cicd/thumb.webp": [480, 270],
  "assets/talks/sirius/thumb.webp": [980, 490],
  "assets/personal/guitar/balcony.webp": [700, 560],
  "assets/personal/knives/map-lineup.webp": [900, 676],
  "assets/personal/mentoring/code-izobiliya.webp": [500, 500],
};

let lang = localStorage.getItem("km-lang") || "ru";
const app = document.getElementById("app");
const sideNavEl = document.getElementById("side-nav");
const footerEl = document.getElementById("site-footer");
const langButtons = document.querySelectorAll(".lang-toggle button");
const shellEl = document.querySelector(".shell");
const sidebarEl = document.querySelector(".sidebar");
const menuBtn = document.getElementById("menu-btn");

// Sidebar is hidden by default and reveals on hover near the left edge
// (CSS handles that part); the button here just lets it be pinned open
// without holding the mouse there. A section route forces it open via
// the "nav-expanded" class set in renderAll(), regardless of pin/hover.
menuBtn.addEventListener("click", () => sidebarEl.classList.toggle("is-pinned"));

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

// Garland is a repeating photoreal string-light image tile (CSS
// background-repeat on .garland) — see style.css.

// Only physically plausible mounts: taped at all 4 corners, taped at the
// 2 top corners, taped by a single strip top-center, or clipped onto a
// light strand. No random subsets — e.g. "both left corners only" can't
// actually hold a photo up.
const TAPE_PATTERNS = {
  tape4: ["tl", "tr", "bl", "br"],
  tape2: ["tl", "tr"],
  tape1: ["tm"],
};
function randomMount() {
  const modes = ["tape4", "tape4", "tape2", "tape2", "tape1", "clip"];
  const mode = modes[Math.floor(Math.random() * modes.length)];
  if (mode === "clip") {
    return {
      pre: `<span class="clip-mount" aria-hidden="true"><span class="clip-light"></span><span class="clip-thread"></span><span class="clip-peg"></span></span>`,
      tape: "",
    };
  }
  const tape = TAPE_PATTERNS[mode].map((c) => `<span class="tape tape-${c}" aria-hidden="true"></span>`).join("");
  return { pre: "", tape };
}

function renderSideNav(activeId) {
  const backItem = activeId
    ? `<li class="nav-back"><a href="#/" data-nav="home">${lang === "ru" ? "← Назад" : "← Back"}</a></li>`
    : "";
  const items = NAV.map((n) => {
    if (n.external) {
      return `<li><a href="${n.external}" target="_blank" rel="noopener" data-sync="${n.id}"><span class="dot" aria-hidden="true"></span>${n.label[lang]} ↗</a></li>`;
    }
    return `<li><a href="#/${n.id}" data-sync="${n.id}" class="${n.id === activeId ? "active" : ""}"><span class="dot" aria-hidden="true"></span>${n.label[lang]}</a></li>`;
  }).join("");
  sideNavEl.classList.remove("redraw");
  // restart the redraw animation on every route change
  void sideNavEl.offsetWidth;
  sideNavEl.innerHTML = backItem + items;
  sideNavEl.classList.add("redraw");
  sideNavEl.querySelectorAll("[data-nav]").forEach((el) => el.addEventListener("click", (e) => { e.preventDefault(); location.hash = "/" + el.dataset.nav; }));
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

function photoCard({ id, glyph, logo, mascot, photo, caption, meta, placeholder, href, syncId, size, pinLeft, natural, lightbox, order }) {
  const rot = (((id.charCodeAt(0) + id.length) % 7) - 3) * 1.1;
  const tag = href ? "a" : "button";
  const extAttrs = href && href.startsWith("http") ? `target="_blank" rel="noopener"` : "";
  const attrs = href
    ? `href="${href}" ${extAttrs}`
    : lightbox
    ? `type="button" data-lightbox="${photo}"`
    : `type="button" data-open="${id}"`;
  const sync = syncId ? `data-sync="${syncId}"` : "";
  const mount = randomMount();
  const sizeClass = size ? ` size-${size}` : "";
  const naturalClass = natural ? " natural" : "";
  const orderVars = order ? `;--order-desktop:${order.desktop};--order-mobile:${order.mobile}` : "";
  const style = `--rot:${rot}deg${pinLeft ? ";grid-column:1" : ""}${orderVars}`;
  const dims = photo && PHOTO_DIMS[photo];
  const dimAttrs = dims ? ` width="${dims[0]}" height="${dims[1]}"` : "";
  const media = photo
    ? `<img class="frame-photo" src="${photo}"${dimAttrs} alt="">`
    : mascot
    ? `<img class="frame-mascot" src="${mascot}" alt="">`
    : logo
    ? `<img class="frame-logo" src="${logo}" alt="">`
    : `<span class="glyph">${glyph}</span>`;
  return `<${tag} class="photo-card${sizeClass}${naturalClass} ${href ? "link" : ""}" style="${style}" ${attrs} ${sync}>
    ${mount.pre}
    <span class="polaroid">
      ${mount.tape}
      ${placeholder ? `<span class="ph-flag">${lang === "ru" ? "план" : "planned"}</span>` : ""}
      <span class="frame">${media}</span>
      <span class="caption">${caption}${meta ? `<span class="meta">${meta}</span>` : ""}</span>
    </span>
  </${tag}>`;
}

function renderHome() {
  const cards = NAV.map((n, i) => photoCard({
    id: n.id, glyph: n.glyph, mascot: n.mascot, caption: n.label[lang],
    href: n.external || "#/" + n.id, syncId: n.id,
  })).join("");
  return `
    <section class="hero hero--split">
      <div class="split">
        <div class="hero-photo">
          <img class="hero-photo-img" src="assets/hero/studio.webp" alt="">
          <h1 class="hero-name">${t(DATA.hero)}</h1>
          <p class="hero-bio">${t(DATA.heroLede)}</p>
          <img class="hero-mascot" src="assets/mascots/nusya-albino-basket.webp" alt="">
        </div>
        <div class="hero-cards"><div class="wall-grid hero-wall-grid">${cards}</div></div>
      </div>
    </section>
  `;
}

function renderCollectionWall(key) {
  const items = DATA[key];
  const cards = items.map((it, i) => photoCard({
    id: it.id, glyph: it.glyph, logo: it.logo, photo: it.photo, placeholder: it.placeholder,
    caption: t(it.title), size: it.size, pinLeft: it.pinLeft, order: it.order,
    // only "talks" cards jump straight to the external link (a video) --
    // everywhere else (projects included) the card opens the story panel
    // first, so the write-up actually gets read before anyone clicks out.
    href: key === "talks" ? it.href : undefined,
    natural: !!it.photo,
  })).join("");
  const lede = t(DATA.sectionIntro[key]);
  return `
    <section class="wall">
      <h2 class="section-title">${navLabel(key)}</h2>
      ${lede ? `<p class="section-lede">${lede}</p>` : ""}
      <div class="wall-grid wall-grid--${key}">${cards}</div>
    </section>
  `;
}

function renderContacts() {
  const c = DATA.contacts;
  const items = [
    { id: "email", glyph: "✉️", caption: c.email, href: `mailto:${c.email}` },
    { id: "telegram", logo: "assets/icons/telegram.svg", caption: c.telegram, href: `https://t.me/${c.telegram.replace("@", "")}` },
    { id: "github", glyph: "🐙", caption: c.github, href: `https://${c.github}` },
    { id: "linkedin", logo: "assets/icons/linkedin.svg", caption: "LinkedIn", href: `https://${c.linkedin}` },
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
  // projects and education don't get the placeholder-glyph filler tiles
  // when there's no real gallery yet -- unclickable stand-ins with nothing
  // behind them, these collections read better as plain text until real
  // photos land
  const gallery = (job.photos && job.photos.length)
    ? job.photos.map((src, n) => photoCard({ id: `${id}-p${n}`, photo: src, caption: "", natural: true, lightbox: true })).join("")
    : collection === "projects" || collection === "education"
    ? ""
    : [1, 2].map((n) => photoCard({ id: id + n, glyph: job.glyph, caption: "", placeholder: job.placeholder })).join("");
  const metaParts = [t(job.role), t(job.period)].filter(Boolean).join(" · ");
  const overlay = document.createElement("div");
  overlay.className = "story-overlay";
  overlay.innerHTML = `
    <div class="story-panel" role="dialog" aria-modal="true">
      <button class="story-close" aria-label="${lang === "ru" ? "Закрыть" : "Close"}">&times;</button>
      ${gallery ? `<div class="story-gallery">${gallery}</div>` : ""}
      <h3 class="story-head">${t(job.title)}</h3>
      ${metaParts ? `<p class="story-meta">${metaParts}</p>` : ""}
      <p class="story-summary">${t(job.summary)}</p>
      ${t(job.highlights).length ? `<ul class="story-highlights">${t(job.highlights).map((h) => `<li>${h}</li>`).join("")}</ul>` : ""}
      ${job.href ? `<a class="cv-button" href="${job.href}" target="_blank" rel="noopener">${t(job.linkLabel) || (lang === "ru" ? "Открыть репозиторий" : "Open repository")} ↗</a>` : ""}
    </div>
  `;
  document.body.appendChild(overlay);
  const close = () => { overlay.remove(); document.removeEventListener("keydown", onEsc); };
  function onEsc(e) { if (e.key === "Escape") close(); }
  overlay.querySelector(".story-close").addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  overlay.querySelectorAll("[data-lightbox]").forEach((el) => {
    el.addEventListener("click", (e) => { e.stopPropagation(); openLightbox(el.dataset.lightbox); });
  });
  document.addEventListener("keydown", onEsc);
}

function openLightbox(src) {
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = `<img src="${src}" alt="">`;
  document.body.appendChild(overlay);
  const close = () => { overlay.remove(); document.removeEventListener("keydown", onEsc, { capture: true }); };
  function onEsc(e) {
    if (e.key !== "Escape") return;
    e.stopPropagation();
    close();
  }
  overlay.addEventListener("click", close);
  document.addEventListener("keydown", onEsc, { capture: true });
}

function currentRoute() {
  return (location.hash.replace(/^#\/?/, "") || "home");
}

const COLLECTION_ROUTES = ["career", "education", "projects", "talks", "personal"];

function renderAll() {
  const route = currentRoute();
  const activeTop = [...COLLECTION_ROUTES, "contacts"].includes(route) ? route : null;
  shellEl.classList.toggle("nav-expanded", !!activeTop);
  renderSideNav(activeTop);

  if (COLLECTION_ROUTES.includes(route)) app.innerHTML = renderCollectionWall(route);
  else if (route === "contacts") app.innerHTML = renderContacts();
  else app.innerHTML = renderHome();

  wireSync();
  app.querySelectorAll("[data-open]").forEach((el) => el.addEventListener("click", () => openStory(route === "home" ? "career" : route, el.dataset.open)));

  renderFooter();
}

const COPYRIGHT_START_YEAR = 2026;
function copyrightLine() {
  const now = new Date().getFullYear();
  const years = now > COPYRIGHT_START_YEAR ? `${COPYRIGHT_START_YEAR}–${now}` : `${COPYRIGHT_START_YEAR}`;
  const name = lang === "ru" ? "Алексей Хайминов" : "Alexey Khaiminov";
  return `© ${years} ${name}`;
}
function renderFooter() {
  const label = lang === "ru" ? "версия" : "version";
  footerEl.textContent = `${copyrightLine()} · ${label}: —`;
  fetch("version.json").then((r) => r.ok ? r.json() : null).then((v) => {
    if (!v) return;
    footerEl.textContent = `${copyrightLine()} · ${label} ${v.commit}`;
  }).catch(() => {});
}

window.addEventListener("hashchange", renderAll);
langButtons.forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
document.documentElement.lang = lang;
renderAll();
