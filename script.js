document.querySelectorAll(".category-toggle").forEach(button => {
    button.addEventListener("click", () => {

        const current = button.nextElementSibling;

        document.querySelectorAll(".category-content").forEach(content => {
            if (content !== current) {
                content.classList.remove("active");
            }
        });

        current.classList.toggle("active");
    });
});

// Smooth tag scroll
document.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("click", () => {
        const target = tag.dataset.target;
        if (!target) return;
        document.getElementById(target).scrollIntoView({ behavior: "smooth" });
    });
});

// Update date
window.addEventListener("load", () => {
    const today = new Date();
    document.getElementById("last-update").textContent =
        "Last Updated: " + today.toLocaleDateString();
});
