/* =====================================================
   1. TOMBOL GANTI TEMA (terang / gelap)
   ===================================================== */
const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');

// Saat pertama dibuka, ikuti pengaturan tema perangkat
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.setAttribute('data-theme', 'dark');
}

// Klik tombol untuk bolak-balik antara terang dan gelap
themeBtn.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  root.setAttribute('data-theme', isDark ? 'light' : 'dark');
});


/* =====================================================
   2. GAMBAR YANG BELUM ADA
   Kalau file gambar tidak ditemukan, gambar dihapus
   supaya tulisan placeholder ("Photo" / "Activity photo") tampil.
   ===================================================== */
document.querySelectorAll('.avatar img, .thumb img').forEach(img => {
  img.addEventListener('error', () => img.remove());
});
