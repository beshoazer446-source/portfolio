
const menuCheckbox = document.getElementById('menu-toggle');
const navLinks = document.querySelectorAll('.nav-links a');
const cursor = document.querySelector('.cursor');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle?.querySelector('i');
const themeLabel = themeToggle?.querySelector('span');
const languageToggle = document.querySelector('.language-toggle');
 
const translations = {
    en: {
        'nav.about': 'ABOUT', 'nav.skills': 'SKILLS', 'nav.projects': 'PROJECTS', 'nav.contact': 'CONTACT',
        'actions.downloadCv': 'Download CV', 'actions.downloadCvArrow': 'Download CV ↓', 'actions.viewWork': 'View My Work →', 'actions.letsTalk': "Let's Talk",
        'hero.role': 'Frontend Developer', 'hero.description': 'I craft beautiful, fast, and accessible web experiences. Turning ideas into pixel-perfect interfaces that people love.',
        'ticker.frontend': 'FRONTEND DEVELOPER', 'ticker.design': 'UI/UX DESIGNER', 'ticker.programming': 'COMPETITIVE PROGRAMMING',
        'about.label': 'About Me', 'about.title': 'Passionate <br> about <span class="accent-text">great</span> <br> interfaces.',
        'about.bioOne': "I'm <strong>Beshoy Azer</strong>, a Frontend Developer and CS student with a passion for building clean, modern, and responsive web experiences. I combine strong design sensibility with solid technical skills.",
        'about.bioTwo': "Beyond frontend, I'm an active competitive programmer on <strong>Codeforces</strong>, constantly sharpening my problem-solving and algorithmic thinking - skills that make me a better developer.",
        'stats.projects': 'PROJECTS BUILT', 'stats.competitive': 'COMPETITIVE PROG.', 'stats.years': 'YEARS CODING', 'stats.dedication': 'DEDICATION',
        'skills.label': 'Skills', 'skills.title': 'Technical <span>Expertise</span>', 'skills.frontend': 'Frontend Development', 'skills.uiux': 'UI/UX Design',
        'skills.visuals': 'Visuals & Structure', 'skills.competitive': 'Competitive Programming', 'skills.dataStructures': 'Data Structures', 'skills.problemSolving': 'Problem Solving',
        'skills.logic': 'Logic & Efficiency', 'skills.tools': 'Tools & Environment', 'skills.responsive': 'Responsive Design', 'skills.performance': 'Web Performance', 'skills.workflow': 'Workflow & Optimization',
        'projects.label': 'Projects', 'projects.title': 'Selected <span class="accent-text">Projects.</span>', 'project.bookingCategory': 'Booking System',
        'project.filtering': 'Filtering Logic', 'project.bookingDescription': 'An advanced filtering system for searching and sorting residential units by price and type.', 'project.ecommerceCategory': '>E-Commerce', 'project.ecommerceDescription': 'A complete product management system with a shopping cart and dynamic order totals.', 'project.localStorage': 'Local Storage', 'project.dom': 'DOM Manipulation', 'project.tasksCategory': 'Task Management', 'project.tasksDescription':  'A daily task manager that lets users add, edit, and delete tasks with local data storage.',
        'footer.label': 'Get In Touch', 'footer.title': 'Let\'s <span class="accent-text">Work</span><br>Together.', 'footer.description': 'Have a project in mind or just want to say hi?<br>My inbox is always open.', 'footer.email': 'Email Me'
    },
    ar: {
        'nav.about': 'نبذة عني', 'nav.skills': 'المهارات', 'nav.projects': 'المشاريع', 'nav.contact': 'تواصل معي',
        'actions.downloadCv': 'تحميل السيرة الذاتية', 'actions.downloadCvArrow': 'تحميل السيرة الذاتية ↓', 'actions.viewWork': 'شاهد أعمالي →', 'actions.letsTalk': 'تحدث معي',
        'hero.role': 'مطور واجهات أمامية', 'hero.description': 'أصمم تجارب ويب جميلة وسريعة وسهلة الاستخدام، وأحوّل الأفكار إلى واجهات دقيقة يحبها الناس.',
        'ticker.frontend': 'مطور واجهات أمامية', 'ticker.design': 'مصمم UI/UX', 'ticker.programming': 'برمجة تنافسية',
        'about.label': 'نبذة عني', 'about.title': 'شغوف بـ <br> الواجهات <span class="accent-text">الرائعة</span> <br> والتجارب المميزة.',
        'about.bioOne': 'أنا <strong>بشوي عازر</strong>، مطور واجهات أمامية وطالب علوم حاسب، شغوف ببناء تجارب ويب نظيفة وعصرية ومتجاوبة. أجمع بين الحس التصميمي والمهارات التقنية القوية.',
        'about.bioTwo': 'إلى جانب تطوير الواجهات، أشارك في البرمجة التنافسية على <strong>Codeforces</strong>، وأطوّر باستمرار مهارات حل المشكلات والتفكير الخوارزمي.',
        'stats.projects': 'مشروعاً منفذاً', 'stats.competitive': 'برمجة تنافسية', 'stats.years': 'سنوات برمجة', 'stats.dedication': 'التزام كامل',
        'skills.label': 'المهارات', 'skills.title': 'الخبرة <span>التقنية</span>', 'skills.frontend': 'تطوير الواجهات', 'skills.uiux': 'تصميم UI/UX',
        'skills.visuals': 'التصميم والبنية', 'skills.competitive': 'البرمجة التنافسية', 'skills.dataStructures': 'هياكل البيانات', 'skills.problemSolving': 'حل المشكلات',
        'skills.logic': 'المنطق والكفاءة', 'skills.tools': 'الأدوات والبيئة', 'skills.responsive': 'تصميم متجاوب', 'skills.performance': 'أداء الويب', 'skills.workflow': 'سير العمل والتحسين',
        'projects.label': 'المشاريع', 'projects.title': 'أهم <span class="accent-text">المشاريع.</span>', 'project.bookingCategory': 'نظام حجز',
        'project.filtering': 'منطق الفلترة', 'project.bookingDescription': 'نظام فلترة متقدم للبحث عن الوحدات السكنية وترتيبها حسب السعر والنوع.', 'project.ecommerceCategory': '>متجر إلكتروني', 'project.ecommerceDescription': 'نظام متكامل لإدارة المنتجات وسلة التسوق وحساب إجمالي الطلبات ديناميكياً.', 'project.localStorage': 'التخزين المحلي', 'project.dom': 'التعامل مع DOM', 'project.tasksCategory': 'إدارة المهام', 'project.tasksDescription': 'تطبيق لإدارة المهام اليومية يتيح إضافة المهام وتعديلها وحذفها مع حفظ البيانات محلياً.',
        'footer.label': 'تواصل معي', 'footer.title': 'لنعمل <span class="accent-text">معاً</span><br>على مشروعك.', 'footer.description': 'لديك مشروع في ذهنك أو تريد فقط إلقاء التحية؟<br>صندوق بريدي مفتوح دائماً.', 'footer.email': 'راسلني'
    }
};
 
