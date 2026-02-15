// Accordion
document.querySelectorAll(".category-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.classList.toggle("active");
    });
});

// Tag navigation
document.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("click", () => {
        const target = tag.getAttribute("data-target");
        if (!target) return;
        document.getElementById(target).scrollIntoView({ behavior: "smooth" });
    });
});

// Profile glow toggle
const profile = document.getElementById("profileToggle");
profile.addEventListener("click", () => {
    profile.classList.toggle("active");
});

// Progress animation
window.addEventListener("load", () => {
    document.querySelector(".progress").style.width = "100%";
});

// Date
const today = new Date();
document.getElementById("last-update").textContent =
"Last Updated: " + today.toLocaleDateString();
