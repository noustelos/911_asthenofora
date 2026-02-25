/**
 * Asthenofora24h - Hero Background Slider & Logic
 */

// 1. Προσθήκη της νέας φωτογραφίας main_photo.png στον πίνακα
const images = [
    'assets/main_photo.png', // Την έβαλα πρώτη για να είναι η κεντρική
    'assets/male1.jpeg', 
    'assets/female1.jpeg'
];

let currentIndex = 0;
const heroBg = document.getElementById('hero-bg');

/**
 * Συνάρτηση για την εναλλαγή των εικόνων και την ενεργοποίηση του Zoom
 */
function changeBackground() {
    if (!heroBg) return;

    heroBg.classList.remove('zoom-effect');
    
    heroBg.style.backgroundImage = `url('${images[currentIndex]}')`;
    
    setTimeout(() => {
        heroBg.classList.add('zoom-effect');
    }, 100);

    currentIndex = (currentIndex + 1) % images.length;
}

// Εκτέλεση μόλις φορτώσει η σελίδα
document.addEventListener('DOMContentLoaded', () => {
    changeBackground();
    // Εναλλαγή κάθε 6 δευτερόλεπτα
    setInterval(changeBackground, 6000);
});

/**
 * Smooth Scroll για τα links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/**
 * Share Button Functionality
 */
const shareBtn = document.getElementById('shareButton');
if (shareBtn) {
    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: 'Asthenofora24h',
                text: 'Ιδιωτικά Ασθενοφόρα - Άμεση Διακομιδή 24/7',
                url: window.location.href
            }).catch(console.error);
        } else {
            alert('Η κοινή χρήση δεν υποστηρίζεται σε αυτόν τον περιηγητή. Μπορείτε να αντιγράψετε το link χειροκίνητα.');
        }
    });
}