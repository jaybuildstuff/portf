// Accordion
document.querySelectorAll(".category-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        if (content) {
            content.classList.toggle("active");
            
            // Optional: Smooth opacity transition logic
            if (content.classList.contains("active")) {
                setTimeout(() => { content.style.opacity = 1; }, 10);
            } else {
                content.style.opacity = 0;
            }
        }
    });
});

// Tag navigation
document.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("click", () => {
        const target = tag.getAttribute("data-target");
        if (!target) return;
        const section = document.getElementById(target);
        if (section) {
            // Open the section if it is closed
            const content = section;
            const toggle = section.previousElementSibling;
            
            if (!content.classList.contains('active')) {
                content.classList.add('active');
                setTimeout(() => { content.style.opacity = 1; }, 10);
            }
            
            // Scroll to it
            section.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    });
});

// Profile glow toggle
const profile = document.getElementById("profileToggle");
if (profile) {
    profile.addEventListener("click", () => {
        profile.classList.toggle("active");
    });
}

// Progress animation
window.addEventListener("load", () => {
    const progressBar = document.querySelector(".progress");
    if (progressBar) {
        setTimeout(() => {
            progressBar.style.width = "100%";
        }, 100);
    }
});

// Date
const today = new Date();
const updateText = document.getElementById("last-update");
if (updateText) {
    updateText.textContent = "Last Updated: " + today.toLocaleDateString();
}
