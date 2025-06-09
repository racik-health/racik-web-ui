# Racik Frontend (UI)

<!-- <div align="center">
  <img src="./public/assets/icons/racik-icon-32x32.webp" alt="Logo Racik" width="200"/>
  <p><em>Temukan Jamu Tradisional dengan Cerdas</em></p>
</div> -->

## 📝 Deskripsi

**Racik** adalah sebuah platform web inovatif yang membantu pengguna menemukan rekomendasi jamu tradisional Indonesia yang sesuai dengan keluhan kesehatan mereka. Dengan memanfaatkan kecerdasan buatan (AI), Racik memberikan analisis gejala dan menyajikan rekomendasi jamu herbal alami yang dipersonalisasi.

Website ini dirancang dengan antarmuka yang bersih, modern, dan ramah pengguna, dibangun menggunakan **ReactJS** dan **TailwindCSS**. Fokus utama adalah memberikan pengalaman pengguna yang intuitif, cepat, dan informatif dalam perjalanan menemukan solusi kesehatan alami.

## ⚙️ Cara Menjalankan Proyek

Untuk menjalankan proyek frontend Racik di lingkungan pengembangan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone repository ini** (Pastikan Anda berada di direktori yang diinginkan):

    ```bash
    git clone https://github.com/racik-health/racik-web-ui.git
    cd racik-web-ui
    ```

2.  **Install semua dependencies** yang dibutuhkan:

    ```bash
    npm install
    # atau jika Anda menggunakan yarn:
    # yarn install
    ```

3.  **Setup Environment Variables**:
    Buat file baru bernama `.env` di root direktori proyek. Salin konten dari file `.env.example` ke dalam file `.env` tersebut, lalu sesuaikan nilainya.

    File `.env.example` Anda mungkin terlihat seperti ini:

    ```env
    VITE_API_BASE_URL=
    VITE_FRONTEND_BASE_URL=
    # Tambahkan variabel lain di bawah ini jika diperlukan
    ```

    Penjelasan variabel:

    - `VITE_API_BASE_URL`: Ini adalah URL dasar (root URL) dari API backend Laravel Anda. Frontend akan mengirim permintaan ke URL ini untuk semua interaksi data.
    - `VITE_FRONTEND_BASE_URL`: Ini adalah URL dasar dari aplikasi frontend Racik Anda sendiri.

4.  **Jalankan development server**:

    ```bash
    npm run dev
    # atau jika Anda menggunakan yarn:
    # yarn dev
    ```

5.  **Akses aplikasi di browser**:
    Buka browser Anda dan navigasi ke `http://localhost:5173` (atau port lain yang ditampilkan di terminal Anda jika 5173 sudah terpakai).

    Selamat menikmati Racik! 🌿🍵

## 🤝 Berkontribusi

Jika Anda ingin berkontribusi pada pengembangan Racik, silakan buat _pull request_ atau buka _issue_. Kami sangat menghargai setiap kontribusi!
