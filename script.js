/**
 * KİŞİSEL ÇALIŞMA ARŞİVİ - SCRIPT.JS
 * Vanilla JavaScript ile Sade Navigasyon ve İçerik Görüntüleme Mantığı
 */

document.addEventListener("DOMContentLoaded", () => {
  const appElement = document.getElementById("app");
  const breadcrumbElement = document.getElementById("breadcrumb");
  const homeLinkElement = document.getElementById("home-link");
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  // Tema Yönetimi (Dark / Light Mode)
  initTheme();

  function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    applyTheme(initialTheme);

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(newTheme);
      });
    }
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (themeIcon) themeIcon.textContent = "☀️";
      if (themeToggleBtn) themeToggleBtn.setAttribute("title", "Açık Mod'a geç");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (themeIcon) themeIcon.textContent = "🌙";
      if (themeToggleBtn) themeToggleBtn.setAttribute("title", "Karanlık Mod'a geç");
      localStorage.setItem("theme", "light");
    }
  }

  if (homeLinkElement) {
    homeLinkElement.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("");
    });
  }

  window.addEventListener("hashchange", handleRouting);
  handleRouting();

  function handleRouting() {
    const rawHash = window.location.hash.replace(/^#\/?/, "").trim();
    const parts = rawHash ? rawHash.split("/").filter(Boolean) : [];

    if (parts.length === 0) {
      renderHome();
    } else if (parts[0] === "dersler") {
      if (parts.length === 1) {
        renderSubjectsList();
      } else {
        const subjectId = parts[1];
        renderSubjectDetail(subjectId);
      }
    } else {
      const sectionId = parts[0];
      renderSectionDetail(sectionId);
    }
  }

  function navigateTo(path) {
    window.location.hash = path ? `#/${path}` : "#/";
  }

  function renderHome() {
    updateBreadcrumb([]);

    let html = `
      <div class="view-header">
        <h1 class="view-title">Bölümler</h1>
        <span class="view-count">${ARCHIVE_DATA.sections.length} Kategori</span>
      </div>
      <div class="grid-list">
    `;

    ARCHIVE_DATA.sections.forEach(section => {
      html += `
        <a href="#/${section.id}" class="grid-card">
          <span class="grid-card-title">${escapeHtml(section.title)}</span>
          <span class="grid-card-icon">📁</span>
        </a>
      `;
    });

    html += `</div>`;
    appElement.innerHTML = html;
  }

  function renderSubjectsList() {
    updateBreadcrumb([
      { title: "Dersler", hash: "dersler" }
    ]);

    let html = `
      <div class="view-header">
        <h2 class="view-title">Dersler</h2>
        <span class="view-count">${ARCHIVE_DATA.subjects.length} Ders</span>
      </div>
      <div class="grid-list">
    `;

    ARCHIVE_DATA.subjects.forEach(subject => {
      html += `
        <a href="#/dersler/${subject.id}" class="grid-card">
          <span class="grid-card-title">${escapeHtml(subject.title)}</span>
          <span class="grid-card-icon">📂</span>
        </a>
      `;
    });

    html += `</div>`;
    appElement.innerHTML = html;
  }

  function renderSubjectDetail(subjectId) {
    const subject = ARCHIVE_DATA.subjects.find(s => s.id === subjectId);

    if (!subject) {
      renderNotFound();
      return;
    }

    updateBreadcrumb([
      { title: "Dersler", hash: "dersler" },
      { title: subject.title, hash: `dersler/${subject.id}` }
    ]);

    const items = getItemsByCategory(subject.id);
    renderItemsList(subject.title, items);
  }

  function renderSectionDetail(sectionId) {
    const section = ARCHIVE_DATA.sections.find(s => s.id === sectionId);

    if (!section) {
      renderNotFound();
      return;
    }

    updateBreadcrumb([
      { title: section.title, hash: section.id }
    ]);

    const items = getItemsByCategory(section.id);
    renderItemsList(section.title, items);
  }

  function renderItemsList(title, items) {
    let html = `
      <div class="view-header">
        <h2 class="view-title">${escapeHtml(title)}</h2>
        <span class="view-count">${items.length} Çalışma</span>
      </div>
    `;

    if (items.length === 0) {
      html += `
        <div class="empty-state">
          <div class="empty-state-icon">📄</div>
          <p>Henüz içerik eklenmedi.</p>
        </div>
      `;
    } else {
      html += `<div class="items-list">`;
      items.forEach(item => {
        html += renderItemCard(item);
      });
      html += `</div>`;
    }

    appElement.innerHTML = html;
  }

  function renderItemCard(item) {
    const categoryTags = (item.categories || []).map(catId => {
      const catName = getCategoryName(catId);
      return `<span class="category-tag">${escapeHtml(catName)}</span>`;
    }).join("");

    const linkButtons = (item.links || []).map(link => {
      const isExternal = link.type === "website" || link.type === "github";
      const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
      const downloadAttr = (!isExternal && (link.type === "pdf" || link.type === "file" || link.type === "presentation")) ? 'download' : '';
      const icon = getLinkIcon(link.type);

      return `
        <a href="${escapeHtml(link.url)}" class="item-link" ${targetAttr} ${downloadAttr}>
          <span>${icon}</span>
          <span>${escapeHtml(link.title || link.type.toUpperCase())}</span>
        </a>
      `;
    }).join("");

    return `
      <div class="item-card">
        <div class="item-header">
          <h3 class="item-title">${escapeHtml(item.title)}</h3>
          ${item.date ? `<span class="item-date">${escapeHtml(item.date)}</span>` : ""}
        </div>
        ${item.description ? `<p class="item-desc">${escapeHtml(item.description)}</p>` : ""}
        <div class="item-footer">
          <div class="item-categories">${categoryTags}</div>
          <div class="item-links">${linkButtons}</div>
        </div>
      </div>
    `;
  }

  function getCategoryName(catId) {
    const sec = ARCHIVE_DATA.sections.find(s => s.id === catId);
    if (sec) return sec.title;

    const sub = ARCHIVE_DATA.subjects.find(s => s.id === catId);
    if (sub) return sub.title;

    return catId;
  }

  function getItemsByCategory(catId) {
    if (!ARCHIVE_DATA.items || !Array.isArray(ARCHIVE_DATA.items)) return [];
    return ARCHIVE_DATA.items.filter(item => {
      return Array.isArray(item.categories) && item.categories.includes(catId);
    });
  }

  function getLinkIcon(type) {
    switch (type) {
      case "pdf": return "📄";
      case "presentation": return "📊";
      case "github": return "🔗";
      case "website": return "🌐";
      case "file": return "💾";
      default: return "📎";
    }
  }

  function updateBreadcrumb(trail) {
    let html = `<a href="#/">Bölümler</a>`;

    trail.forEach((crumb, index) => {
      html += `<span class="breadcrumb-separator">→</span>`;
      const isLast = index === trail.length - 1;
      if (isLast) {
        html += `<span class="breadcrumb-current">${escapeHtml(crumb.title)}</span>`;
      } else {
        html += `<a href="#/${crumb.hash}">${escapeHtml(crumb.title)}</a>`;
      }
    });

    breadcrumbElement.innerHTML = html;
  }

  function renderNotFound() {
    updateBreadcrumb([
      { title: "Sayfa Bulunamadı", hash: "" }
    ]);

    appElement.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">⚠️</div>
        <p>Böyle bir kategori veya ders bulunamadı.</p>
        <p style="margin-top: 10px;"><a href="#/" style="color: var(--accent-blue);">Ana Sayfaya Dön</a></p>
      </div>
    `;
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});
