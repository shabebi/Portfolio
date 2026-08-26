/* =========================================================
   EBRAHIM AL-SHABEBI — PORTFOLIO INTERACTIONS
   ========================================================= */

const projects = [
  {
    name: "Shamaa",
    category: "full-stack",
    label: "Full-Stack",
    description: "Project showcase placeholder. Add the final project story, role, and outcome here.",
    technologies: ["JavaScript", "Node.js", "SQL"],
    url: "#"
  },
  {
    name: "Ebdaa Media",
    category: "full-stack",
    label: "Full-Stack",
    description: "Company project showcase placeholder. Add the public website or case-study link here.",
    technologies: ["JavaScript", "Node.js", "PostgreSQL"],
    url: "#"
  },
  {
    name: "Turbo Travel",
    category: "frontend",
    label: "Frontend",
    description: "Project showcase placeholder. Add the final project description and visual preview here.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "#"
  },
  {
    name: "Annona",
    category: "full-stack",
    label: "Full-Stack",
    description: "Project showcase placeholder. Add the final project story, role, and technologies here.",
    technologies: ["React", "Node.js", "SQL"],
    url: "#"
  },
  {
    name: "Muwahjeh",
    category: "full-stack",
    label: "Full-Stack",
    description: "Project showcase placeholder. Add the final project description and live link here.",
    technologies: ["JavaScript", "Express.js", "PostgreSQL"],
    url: "#"
  },
  {
    name: "Erasmus",
    category: "wordpress",
    label: "WordPress",
    description: "Website development and maintenance project for the Erasmus Department.",
    technologies: ["WordPress", "Blocksy", "CSS"],
    url: "#"
  },
  {
    name: "Delightful",
    category: "wordpress",
    label: "WordPress",
    description: "Website project developed and maintained for the Erasmus Department environment.",
    technologies: ["WordPress", "Blocksy", "JavaScript"],
    url: "#"
  },
  {
    name: "Anisphone",
    category: "full-stack",
    label: "Full-Stack",
    description: "Project showcase placeholder. Add the final project story, stack, and outcome here.",
    technologies: ["JavaScript", "Node.js", "SQL"],
    url: "#"
  },
  {
    name: "Ghassan",
    category: "frontend",
    label: "Frontend",
    description: "Project showcase placeholder. Add the final project description and live website here.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "#"
  }
];

const projectsGrid = document.getElementById("projectsGrid");

function previewStyle(index) {
  const variants = [
    "linear-gradient(135deg, #0b0b0d, #2c080e 45%, #0b0b0d)",
    "linear-gradient(135deg, #090a0b, #161616 50%, #390b12)",
    "linear-gradient(135deg, #16080b, #070708 52%, #201015)",
    "linear-gradient(135deg, #0b0b0c, #24080e 48%, #101011)",
    "linear-gradient(135deg, #060607, #310b12 55%, #0a0a0b)",
    "linear-gradient(135deg, #0c0c0d, #1b1b1c 52%, #380912)",
    "linear-gradient(135deg, #19070a, #080809 52%, #250a0f)",
    "linear-gradient(135deg, #080809, #22080d 50%, #0d0d0e)",
    "linear-gradient(135deg, #0d0d0e, #191012 50%, #3a0b13)"
  ];
  return variants[index % variants.length];
}

function renderProjects(filter = "all") {
  projectsGrid.innerHTML = projects.map((project, index) => {
    const isVisible = filter === "all" || project.category === filter;
    return `
      <article class="project-card reveal ${isVisible ? "" : "hidden"}" data-category="${project.category}" style="--project-index:${index}">
        <div class="project-preview" style="background:${previewStyle(index)}">
          <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
          <div class="preview-ui">
            <div class="preview-accent"></div>
          </div>
        </div>
        <div class="project-content">
          <div class="project-topline">
            <span class="project-category">${project.label}</span>
            <a class="project-arrow" href="${project.url}" ${project.url !== "#" ? 'target="_blank" rel="noreferrer"' : ''} aria-label="Open ${project.name}">↗</a>
          </div>
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => `<span>${tech}</span>`).join("")}
          </div>
          <a class="project-link" href="${project.url}" ${project.url !== "#" ? 'target="_blank" rel="noreferrer"' : ''}>
            ${project.url === "#" ? "Add live link" : "View website"} <span>↗</span>
          </a>
        </div>
      </article>
    `;
  }).join("");

  observeReveals();
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

/* Reveal on scroll */
let revealObserver;

function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
    return;
  }

  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => revealObserver.observe(el));
}

renderProjects();

/* Mobile navigation */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

/* Scroll progress + back to top */
const progress = document.querySelector(".scroll-progress span");
const backToTop = document.getElementById("backToTop");

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0}%`;
  backToTop.classList.toggle("visible", scrollTop > 650);
}

window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

observeReveals();

/* Subtle liquid-glass pointer movement on larger screens */
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (canHover) {
  document.querySelectorAll(".glass-panel, .project-card").forEach(card => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--pointer-x", `${x}%`);
      card.style.setProperty("--pointer-y", `${y}%`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.removeProperty("--pointer-x");
      card.style.removeProperty("--pointer-y");
    });
  });
}

/* Placeholder link protection */
document.querySelectorAll("[data-placeholder-link]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    alert("Add your LinkedIn profile URL in index.html.");
  });
});

/* Year */
document.getElementById("year").textContent = new Date().getFullYear();

/* Prevent placeholder project links from jumping to the top */
document.addEventListener("click", event => {
  const link = event.target.closest('a[href="#"]');
  if (link && !link.hasAttribute("data-placeholder-link")) {
    event.preventDefault();
    alert("Add the live project URL in script.js.");
  }
});
