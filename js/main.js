/* ============================================================
   main.js — portfolio interactions
   ============================================================ */

(function () {
  "use strict";

  const header = document.getElementById("site-header");
  const navLinks = Array.from(document.querySelectorAll(".nav a"));
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  /* ---------- header state + active section ---------- */
  function updateActiveSection() {
    const probe = window.scrollY + 140;
    let currentId = "";

    sections.forEach((section) => {
      if (probe >= section.offsetTop) currentId = section.id;
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${currentId}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
    updateActiveSection();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  function setMenu(open) {
    mobileMenu.classList.toggle("is-open", open);
    header.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      setMenu(!mobileMenu.classList.contains("is-open"));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) {
        setMenu(false);
        menuBtn.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900 && mobileMenu.classList.contains("is-open")) {
        setMenu(false);
      }
    });
  }

  /* ---------- scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  /* ---------- footer year ---------- */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
