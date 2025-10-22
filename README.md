# 🔐 Web Programmer Challenge — Fullstack Login & Dashboard System

Proyek ini merupakan implementasi **Fullstack Authentication System** menggunakan **React (Vite)** di sisi frontend dan **Node.js + Express + MySQL** di sisi backend.
Aplikasi memiliki fitur login dengan autentikasi JWT, dark mode toggle, serta halaman dashboard dengan tampilan bergaya Tailwind modern.

---

## 🚀 Tech Stack

### 🧠 **Frontend**

* ⚛️ React (Vite)
* 🎨 Tailwind CSS (dark/light mode support)
* 🔄 Axios (HTTP client)
* 🧭 React Router DOM

### 🧩 **Backend**

* 🟩 Node.js + Express.js
* 🗄️ MySQL (database)
* 🔐 bcrypt (hash password)
* 🪙 JSON Web Token (JWT)
* 🍪 Cookie Parser (token handling via HttpOnly cookie)
* 📦 dotenv (environment configuration)
* ⚙️ CORS (cross-origin access)

---

## 🧱 Arsitektur Aplikasi

```
test_jarvis/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js              # koneksi ke MySQL
│   │   ├── controllers/
│   │   │   └── authController.js  # register, login, logout
│   │   ├── middleware/
│   │   │   └── authMiddleware.js  # verifikasi JWT
│   │   ├── routes/
│   │   │   └── authRoutes.js      # routing auth (login/logout)
│   │   └── server.js              # inisialisasi Express
│   ├── package.json
│   └── .env                       # konfigurasi variabel lingkungan
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── login.jsx
│   │   │   └── dashboard.jsx
│   │   ├── components/
│   │   │   └── LoadingSpinner.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Cara Menjalankan Project

### 🔹 **1. Clone Repository**

```bash
git clone https://github.com/username/test_jarvis.git
cd test_jarvis
```

---

### 🔹 **2. Setup Backend**

Masuk ke folder backend dan install dependensi:

```bash
cd backend
npm install
```

Buat file `.env` di folder `backend`:

```env
PORT=5000
DB_HOST=127.0.0.1
DB_USER=root
DB_PASS=
DB_NAME=login
JWT_SECRET=secret12345
```

Jalankan backend:

```bash
npm start
```

Server akan berjalan di:

```
http://localhost:5000
```

---

### 🔹 **3. Setup Database**

Masuk ke phpMyAdmin atau MySQL CLI, lalu buat database dan tabel:

```sql
CREATE DATABASE login;

USE login;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```

Kamu bisa menambahkan user admin manual:

```sql
INSERT INTO users (email, password)
VALUES ('admin@gmail.com', '$2b$10$MUTP5y5AVHcUAtE4mVrQe.B0oU7/kqvDkeKnMNdr9C6syoBO4AIz2');
```

Password default: **123456**

---

### 🔹 **4. Setup Frontend**

Masuk ke folder frontend:

```bash
cd ../frontend
npm install
```

Jalankan:

```bash
npm run dev
```

Akses di browser:

```
http://localhost:5173/
```

---

## 🌙 Fitur Utama

| Fitur               | Deskripsi                                        |
| ------------------- | ------------------------------------------------ |
| 🔐 Login dengan JWT | Login menyimpan token JWT di cookie HttpOnly     |
| 🚪 Logout aman      | Menghapus token dari cookie                      |
| 🧭 Protected Route  | Dashboard hanya bisa diakses setelah login       |
| 🌓 Dark/Light Mode  | Tombol toggle global tersimpan di `localStorage` |
| 🔄 Loading Spinner  | Indikator loading tengah layar                   |
| 💾 Persistent State | Mode gelap & status login tersimpan otomatis     |

---

## 🧠 Penjelasan Alur Arsitektur

```
[React Frontend] --(Axios HTTP)--> [Express Backend] --(MySQL)
        |                                   |
        |                                   |
  Login Form                        Verifikasi User
        |                                   |
        |                                   |
        ----> JWT Token (HttpOnly Cookie) <---
```

1. **User login** → React mengirim `email` & `password` ke backend.
2. **Server memverifikasi** data user dari MySQL, lalu membuat JWT token.
3. **JWT disimpan di cookie** (`HttpOnly`) → lebih aman dari XSS.
4. **Halaman Dashboard** hanya bisa diakses jika token valid.
5. **Logout** menghapus cookie, otomatis redirect ke halaman login.
6. **Dark Mode** diatur di frontend dan disimpan di `localStorage`.

---

## 🧩 Tambahan

| Komponen        | File                                         | Deskripsi                      |
| --------------- | -------------------------------------------- | ------------------------------ |
| Loading Spinner | `frontend/src/components/LoadingSpinner.jsx` | Spinner animasi loading        |
| Login Page      | `frontend/src/pages/login.jsx`               | Form login + toggle password   |
| Dashboard       | `frontend/src/pages/dashboard.jsx`           | Tampilan card dengan dark mode |
| Middleware      | `backend/src/middleware/authMiddleware.js`   | Validasi JWT token             |
| Controller      | `backend/src/controllers/authController.js`  | Logika login/logout            |
| Router          | `backend/src/routes/authRoutes.js`           | Definisi route API             |

---

## 🧾 Lisensi

Proyek ini dibuat sebagai bagian dari **Web Programmer Challenge PT Javis Teknologi Albarokah**.
Bebas dimodifikasi untuk kebutuhan demo atau pengembangan pribadi.
