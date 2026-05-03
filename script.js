/* Zaffro Landing — script.js */

// Smooth scroll nav linkekhez
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// FAQ: csak egy nyitva egyszerre
document.querySelectorAll('.faq__item').forEach(item => {
    item.addEventListener('toggle', () => {
        if (item.open) {
            document.querySelectorAll('.faq__item[open]').forEach(other => {
                if (other !== item) other.removeAttribute('open');
            });
        }
    });
});
