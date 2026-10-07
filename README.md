# SIMTOPIA — Permainan Digital Simpulan Bahasa

SIMTOPIA ialah aplikasi web statik bertemakan bandar haiwan untuk PdP Bahasa Melayu. Ia direka sebagai permainan gamifikasi empat dunia yang menyokong:

- SP 2.2.1: Membaca dan memahami pelbagai teks untuk mendapatkan kosa kata — simpulan bahasa.
- SP 4.1.1: Bercerita dan menuturkan dialog yang mengandungi gaya bahasa yang indah — simpulan bahasa.

## Kandungan dunia

1. **Rimba Petunjuk** — aras rendah: kenal pasti simpulan bahasa berdasarkan gambar.
2. **Lembah Jejak** — aras sederhana mudah: isi tempat kosong menggunakan simpulan bahasa berdasarkan konteks.
3. **Kota Simpulan** — aras sederhana: baca perenggan dan tentukan simpulan bahasa yang sesuai.
4. **Metrokata** — aras tinggi: baca dialog, dengar contoh, rakam bacaan/tuturan dan bina cerita menggunakan simpulan bahasa.

Simpulan bahasa yang digunakan:

- kaki bangku
- mulut tempayan
- anak emas
- otak udang
- buah tangan

## Ciri teknikal

- HTML + CSS + JavaScript sahaja.
- Tiada backend diperlukan.
- Kemajuan, mata dan lencana disimpan menggunakan `localStorage`.
- Text-to-Speech menggunakan Web Speech API.
- Rakaman suara menggunakan `MediaRecorder` dan mikrofon pengguna.
- Responsif untuk komputer, tablet dan telefon.
- Boleh dihoskan terus menggunakan GitHub Pages.
- Tiada gambar atau watak berlesen digunakan; visual menggunakan ilustrasi emoji/CSS supaya projek mudah diubah suai.

## Cara jalankan secara tempatan

1. Buka `index.html` terus dalam pelayar, atau gunakan Live Server dalam VS Code.
2. Untuk fungsi mikrofon, lebih baik jalankan melalui `localhost` atau HTTPS.

## Cara naikkan ke GitHub Pages

1. Cipta repository baharu di GitHub, contohnya `simtopia-game`.
2. Muat naik `index.html`, `style.css`, `app.js` dan `README.md` ke repository tersebut.
3. Pergi ke **Settings → Pages**.
4. Pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`.
6. Simpan dan tunggu GitHub Pages menerbitkan laman.
7. Buka URL Pages yang diberikan oleh GitHub.

## Struktur fail

```text
simtopia-game/
├── index.html
├── style.css
├── app.js
└── README.md
```

## Nota pengubahsuaian

Semua data soalan utama berada di bahagian atas `app.js` dalam pemboleh ubah `world1`, `world2`, `world3` dan `dialogues`. Ini memudahkan guru menukar nama watak, situasi, simpulan bahasa dan arahan tanpa mengubah struktur aplikasi.
