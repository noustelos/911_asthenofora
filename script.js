/**
 * Asthenofora24h - Hero Background Slider & Logic
 * Nikos, σιγουρέψου ότι ο φάκελος assets είναι ΜΕΣΑ στον φάκελο 911.
 */

// 1. Ορισμός των εικόνων με την σωστή κατάληξη .jpeg (όπως στην εικόνα σου)
const images = [
    'assets/male1.jpeg', 
    'assets/female1.jpeg'
];

let currentIndex = 0;
const heroBg = document.getElementById('hero-bg');

/**
 * Συνάρτηση για την εναλλαγή των εικόνων και την ενεργοποίηση του Zoom
 */
function changeBackground() {
    // Έλεγχος αν υπάρχει το στοιχείο στο HTML για αποφυγή σφαλμάτων
    if (!heroBg) return;

    // Αφαίρεση του zoom class για να γίνει reset η κίνηση
    heroBg.classList.remove('zoom-effect');
    
    // Αλλαγή της εικόνας φόντου
    heroBg.style.backgroundImage = `url('${images[currentIndex]}')`;
    
    // Μικρή καθυστέρηση (100ms) για να προλάβει ο browser να "νιώσει" την αλλαγή 
    // πριν ξεκινήσει πάλι το smooth zoom
    setTimeout(() => {
        heroBg.classList.add('zoom-effect');
    }, 100);

    // Ενημέρωση του index για την επόμενη εικόνα
    currentIndex = (currentIndex + 1) % images.length;
}

// Εκτέλεση της συνάρτησης μόλις φορτώσει η σελίδα
document.addEventListener('DOMContentLoaded', () => {
    // Αρχική κλήση
    changeBackground();

    // Εναλλαγή κάθε 6 δευτερόλεπτα (6000 milliseconds)
    setInterval(changeBackground, 6000);
});

/**
 * Πρόσθετο Logic για Micro UX (Προαιρετικό)
 * Κλείσιμο του Mobile Menu (αν υπήρχε) ή Smooth Scroll links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Share Button Functionality
const shareBtn = document.getElementById('shareButton');
if (shareBtn) {
    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: 'Asthenofora24h',
                text: 'Private Ambulance Services 24/7',
                url: window.location.href
            }).catch(console.error);
        } else {
            alert('Sharing is not supported on this browser. You can copy the URL manually.');
        }
    });
}