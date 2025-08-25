# Pemilu Himpunan PWK UTY 2025

Aplikasi web sederhana untuk voting pemilu himpunan PWK UTY.

## Cara Menjalankan Lokal

1. Pastikan Node.js sudah terinstall.
2. Clone repo ini.
3. Install dependency Express:
   ```
   npm install express
   ```
4. Jalankan server:
   ```
   node server.js
   ```
5. Buka browser ke `http://localhost:3000`

## Cara Membuka untuk Publik (Hosting)

Agar bisa diakses semua orang:
1. Deploy ke [Railway](https://railway.app), [Render](https://render.com), atau [Heroku](https://heroku.com).
2. Pilih "Deploy from GitHub" lalu hubungkan repo ini.
3. Tunggu proses deploy selesai, akan muncul URL publik.
4. Share URL tersebut ke pemilih.

**Contoh URL Publik:**  
`https://nama-project.up.railway.app`

## Fitur

- Voting berdasarkan angkatan, npm, dan pilihan pasangan calon.
- Validasi: NPM hanya bisa voting sekali.
- Data suara disimpan di `votes.json`.
- Rekap suara via endpoint `/rekap`.

## Struktur File

- `public/index.html`: Halaman voting
- `server.js`: Backend API
- `paslon.json`: Daftar pasangan calon
- `votes.json`: Penyimpanan suara

## Pengembangan Lanjutan

- Ganti penyimpanan ke database (sqlite, mysql, dll)
- Tambah autentikasi admin
- Validasi NPM lebih ketat