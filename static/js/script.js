// ==========================================
// Logika Dark Mode
// ==========================================
// Cek preferensi tema sebelumnya di LocalStorage
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Fungsi untuk tombol toggle Dark Mode
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {
    // Jika ada class dark, hapus. Jika tidak ada, tambahkan.
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
});

// ==========================================
// Logika Tombol Hamburger (Mobile Menu)
// ==========================================
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Buka/Tutup menu saat tombol hamburger diklik
hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Otomatis tutup menu mobile saat salah satu menu diklik (biar rapi)
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});