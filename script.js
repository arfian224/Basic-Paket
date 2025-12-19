// ===== SMOOTH SCROLL UNTUK NAVBAR =====
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== BUTTON HERO SCROLL KE ABOUT =====
const startButton = document.querySelector('.hero button');

startButton.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

// ===== NAVBAR EFFECT SAAT SCROLL =====
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = '#111';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        header.style.background = '#000';
        header.style.boxShadow = 'none';
    }
});

// ===== PESAN SEDERHANA SAAT SUBMIT (FRONTEND) =====
const form = document.querySelector('.contact form');

form.addEventListener('submit', () => {
    alert('Terima kasih! Pesan kamu sudah dikirim.');
});
