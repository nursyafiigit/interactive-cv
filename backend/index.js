// backend/index.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load .env file jika ada
dotenv.config();

// Inisialisasi express
const app = express();

// Port dari environment Railway atau fallback ke 3000
const port = process.env.PORT || 3000;

// Middleware umum
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check root endpoint
app.get("/", (req, res) => {
    res.status(200).send("✅ Express backend is running!");
});

// Contoh endpoint tambahan
app.get("/api/hello", (req, res) => {
    res.status(200).json({ message: "Hello from backend 👋" });
});

// Jalankan server
app.listen(port, "0.0.0.0", () => {
    console.log(`🚀 Server berjalan di http://localhost:${port}`);
});
