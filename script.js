document.querySelectorAll(".category-toggle").forEach(button => {
    button.addEventListener("click", () => {
        button.nextElementSibling.classList.toggle("active");
    });
});

document.querySelectorAll(".tag, .mini-box").forEach(el => {
    el.addEventListener("click", () => {
        const target = el.getAttribute("data-target");
        if (!target) return;
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    });
});

document.getElementById("profileToggle")
?.addEventListener("click", function() {
    this.classList.toggle("active");
});

window.addEventListener("load", () => {
    document.querySelector(".progress").style.width = "100%";
});

document.getElementById("last-update").textContent =
"Last Updated: " + new Date().toLocaleDateString();
