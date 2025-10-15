// ====================================
// PORTFOLIO CONFIGURATION
// Customize all your data here!
// ====================================

const PORTFOLIO_CONFIG = {
  // Personal Information
  FULL_NAME: "K DINESH KUMAR",
  FIRST_NAME: "Dinesh",
  ROLE: "Aspiring Computer Science Engineer",
  EMAIL: "dineshanime228@gmail.com",
  PHONE: "9182747357",
  LOCATION: "RVS Nagar, Chittoor, 512127",

  // Hero Section
  HERO_DESCRIPTION:
    "A passionate 3rd-year CSE student dedicated to crafting innovative software solutions and exploring the frontiers of technology.",

  // About Section
  ABOUT_TITLE: "Crafting Digital Experiences",
  ABOUT_DESCRIPTION_1:
    "I'm a Computer Science Engineering student with a strong foundation in programming and a keen interest in web development, algorithms, and artificial intelligence. My academic journey has equipped me with problem-solving skills and a drive to build impactful applications.",
  ABOUT_DESCRIPTION_2:
    "I thrive on learning new technologies and applying them to real-world challenges. Whether it's developing robust backend systems or designing intuitive user interfaces, I'm always eager to expand my knowledge and contribute to exciting projects.",
  SUMMARY:
    "Aspiring Computer Science Engineer with a strong foundation in Python, Java, and C. Passionate about solving real-world problems through innovative technology and collaboration. Skilled in web technologies, database management, and IoT, with an eagerness to learn and contribute to impactful projects.",

  // Contact Section
  CONTACT_DESCRIPTION:
    "Feel free to reach out if you have a project idea, a job opportunity, or just want to connect and discuss technology. I'm always open to new collaborations!",

  // Links
  RESUME_LINK: "", // Optional: link to your PDF resume
  LINKEDIN_URL: "", // Add full URL, e.g. "https://www.linkedin.com/in/username"
  LINKEDIN_LABEL: "LinkedIn",
  GITHUB_URL: "", // Optional
  GITHUB_LABEL: "GitHub",

  // Images (Use placeholder.svg or your own image paths)
  PROFILE_IMAGE: "/placeholder.svg?height=250&width=250&text=Your+Photo",
  ABOUT_IMAGE: "/placeholder.svg?height=300&width=400&text=About+Image",

  // Current Year (Automatically updated)
  CURRENT_YEAR: new Date().getFullYear(),
  YEAR: new Date().getFullYear(),

  // Education
  EDUCATION: [
    {
      institution: "Sri Venkateswara College of Engineering Technology, Chittoor",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2023 – 2027",
      details: [],
    },
  ],

  // Certifications
  CERTIFICATIONS: [
    {
      name: "Python for Data Science",
      issuer: "IBM (Coursera)",
      year: "2023",
      icon: "fas fa-database",
    },
    {
      name: "React - The Complete Guide",
      issuer: "Udemy",
      year: "2024",
      icon: "fab fa-react",
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      icon: "fab fa-aws",
    },
  ],

  // Skills (Categorized)
  TECHNICAL_SKILLS: {
    Languages: ["Java", "Python", "C"],
    "Web Technologies": ["HTML", "CSS"],
    Database: ["MySQL"],
    Hardware: ["Arduino", "IoT"],
    Concepts: ["OOP", "Code Analysis"],
    Tools: ["VS Code", "GitHub"],
  },

  SOFT_SKILLS: [
    "Adaptability",
    "Leadership",
    "Critical Thinking",
    "Problem Solving",
    "Active Listening",
    "Deep Learning Mindset",
  ],

  // Projects
  PROJECTS: [
    {
      title: "Weather Research System",
      year: "2024",
      description:
        "Developed a system that collects and analyzes weather data using Python and IoT sensors. Enabled real-time visualization of temperature and humidity trends.",
      tech: ["Python", "IoT"],
      links: [],
    },
    {
      title: "Career Pathfinding Application",
      year: "2025",
      description:
        "Created a web-based tool using HTML, CSS, and Python to guide students toward suitable career paths based on skills and interests.",
      tech: ["HTML", "CSS", "Python"],
      links: [],
    },
    {
      title: "Job Recommendation Platform",
      year: "2025",
      description:
        "Built a web application that delivers personalized job recommendations. Streamlined the job search by matching user preferences with targeted career opportunities.",
      tech: ["Web App"],
      links: [],
    },
    {
      title: "Personal Portfolio (This one!)",
      description:
        "A modern, responsive portfolio website designed to showcase skills and projects with a clean, animated aesthetic.",
      image: "/placeholder.svg?height=200&width=300&text=Portfolio",
      liveUrl: "#", // Link to your deployed portfolio
      githubUrl: "https://github.com/your-username/your-portfolio",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ],

  // Achievements
  ACHIEVEMENTS: [
    "Completed specialized training in Prompt Engineering.",
    "Participated in college-level hackathons and tech fests.",
  ],

  // Languages Known
  LANGUAGES_KNOWN: ["Telugu", "English", "Hindi", "Kannada", "Japanese"],
}

// ======== Computed / Helpers (No need to edit) ========
PORTFOLIO_CONFIG.PHONE_TEL = PORTFOLIO_CONFIG.PHONE.replace(/\s+/g, "")

// ====================================
// DO NOT EDIT BELOW THIS LINE
// (Unless you know what you're doing!)
// ====================================

document.addEventListener("DOMContentLoaded", () => {
  // Function to replace placeholders in HTML
  function populateHtmlPlaceholders() {
    Object.keys(PORTFOLIO_CONFIG).forEach((key) => {
      if (typeof PORTFOLIO_CONFIG[key] === "string" || typeof PORTFOLIO_CONFIG[key] === "number") {
        document.body.innerHTML = document.body.innerHTML.replace(new RegExp(`{{${key}}}`, "g"), PORTFOLIO_CONFIG[key])
      }
    })
  }

  // Function to populate education section
  function populateEducation() {
    const container = document.getElementById("education-container")
    if (container && PORTFOLIO_CONFIG.EDUCATION) {
      container.innerHTML = ""
      PORTFOLIO_CONFIG.EDUCATION.forEach((edu) => {
        const eduItem = document.createElement("div")
        eduItem.className = "education-item"
        eduItem.innerHTML = `
          <h3>${edu.degree}</h3>
          <h4>${edu.institution}</h4>
          <p class="period">${edu.duration}</p>
          <ul>
            ${edu.details.map((detail) => `<li>${detail}</li>`).join("")}
          </ul>
        `
        container.appendChild(eduItem)
      })
    }
  }

  // Function to populate certifications
  function populateCertifications() {
    const container = document.getElementById("certifications-container")
    if (container && PORTFOLIO_CONFIG.CERTIFICATIONS) {
      container.innerHTML = ""
      PORTFOLIO_CONFIG.CERTIFICATIONS.forEach((cert) => {
        const certItem = document.createElement("div")
        certItem.className = "cert-item"
        certItem.innerHTML = `
          <div class="cert-icon"><i class="${cert.icon}"></i></div>
          <div class="cert-info">
            <h4>${cert.name}</h4>
            <p>${cert.issuer} (${cert.year})</p>
          </div>
        `
        container.appendChild(certItem)
      })
    }
  }

  // Function to populate skills
  function populateSkills() {
    const skillCategories = [
      { id: "programming-skills", data: PORTFOLIO_CONFIG.TECHNICAL_SKILLS.Languages },
      { id: "web-skills", data: PORTFOLIO_CONFIG.TECHNICAL_SKILLS["Web Technologies"] },
      { id: "database-skills", data: PORTFOLIO_CONFIG.TECHNICAL_SKILLS.Database },
      { id: "hardware-skills", data: PORTFOLIO_CONFIG.TECHNICAL_SKILLS.Hardware },
      { id: "concept-skills", data: PORTFOLIO_CONFIG.TECHNICAL_SKILLS.Concepts },
      { id: "tool-skills", data: PORTFOLIO_CONFIG.TECHNICAL_SKILLS.Tools },
    ]

    skillCategories.forEach((category) => {
      const container = document.getElementById(category.id)
      if (container && category.data) {
        container.innerHTML = ""
        category.data.forEach((skill) => {
          const skillElement = document.createElement("div")
          skillElement.className = "skill-item"
          skillElement.innerHTML = `
            <div class="skill-info">
              <span class="skill-name">${skill}</span>
            </div>
          `
          container.appendChild(skillElement)
        })
      }
    })
  }

  // Function to populate projects
  function populateProjects() {
    const container = document.getElementById("projects-container")
    if (container && PORTFOLIO_CONFIG.PROJECTS) {
      container.innerHTML = ""
      PORTFOLIO_CONFIG.PROJECTS.forEach((project) => {
        const projectElement = document.createElement("div")
        projectElement.className = "project-card"
        projectElement.innerHTML = `
          <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
              ${project.tech.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
            </div>
          </div>
        `
        container.appendChild(projectElement)
      })
    }
  }

  // Function to populate achievements
  function populateAchievements() {
    const container = document.getElementById("achievements-container")
    if (container && PORTFOLIO_CONFIG.ACHIEVEMENTS) {
      container.innerHTML = ""
      PORTFOLIO_CONFIG.ACHIEVEMENTS.forEach((achievement) => {
        const achievementElement = document.createElement("div")
        achievementElement.className = "achievement-item"
        achievementElement.innerHTML = `
          <p>${achievement}</p>
        `
        container.appendChild(achievementElement)
      })
    }
  }

  // Function to populate languages known
  function populateLanguagesKnown() {
    const container = document.getElementById("languages-known-container")
    if (container && PORTFOLIO_CONFIG.LANGUAGES_KNOWN) {
      container.innerHTML = ""
      PORTFOLIO_CONFIG.LANGUAGES_KNOWN.forEach((language) => {
        const languageElement = document.createElement("div")
        languageElement.className = "language-item"
        languageElement.innerHTML = `
          <p>${language}</p>
        `
        container.appendChild(languageElement)
      })
    }
  }

  // Call all population functions
  populateHtmlPlaceholders()
  populateEducation()
  populateCertifications()
  populateSkills()
  populateProjects()
  populateAchievements()
  populateLanguagesKnown()
})
