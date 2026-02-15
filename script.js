document.addEventListener("DOMContentLoaded", () => {

    const toggles = document.querySelectorAll(".category-toggle");

    toggles.forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            const expanded = button.getAttribute("aria-expanded") === "true";

            button.setAttribute("aria-expanded", !expanded);
            content.classList.toggle("active");
        });
    });

    const available = true; // change to false when unavailable

    const dot = document.querySelector(".status-dot");
    const text = document.getElementById("availability-text");

    if (!available) {
        dot.style.background = "var(--unavailable)";
        dot.style.boxShadow = "none";
        text.textContent = "Currently Unavailable";
    }

});
