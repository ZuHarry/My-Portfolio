// Custom cursor
const dot = document.getElementById('cursorDot');
if (dot) {
    document.addEventListener('mousemove', e => {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
    });
    document.querySelectorAll('a, button, .project-item, .hobby-card').forEach(el => {
        el.addEventListener('mouseenter', () => dot.classList.add('expanded'));
        el.addEventListener('mouseleave', () => dot.classList.remove('expanded'));
    });
}

// Scroll reveal
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal, .contact-link').forEach(el => observer.observe(el));

// Dropdown toggle on click (mobile friendly)
document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    const btn = dropdown.querySelector('.nav-dropdown-btn');
    btn.addEventListener('click', e => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
    });
});
document.addEventListener('click', () => {
    document.querySelectorAll('.nav-dropdown').forEach(d => {
        if (!d.classList.contains('open') || !d.querySelector('.active')) {
            d.classList.remove('open');
        }
    });
});