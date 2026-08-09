// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when a navigation link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ==============================
// PROJECT COUNTER
// ==============================

const numberElement = document.getElementById("num");
const increaseButton = document.getElementById("btn");

let projectCount = 0;

increaseButton.addEventListener("click", () => {
    projectCount++;
    numberElement.textContent = projectCount;

    // Small animation
    numberElement.style.transform = "scale(1.15)";

    setTimeout(() => {
        numberElement.style.transform = "scale(1)";
    }, 150);
});


// ==============================
// HEADER SCROLL EFFECT
// ==============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(11, 11, 15, 0.96)";
    } else {
        header.style.background = "rgba(11, 11, 15, 0.82)";
    }
});


// ==============================
// REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .stat-card, .skill-card, .project-card, .contact-box"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);
});


// Add the visible styles dynamically
const revealStyle = document.createElement("style");

revealStyle.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(revealStyle);


// ==============================
// CURRENT YEAR
// ==============================

const currentYear = new Date().getFullYear();
const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        `Designed & built by <strong>Keny Laura</strong> © ${currentYear}`;
}