# 🚀 Proyek Percobaan Laravel + Inertia.js + React

Proyek ini adalah lingkungan eksperimental untuk mempelajari dan mengimplementasikan arsitektur *Monolith* Modern menggunakan **Laravel** di sisi *server* dan **Inertia.js** dengan **React** di sisi *client*.

## 💡 Konsep Utama

Inertia.js memungkinkan kita membangun Aplikasi Satu Halaman (SPA) tanpa perlu membangun API secara eksplisit. Ia bertindak sebagai "lem" yang menghubungkan Laravel *routing* dan *controller* langsung ke komponen React, menggantikan peran *view* tradisional Blade.

| Fitur | Laravel (Server) | Inertia.js | React (Client) |
| :--- | :--- | :--- | :--- |
| **Perutean/Routing** | `routes/web.php` | Mengirimkan respons JSON Inertia | **Tidak ada *Client-Side Routing*** |
| **Data** | Diambil di Controller, dilewatkan sebagai **props** | Protokol permintaan Inertia | Diterima sebagai `props` di komponen |
| **Templating** | `resources/views/app.blade.php` (Root Template) | Menentukan komponen mana yang dimuat | `resources/js/Pages/*.jsx` (Komponen Halaman) |

## 🛠️ Persiapan dan Instalasi

Ikuti langkah-langkah berikut untuk menjalankan proyek ini:

### 1. Persiapan Laravel

Pastikan Composer dan PHP sudah terinstal.

```bash
# 1. Kloning repositori atau buat proyek Laravel baru
# 2. Instal dependensi PHP
composer install

# 3. Konfigurasi .env (Database, dll.)
cp .env.example .env

# 4. Buat kunci aplikasi
php artisan key:generate

# 5. Jalankan migrasi database
php artisan migrate
## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
