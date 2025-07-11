// backend/index.js

const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Jika Anda menggunakan .env

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contoh route
app.get("/", (req, res) => {
    res.send("✅ Express backend is running!");
});

// Tambahkan route lain di sini
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from backend 👋" });
});

// Jalankan server
app.listen(port, () => {
    console.log(`🚀 Server berjalan di port ${port}`);
});
