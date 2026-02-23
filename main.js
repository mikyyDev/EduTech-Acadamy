// MOBILE MENU FUNCTIONALITY
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

// Open mobile menu
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
  });
}

// Close mobile menu
const closeNav = () => {
  if (menu) menu.style.display = "none";
  if (closeBtn) closeBtn.style.display = "none";
  if (menuBtn) menuBtn.style.display = "inline-block";
};

if (closeBtn) {
  closeBtn.addEventListener("click", closeNav);
}

// Close menu when clicking on a link (mobile)
const navLinks = document.querySelectorAll(".nav_menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 1024) {
      closeNav();
    }
  });
});

// NAVBAR STYLE ON SCROLL
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (nav) {
    nav.classList.toggle("window-scroll", window.scrollY > 0);
  }
});

//   SHOW/HIDE FAQ ANSWER
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    // Change icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// SMOOTH SCROLLING FOR NAVIGATION
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav_menu a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Only handle internal links (starting with #)
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          // Calculate position with offset for fixed header
          const headerHeight = document.querySelector("nav").offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight;

          // Smooth scroll to target
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
});

// ACTIVE NAV LINK HIGHLIGHTING
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav_menu a");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
