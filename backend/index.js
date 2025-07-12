// ==============================
// IMPORT DEPENDENCIES
// ==============================
const express = require("express");
const cors = require("cors");
const path = require("path");

// ==============================
// INITIALIZATION
// ==============================
const app = express();
const PORT = process.env.PORT || 3000;

// ==============================
// MIDDLEWARE
// ==============================
app.use(cors());
app.use(express.json()); // Jika ingin menerima JSON dari POST/PUT
app.use(express.urlencoded({ extended: true })); // Untuk menerima form data

// ==============================
// ROUTES
// ==============================
const cvRoutes = require("./routes/cv");
app.use("/api/cv", cvRoutes);

// ==============================
// ROOT ENDPOINT
// ==============================
app.get("/", (req, res) => {
    res.status(200).send("✅ Backend Interactive CV is Running");
});

// ==============================
// START SERVER
// ==============================
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
