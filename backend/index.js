import express from "express";
import cors from "cors";
import education from "./data/education.js";
import projects from "./data/projects.js";
import skills from "./data/skills.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Endpoint API untuk mendapatkan data pendidikan
app.get("/api/education", (req, res) => {
    res.json(education);
});

// Endpoint API untuk mendapatkan data projects
app.get("/api/projects", (req, res) => {
    res.json(projects);
});

// Endpoint API untuk mendapatkan data skills
app.get("/api/skills", (req, res) => {
    res.json(skills);
});

// Tes endpoint (opsional)
app.get("/", (req, res) => {
    res.send("Simple Backend API for Portfolio is running.");
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
