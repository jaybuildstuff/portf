// ===============================
// CATEGORY TOGGLE (Accordion)
// ===============================

const toggles = document.querySelectorAll(".category-toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        const content = toggle.nextElementSibling;

        // Close all other sections
        document.querySelectorAll(".category-content").forEach(section => {
            if (section !== content) {
                section.classList.remove("active");
                section.style.maxHeight = null;
            }
        });

        // Toggle current section
        content.classList.toggle("active");

        if (content.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});


// ===============================
// SMOOTH SCROLL FOR INTERNAL LINKS
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===============================
// FADE-IN ON SCROLL (Subtle Premium Effect)
// ===============================

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".hero, .work-section, .hobbies").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});
