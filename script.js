// Typewriter Effect
const textElement = document.querySelector('.typewriter');
const texts = ['Scalable Systems.', 'Cloud Architectures.', 'Modern Web Apps.', 'AI Solutions.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;
    if (letter.length === currentText.length) {
        setTimeout(() => {
            // Pause at end of word, then delete (simplification: just jump to next for now or implement full delete logic)
            // For smoother loop, let's just reset index and move to next word after a pause
            count++;
            index = 0;
        }, 2000);

    }
    setTimeout(type, 150); // Typing speed
})();


// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)'; // Darker background on scroll
        navbar.style.boxShadow = '0 10px 30px -10px rgba(2, 6, 23, 0.5)';
    } else {
        navbar.style.background = 'var(--glass-bg)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth Scrolling for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});
