document.querySelectorAll(".category-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.classList.toggle("active");
    });
});

const available = true;

const dot = document.querySelector(".status-dot");
const text = document.getElementById("availability-text");

if (!available) {
    dot.style.background = "var(--unavailable)";
    dot.style.boxShadow = "none";
    text.textContent = "Currently Unavailable";
}
