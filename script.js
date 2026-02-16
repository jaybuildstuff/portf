// 1. NAME SWAP LOGIC
const nameElement = document.getElementById('name-swap');
const names = ["Jay", "Yididya"];
let nameIndex = 0;

function swapName() {
    nameElement.classList.add('name-exit');
    
    setTimeout(() => {
        nameIndex = (nameIndex + 1) % names.length;
        nameElement.textContent = names[nameIndex];
        nameElement.classList.remove('name-exit');
        nameElement.classList.add('name-enter');
    }, 400);
}

// Swaps name every 4 seconds
setInterval(swapName, 4000);

// 2. ACCORDION LOGIC
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

// 3. TAG NAVIGATION
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

// 4. MAGNETIC EFFECT
document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    el.addEventListener('mouseleave', () => {
        el.style.transform = `translate(0px, 0px)`;
    });
});

// 5. INITIALIZATION
window.addEventListener("load", () => {
    const bar = document.querySelector(".progress");
    if (bar) setTimeout(() => { bar.style.width = "100%"; }, 300);

    const updateText = document.getElementById("last-update");
    if (updateText) {
        const now = new Date();
        updateText.textContent = `LAST UPDATED: ${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
    }
});
