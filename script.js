// 1. CUSTOM CURSOR LOGIC
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .tag, .profile-image').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

// 2. ACCORDION & CINEMATIC EFFECT
const toggles = document.querySelectorAll('.category-toggle');
const contents = document.querySelectorAll('.category-content');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const isActive = content.classList.contains('active');

        // Close all others
        contents.forEach(c => {
            c.classList.remove('active');
            c.style.opacity = "0";
        });

        if (!isActive) {
            content.classList.add('active');
            setTimeout(() => { content.style.opacity = "1"; }, 10);
            document.body.classList.add('cinematic');
        } else {
            document.body.classList.remove('cinematic');
        }
    });
});

// 3. TAG NAVIGATION (BIO CLICK)
document.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("click", () => {
        const targetId = tag.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Close all first
            contents.forEach(c => c.classList.remove('active'));
            
            // Open target
            targetSection.classList.add('active');
            targetSection.style.opacity = "1";
            document.body.classList.add('cinematic');

            // Scroll to
            targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    });
});

// 4. MAGNETIC EFFECT
document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    el.addEventListener('mouseleave', () => {
        el.style.transform = `translate(0px, 0px)`;
    });
});

// 5. PROFILE & UI LOGIC
const profile = document.getElementById("profileToggle");
if (profile) profile.addEventListener("click", () => profile.classList.toggle("active"));

window.addEventListener("load", () => {
    const bar = document.querySelector(".progress");
    if (bar) setTimeout(() => { bar.style.width = "100%"; }, 200);
});

const updateText = document.getElementById("last-update");
if (updateText) {
    const now = new Date();
    updateText.textContent = `LAST UPDATED: ${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
}
