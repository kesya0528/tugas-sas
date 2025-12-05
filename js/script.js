const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

// Toggle Menu Mobile
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animasi icon hamburger menjadi X
    const bars = document.querySelectorAll('.bar');
    if(navMenu.classList.contains('active')) {
        bars[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
    }
});

// Tutup menu saat link diklik
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        // Reset icon
        const bars = document.querySelectorAll('.bar');
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
    });
});

// UPDATE: Logika untuk Menampilkan Section Anggota
document.addEventListener('DOMContentLoaded', function() {
    const linkAnggota = document.getElementById('link-anggota');
    const sectionAnggota = document.getElementById('anggota');

    if (linkAnggota && sectionAnggota) {
        linkAnggota.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah lompatan kasar default browser

            // Hapus class 'hidden-section' agar section muncul
            sectionAnggota.classList.remove('hidden-section');

            // Scroll halus ke section tersebut
            sectionAnggota.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});