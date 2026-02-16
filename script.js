// 1. ADVANCED NAME FLIP (2s Interval)
const nameEl = document.getElementById('flip-name');
const names = ["Jay", "Yididya"];
let index = 0;

function flipName() {
    nameEl.classList.add('flip-up'); // Roll up & vanish
    
    setTimeout(() => {
        index = (index + 1) % names.length;
        nameEl.textContent = names[index];
        nameEl.classList.remove('flip-up');
        nameEl.classList.add('flip-down'); // Prepared at bottom
        
        setTimeout(() => {
            nameEl.classList.remove('flip-down'); // Slide into center
        }, 50);
    }, 400);
}
setInterval(flipName, 2000);

// 2. ACCORDION & CINEMATIC BARS
const toggles = document.querySelectorAll('.category-toggle');
const contents = document.querySelectorAll('.category-content');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const isActive = content.classList.contains('active');
        
        contents.forEach(c => c.classList.remove('active'));
        
        if (!isActive) {
            content.classList.add('active');
            document.body.classList.add('cinematic');
        } else {
            document.body.classList.remove('cinematic');
        }
    });
});

// 3. CURSOR & MAGNETIC LOGIC
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .tag, .magnetic').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate(0px, 0px)`;
    });
});

// 4. UI INITIALIZATION
window.addEventListener("load", () => {
    // Update bar
    const bar = document.querySelector(".progress");
    if (bar) setTimeout(() => bar.style.width = "100%", 500);

    // Dynamic Date
    const updateEl = document.getElementById('last-update');
    const now = new Date();
    if(updateEl) updateEl.innerText = `LAST UPDATE: ${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
});
