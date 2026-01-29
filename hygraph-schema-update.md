# Update Schema Hygraph (Fasilitas, Galeri, FAQ, Testimoni)

Untuk melengkapi landing page, silakan buat model-model baru berikut di Hygraph. Saya telah memisahkan mereka dari `PageHome` agar lebih mudah dikelola (misalnya: Anda bisa menambah fasilitas tanpa mengedit Page Home).

## 1. Model: Facility (Fasilitas)
Buat model baru bernama `Facility`.

| Field Name | Type | Options |
|------------|------|---------|
| **title** | Single Line Text | Required |
| **description** | Multi Line Text | Required |
| **icon** | Single Line Text | Required. Gunakan salah satu kode berikut: `wifi`, `ac`, `book`, `users`, `video`, `coffee` |
| **order** | Integer | Optional (Untuk mengurutkan tampilan) |

## 2. Model: GalleryImage (Galeri)
Buat model baru bernama `GalleryImage`.

| Field Name | Type | Options |
|------------|------|---------|
| **title** | Single Line Text | Required |
| **image** | Asset | Required (Gambar) |
| **order** | Integer | Optional |

## 3. Model: FAQ (Pertanyaan Umum)
Buat model baru bernama `FAQ`.

| Field Name | Type | Options |
|------------|------|---------|
| **question** | Single Line Text | Required |
| **answer** | Multi Line Text | Required |
| **order** | Integer | Optional |

## 4. Model: Testimonial (Testimoni)
Pastikan model `Testimonial` memiliki field berikut:

| Field Name | Type | Options |
|------------|------|---------|
| **name** | Single Line Text | Required |
| **role** | Single Line Text | Required (Contoh: "Alumni UI 2023" atau "Ibu Rumah Tangga") |
| **quote** | Multi Line Text | Required |
| **photo** | Asset | Optional (Foto profil) |

---

# Data Dummy Lengkap (Pricing & Blog)

Berikut adalah data dummy tambahan untuk **Pricing (Harga)** dan **Blog** agar website Anda terlihat penuh.

### 1. Pricing Level (Jenjang)
Buat entry di model `PricingLevel` terlebih dahulu:
1. **Name**: SD
   - **Slug**: `sd`
2. **Name**: SMP
   - **Slug**: `smp`
3. **Name**: SMA
   - **Slug**: `sma`

### 2. Pricing Plan (Paket Harga)
Buat entry di model `PricingPlan` dan hubungkan dengan Level di atas:

**Paket SD:**
- **Name**: Reguler SD
- **Price**: Rp 300.000
- **Period**: /bulan
- **Features**: `2x Seminggu`, `Matematika & IPA`, `Maks 10 Siswa`, `Modul Lengkap`
- **Is Popular**: False
- **Level**: Hubungkan ke `SD`

**Paket SMP:**
- **Name**: Intensif SMP
- **Price**: Rp 450.000
- **Period**: /bulan
- **Features**: `3x Seminggu`, `Semua Mata Pelajaran`, `Maks 8 Siswa`, `Try Out Bulanan`
- **Is Popular**: True
- **Level**: Hubungkan ke `SMP`

**Paket SMA:**
- **Name**: Fokus UTBK
- **Price**: Rp 600.000
- **Period**: /bulan
- **Features**: `4x Seminggu`, `Fokus Materi Ujian`, `Maks 5 Siswa`, `Konsultasi Jurusan`
- **Is Popular**: True
- **Level**: Hubungkan ke `SMA`

### 3. Blog Category & Author
**Category:**
1. **Name**: Tips Belajar, **Slug**: `tips-belajar`
2. **Name**: Info Pendidikan, **Slug**: `info-pendidikan`

**Author:**
1. **Name**: Admin LWM, **Bio**: Pengajar senior di LWM.

### 4. Blog Post (Artikel)
**Post 1:**
- **Title**: Cara Efektif Belajar Matematika
- **Slug**: `cara-efektif-belajar-matematika`
- **Excerpt**: Matematika sering dianggap sulit, padahal dengan metode yang tepat, belajar matematika bisa sangat menyenangkan.
- **Content**: (Isi dengan teks dummy atau lorem ipsum)
- **Cover Image**: (Upload gambar)
- **Category**: `Tips Belajar`
- **Author**: `Admin LWM`

**Post 2:**
- **Title**: Pentingnya Persiapan UTBK Sejak Dini
- **Slug**: `pentingnya-persiapan-utbk`
- **Excerpt**: Jangan tunda persiapan masuk PTN impianmu. Mulai cicil materi dari sekarang!
- **Content**: (Isi dengan teks dummy)
- **Cover Image**: (Upload gambar)
- **Category**: `Info Pendidikan`
- **Author**: `Admin LWM`

---

# Data Dummy Fasilitas & Lainnya

### Data Facility
1. **Title**: Free Wi-Fi
   - **Desc**: Koneksi internet super cepat di seluruh area.
   - **Icon**: `wifi`
   - **Order**: 1

2. **Title**: Ruang Ber-AC
   - **Desc**: Ruang kelas nyaman dengan pendingin ruangan.
   - **Icon**: `ac`
   - **Order**: 2

3. **Title**: Modul Lengkap
   - **Desc**: Bahan ajar kurikulum terbaru.
   - **Icon**: `book`
   - **Order**: 3

4. **Title**: Diskusi Kelompok
   - **Desc**: Area khusus untuk belajar kelompok.
   - **Icon**: `users`
   - **Order**: 4

### Data GalleryImage
1. **Title**: Ruang Kelas Utama
   - **Image**: (Upload foto kelas)
   - **Order**: 1

2. **Title**: Lab Komputer Modern
   - **Image**: (Upload foto lab)
   - **Order**: 2

3. **Title**: Area Santai Siswa
   - **Image**: (Upload foto lounge)
   - **Order**: 3

### Data FAQ
1. **Question**: Apakah ada kelas percobaan gratis?
   - **Answer**: Ya, kami menyediakan kelas percobaan gratis (Free Trial) untuk semua jenjang.
   - **Order**: 1

2. **Question**: Berapa jumlah maksimal siswa per kelas?
   - **Answer**: Maksimal 10 siswa untuk kelas reguler agar belajar lebih efektif dan guru bisa fokus ke setiap siswa.
   - **Order**: 2

3. **Question**: Apakah jadwal bisa request?
   - **Answer**: Untuk kelas privat bisa request jadwal, sedangkan kelas reguler mengikuti jadwal yang sudah ditentukan.
   - **Order**: 3
