/* ═══════════════════════════════════════════
   main.js — Portfolio interactions
═══════════════════════════════════════════ */

// ──────────────────────────────────────────
// 1.  NAVBAR — background on scroll + active link
// ──────────────────────────────────────────
(function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Add scrolled class for glass background
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    highlightActiveLink();
  }, { passive: true });

  // Highlight the nav link for the section currently in view
  function highlightActiveLink() {
    let currentId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  }
})();

// ──────────────────────────────────────────
// 2.  MOBILE MENU toggle
// ──────────────────────────────────────────
(function initMobileMenu() {
  const btn        = document.getElementById("menu-btn");
  const menu       = document.getElementById("mobile-menu");
  const iconOpen   = document.getElementById("icon-open");
  const iconClose  = document.getElementById("icon-close");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden", isOpen);
    menu.classList.toggle("flex", !isOpen);
    iconOpen.classList.toggle("hidden", !isOpen);
    iconClose.classList.toggle("hidden", isOpen);
    btn.setAttribute("aria-expanded", String(!isOpen));
  });

  // Close menu when a link is tapped
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
    });
  });
})();

// ──────────────────────────────────────────
// 3.  TYPED EFFECT — hero subtitle
// ──────────────────────────────────────────
(function initTyped() {
  const el = document.getElementById("typed-text");
  if (!el) return;

  const words  = ["web.", "future.", "people."];
  let wordIdx  = 0;
  let charIdx  = 0;
  let deleting = false;
  let paused   = false;

  function tick() {
    const current = words[wordIdx];

    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        // Pause at end of word
        paused = true;
        setTimeout(() => { paused = false; deleting = true; schedule(); }, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        wordIdx  = (wordIdx + 1) % words.length;
      }
    }

    schedule();
  }

  function schedule() {
    if (paused) return;
    const speed = deleting ? 60 : 100;
    setTimeout(tick, speed);
  }

  // Start after hero entrance animation
  setTimeout(schedule, 1400);
})();

// ──────────────────────────────────────────
// 4.  SCROLL-REVEAL — Intersection Observer
// ──────────────────────────────────────────
(function initScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    // Fallback: show everything
    revealEls.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Unobserve after revealing to save resources
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => observer.observe(el));
})();

// ──────────────────────────────────────────
// 5.  SMOOTH SCROLL — offset for fixed nav
// ──────────────────────────────────────────
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();

      const navHeight = document.getElementById("navbar").offsetHeight;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;

      window.scrollTo({ top: targetTop, behavior: "smooth" });
    });
  });
})();

// ──────────────────────────────────────────
// 6.  CURRENT YEAR in footer (optional)
// ──────────────────────────────────────────
(function setYear() {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
