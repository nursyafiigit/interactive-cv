const express = require("express");
const router = express.Router();
const cvData = require("../data/data.json"); // pastikan path ke file JSON benar

router.get("/", (req, res) => {
    res.json(cvData);
});

module.exports = router; // ⬅️ PENTING! WAJIB!
