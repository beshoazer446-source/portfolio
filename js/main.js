const menuCheckbox = document.getElementById('menu-toggle');
const navLinks = document.querySelectorAll('.nav-links a');
const cursor = document.querySelector('.cursor');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuCheckbox) menuCheckbox.checked = false;
    });
});
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(8, 11, 16, 0.95)';
            nav.style.padding = '15px 60px';
        } else {
            nav.style.backgroundColor = 'rgba(8, 11, 16, 0.85)';
            nav.style.padding = '24px 60px';
        }
    }
});

const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '↑';
scrollBtn.className = 'scroll-top-btn';
document.body.appendChild(scrollBtn);

Object.assign(scrollBtn.style, {
    position: 'fixed', bottom: '30px', right: '30px',
    padding: '10px 15px', backgroundColor: '#19c8fa',
    border: 'none', cursor: 'pointer', display: 'none', zIndex: '1000'
});

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("GSAP setup complete!");
    if (cursor && window.innerWidth > 768) {
        gsap.set(cursor, { 
            position: 'fixed', pointerEvents: 'none', zIndex: 999999, 
            width: '30px', height: '30px', border: '2px solid #19c8fa', 
            borderRadius: '50%', backgroundColor: 'transparent',
            left: '-15px', top: '-15px'
        });

        window.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.2, ease: "power2.out" });
        });

        document.querySelectorAll('a, button, .project-card').forEach(el => {
            el.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 1.5, backgroundColor: 'rgba(25, 200, 250, 0.2)', duration: 0.3 }));
            el.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', duration: 0.3 }));
        });
    }

    gsap.from(".hero-content", { opacity: 0, y: 50, duration: 1.2, ease: "power3.out", delay: 0.3 });
});

