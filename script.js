const toggles = document.querySelectorAll(".category-toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        const content = toggle.nextElementSibling;
        content.classList.toggle("active");
    });
});