const setLanguage = (language) => {
    const isArabic = language === 'ar';
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const value = translations[language][element.dataset.i18n];
        if (value) element.innerHTML = value;
    });
    if (languageToggle) {
        languageToggle.textContent = isArabic ? 'EN' : 'AR';
        languageToggle.setAttribute('aria-label', isArabic ? 'Switch to English' : 'Switch to Arabic');
    }
};
 
setLanguage(localStorage.getItem('portfolio-language') || 'en');
languageToggle?.addEventListener('click', () => {
    const nextLanguage = document.documentElement.lang === 'ar' ? 'en' : 'ar';
    setLanguage(nextLanguage);
    localStorage.setItem('portfolio-language', nextLanguage);
});
 
const setTheme = (theme) => {
    const isLight = theme === 'light';
    document.documentElement.dataset.theme = isLight ? 'light' : 'dark';
    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', String(isLight));
        themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
    }
    if (themeIcon) themeIcon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
    if (themeLabel) themeLabel.textContent = isLight ? 'DARK' : 'LIGHT';
};
 
setTheme(localStorage.getItem('portfolio-theme') || 'dark');
themeToggle?.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
});
 
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuCheckbox) menuCheckbox.checked = false;
    });
});
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.padding = '15px 60px';
        } else {
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
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.25, ease: "power2.out" });
        });
 
        document.querySelectorAll('a, button, .project-card').forEach(el => {
            el.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 1.5, backgroundColor: 'rgba(25, 200, 250, 0.2)', duration: 0.3 }));
            el.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', duration: 0.3 }));
        });
    }
 
    gsap.from(".hero-content", { opacity: 0, y: 50, duration: 1.2, ease: "power3.out", delay: 0.3 });
 
    // ===== حركة الصورة مع الماوس =====
    const heroImageCircle = document.querySelector('.hero-image-circle');
    const heroImageContainer = document.querySelector('.hero-image-container');
    const outerRing = document.querySelector('.circle-border-outer');
 
    if (heroImageCircle && window.innerWidth > 992) {
        const xTo = gsap.quickTo(heroImageCircle, "x", { duration: 0.25, ease: "power3.out" });
        const yTo = gsap.quickTo(heroImageCircle, "y", { duration: 0.25, ease: "power3.out" });
        const rotXTo = gsap.quickTo(heroImageCircle, "rotationX", { duration: 0.25, ease: "power3.out" });
        const rotYTo = gsap.quickTo(heroImageCircle, "rotationY", { duration: 0.25, ease: "power3.out" });
        const ringXTo = outerRing ? gsap.quickTo(outerRing, "x", { duration: 0.3, ease: "power3.out" }) : null;
        const ringYTo = outerRing ? gsap.quickTo(outerRing, "y", { duration: 0.3, ease: "power3.out" }) : null;
 
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;  // -1 -> 1
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
 
            xTo(x * 18);
            yTo(y * 18);
            rotYTo(x * 8);
            rotXTo(y * -8);
 
            if (ringXTo) { ringXTo(x * 18); ringYTo(y * 18); }
        });
    }
});
 
