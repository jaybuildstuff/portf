document.querySelectorAll(".category-toggle").forEach(button => {
    button.addEventListener("click", () => {

        const allContents = document.querySelectorAll(".category-content");
        const currentContent = button.nextElementSibling;

        allContents.forEach(content => {
            if (content !== currentContent) {
                content.classList.remove("active");
            }
        });

        currentContent.classList.toggle("active");
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

// Profile glow
const profile = document.getElementById("profileToggle");
if (profile) {
    profile.addEventListener("click", () => {
        profile.classList.toggle("active");
    });
}

// Progress bar
window.addEventListener("load", () => {
    document.querySelector(".progress").style.width = "100%";
});

// Date
const today = new Date();
document.getElementById("last-update").textContent =
"Last Updated: " + today.toLocaleDateString();
