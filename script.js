// Minimal behavior: populate content, simple nav toggle, smooth scroll
;(() => {
  const C = window.PORTFOLIO_CONFIG || {} // Declare PORTFOLIO_CONFIG variable

  // Replace inline placeholders
  function replacePlaceholders() {
    const html = document.body.innerHTML
    const replaced = html
      .replaceAll("{{FULL_NAME}}", C.FULL_NAME || "")
      .replaceAll("{{FIRST_NAME}}", C.FIRST_NAME || "")
      .replaceAll("{{ROLE}}", C.ROLE || "")
      .replaceAll("{{EMAIL}}", C.EMAIL || "")
      .replaceAll("{{PHONE}}", C.PHONE || "")
      .replaceAll("{{PHONE_TEL}}", C.PHONE_TEL || "")
      .replaceAll("{{LOCATION}}", C.LOCATION || "")
      .replaceAll("{{LINKEDIN_URL}}", C.LINKEDIN_URL || "#")
      .replaceAll("{{LINKEDIN_LABEL}}", C.LINKEDIN_LABEL || "LinkedIn")
      .replaceAll("{{GITHUB_URL}}", C.GITHUB_URL || "#")
      .replaceAll("{{GITHUB_LABEL}}", C.GITHUB_LABEL || "GitHub")
      .replaceAll("{{RESUME_LINK}}", C.RESUME_LINK || "#")
      .replaceAll("{{SUMMARY}}", C.SUMMARY || "")
      .replaceAll("{{YEAR}}", String(C.YEAR || ""))
    document.body.innerHTML = replaced
  }

  // Build groups of technical skills
  function renderTechnicalSkills() {
    const root = document.getElementById("technical-skills")
    if (!root) return
    root.innerHTML = ""
    Object.entries(C.TECHNICAL_SKILLS || {}).forEach(([group, items]) => {
      const el = document.createElement("div")
      el.className = "skill-group"
      el.innerHTML = `
        <h4>${group}</h4>
        <ul class="tags">
          ${items.map((i) => `<li class="tag">${i}</li>`).join("")}
        </ul>
      `
      root.appendChild(el)
    })
  }

  // Soft skills
  function renderSoftSkills() {
    const root = document.getElementById("soft-skills")
    if (!root) return
    root.innerHTML = (C.SOFT_SKILLS || []).map((s) => `<li class="tag">${s}</li>`).join("")
  }

  // Projects
  function renderProjects() {
    const grid = document.getElementById("projects-grid")
    if (!grid) return
    grid.innerHTML = ""
    ;(C.PROJECTS || []).forEach((p) => {
      const item = document.createElement("article")
      item.className = "project"
      item.innerHTML = `
        <header>
          <h3>${p.title || ""}</h3>
          <div class="when">${p.year || ""}</div>
        </header>
        <p>${p.description || ""}</p>
        ${
          (p.tech || []).length
            ? `<ul class="tags">${(p.tech || []).map((t) => `<li class="tag">${t}</li>`).join("")}</ul>`
            : ""
        }
        ${
          (p.links || []).length
            ? `<div class="project-links">${(p.links || [])
                .map((l) => `<a class="btn" href="${l.href}" target="_blank" rel="noopener">${l.label || "Link"}</a>`)
                .join("")}</div>`
            : ""
        }
      `
      grid.appendChild(item)
    })
  }

  // Education
  function renderEducation() {
    const grid = document.getElementById("education-grid")
    if (!grid) return
    grid.innerHTML = ""
    ;(C.EDUCATION || []).forEach((e) => {
      const card = document.createElement("article")
      card.className = "card"
      card.innerHTML = `
        <h3 class="card-title">${e.institution || ""}</h3>
        <p><strong>${e.degree || ""}</strong></p>
        <p class="muted">${e.duration || ""}</p>
        ${
          (e.details || []).length
            ? `<ul class="list">${(e.details || []).map((d) => `<li>${d}</li>`).join("")}</ul>`
            : ""
        }
      `
      grid.appendChild(card)
    })
  }

  // Achievements
  function renderAchievements() {
    const list = document.getElementById("achievements-list")
    if (!list) return
    list.innerHTML = (C.ACHIEVEMENTS || []).map((a) => `<li>${a}</li>`).join("")
  }

  // Languages
  function renderLanguages() {
    const list = document.getElementById("languages-list")
    if (!list) return
    list.innerHTML = (C.LANGUAGES_KNOWN || []).map((l) => `<li class="tag">${l}</li>`).join("")
  }

  // Hide optional items if empty
  function handleOptional() {
    const liLinkedIn = document.getElementById("linkedinItem")
    const liGitHub = document.getElementById("githubItem")
    const cLinkedIn = document.getElementById("contactLinkedIn")
    const resumeBtn = document.getElementById("resumeBtn")
    const resumeBtn2 = document.getElementById("resumeBtn2")

    if (!C.LINKEDIN_URL) {
      liLinkedIn?.remove()
      cLinkedIn?.remove()
    }
    if (!C.GITHUB_URL) liGitHub?.remove()
    if (!C.RESUME_LINK) {
      resumeBtn?.remove()
      resumeBtn2?.remove()
    }
  }

  // Nav toggle
  function setupNav() {
    const toggle = document.getElementById("navToggle")
    const list = document.getElementById("navList")
    if (!toggle || !list) return
    toggle.addEventListener("click", () => {
      const open = list.classList.toggle("open")
      toggle.setAttribute("aria-expanded", open ? "true" : "false")
    })
    // Close on link click (mobile)
    list.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => list.classList.remove("open")))
  }

  // Init
  replacePlaceholders()
  renderTechnicalSkills()
  renderSoftSkills()
  renderProjects()
  renderEducation()
  renderAchievements()
  renderLanguages()
  handleOptional()
  setupNav()
})()
