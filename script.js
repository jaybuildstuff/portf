// 1. ACCORDION & CINEMATIC EFFECT
const toggles = document.querySelectorAll('.category-toggle');
const contents = document.querySelectorAll('.category-content');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const isActive = content.classList.contains('active');

        // Close all others
        contents.forEach(c => c.classList.remove('active'));

        if (!isActive) {
            content.classList.add('active');
            document.body.classList.add('cinematic');
        } else {
            document.body.classList.remove('cinematic');
        }
    });
});

// 2. TAG NAVIGATION (CLICK BIO TAGS TO JUMP TO WORK)
document.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("click", () => {
        const targetId = tag.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            contents.forEach(c => c.classList.remove('active'));
            targetSection.classList.add('active');
            document.body.classList.add('cinematic');
            targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    });
});

// 3. MAGNETIC EFFECT (SMOOTH HOVER FOR PC)
document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });
    el.addEventListener('mouseleave', () => {
        el.style.transform = `translate(0px, 0px)`;
    });
});

// 4. UI INITIALIZATION
window.addEventListener("load", () => {
    // Update bar progress
    const bar = document.querySelector(".progress");
    if (bar) setTimeout(() => { bar.style.width = "100%"; }, 300);

    // Profile toggle
    const profile = document.getElementById("profileToggle");
    if (profile) profile.addEventListener("click", () => profile.classList.toggle("active"));

    // Set Update Date
    const updateText = document.getElementById("last-update");
    if (updateText) {
        const now = new Date();
        updateText.textContent = `LAST UPDATED: ${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
    }
});
