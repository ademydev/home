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

  function updateThemeButton(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (themeIcon) {
        themeIcon.innerHTML = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
      }
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute("title", "Açık Moda Geç");
        themeToggleBtn.setAttribute("aria-label", "Açık Moda Geç");
      }
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (themeIcon) {
        themeIcon.innerHTML = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
      }
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute("title", "Karanlık Moda Geç");
        themeToggleBtn.setAttribute("aria-label", "Karanlık Moda Geç");
      }
      localStorage.setItem("theme", "light");
    }
  }

  function applyTheme(theme) {
    updateThemeButton(theme);
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
        <div>
          <span class="view-tag">DİZİN</span>
          <h1 class="view-title">Bölümler</h1>
        </div>
        <span class="view-count">${ARCHIVE_DATA.sections.length} Kategori</span>
      </div>
      <div class="grid-list grid-list-sections">
    `;

    ARCHIVE_DATA.sections.forEach((section, index) => {
      const count = getItemsByCategory(section.id).length;
      const countLabel = section.hasSubcategories
        ? `${ARCHIVE_DATA.subjects.length} Ders`
        : `${count} Kayıt`;
      const num = String(index + 1).padStart(2, '0');

      html += `
        <a href="#/${section.id}" class="grid-card">
          <div class="grid-card-left">
            <span class="grid-card-badge">${num}</span>
            <div class="grid-card-body">
              <span class="grid-card-title">${escapeHtml(section.title)}</span>
              <span class="grid-card-meta">${countLabel}</span>
            </div>
          </div>
          <svg class="grid-card-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
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
        <div>
          <span class="view-tag">KATEGORİ</span>
          <h2 class="view-title">Dersler</h2>
        </div>
        <span class="view-count">${ARCHIVE_DATA.subjects.length} Ders</span>
      </div>
      <div class="grid-list grid-list-subjects">
    `;

    ARCHIVE_DATA.subjects.forEach((subject, index) => {
      const count = getItemsByCategory(subject.id).length;
      const num = String(index + 1).padStart(2, '0');

      html += `
        <a href="#/dersler/${subject.id}" class="grid-card">
          <div class="grid-card-left">
            <span class="grid-card-badge">${num}</span>
            <div class="grid-card-body">
              <span class="grid-card-title">${escapeHtml(subject.title)}</span>
              <span class="grid-card-meta">${count > 0 ? count + ' Kayıt' : 'Boş'}</span>
            </div>
          </div>
          <svg class="grid-card-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
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
        <div>
          <span class="view-tag">ARŞİV</span>
          <h2 class="view-title">${escapeHtml(title)}</h2>
        </div>
        <span class="view-count">${items.length} Çalışma</span>
      </div>
    `;

    if (items.length === 0) {
      html += `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
              <polyline points="13 2 13 9 20 9"/>
            </svg>
          </div>
          <p class="empty-state-text">Henüz içerik eklenmedi.</p>
          <span class="empty-state-sub">Bu kategoriye ait çalışma kaydı bulunmuyor</span>
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
          ${icon}
          <span>${escapeHtml(link.title || link.type.toUpperCase())}</span>
        </a>
      `;
    }).join("");

    return `
      <div class="item-card">
        <div class="item-header">
          <div class="item-header-main">
            <h3 class="item-title">${escapeHtml(item.title)}</h3>
            <div class="item-categories">${categoryTags}</div>
          </div>
          ${item.date ? `<span class="item-date">${escapeHtml(item.date)}</span>` : ""}
        </div>
        ${item.description ? `<p class="item-desc">${escapeHtml(item.description)}</p>` : ""}
        ${linkButtons ? `<div class="item-footer"><div class="item-links">${linkButtons}</div></div>` : ""}
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
      case "pdf":
        return `<svg class="btn-svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15h6"/><path d="M9 11h6"/></svg>`;
      case "presentation":
        return `<svg class="btn-svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;
      case "github":
        return `<svg class="btn-svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`;
      case "website":
        return `<svg class="btn-svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
      case "file":
        return `<svg class="btn-svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
      default:
        return `<svg class="btn-svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
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
