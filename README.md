# Website Rancang Undangan

Company profile + landing page marketing untuk **Rancang Undangan** — jasa undangan cetak & digital (Batu Aji, Batam).

## Struktur
- `index.html` — seluruh halaman (hero, keunggulan, layanan, katalog, cara order, FAQ, CTA, footer)
- `style.css` — tema hijau + emas + krem, responsif (mobile-first)
- `script.js` — menu mobile, FAQ accordion, animasi reveal
- `images/hero-undangan.jpg` — foto hero

## Konfigurasi penting
- **Nomor WhatsApp order:** `62881080257324` — dipakai di semua tombol (format `https://wa.me/62881080257324?text=...`).
  Kalau nomor ganti, cari `62881080257324` di `index.html` dan replace semua.
- **Harga TIDAK ditampilkan** (keputusan Oemar 16 Okt 2026) — semua CTA mengarah ke chat WhatsApp.
- **Link contoh undangan digital:** https://undangan-digital-bice-two.vercel.app/

## Deploy
Upload isi folder ini ke repo GitHub (mis. `kingocad8/rancang-undangan`), lalu hubungkan ke Vercel sebagai project baru. Setiap push ke `main` → auto-deploy.
