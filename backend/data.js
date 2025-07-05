// backend/data.js

const educationHistory = [
    {
        id: 1,
        period: "2022 - Sekarang",
        institution: "Universitas Amikom Yogyakarta",
        major: "S1 - Teknik Informatika MANTAP",
    },
    {
        id: 2,
        period: "2019 - 2022",
        institution: "SMA Negeri 1 Yogyakarta",
        major: "Jurusan IPA",
    },
];

const skills = [
    { name: "HTML5 & CSS3", level: "Mahir" },
    { name: "JavaScript", level: "Mahir" },
    { name: "Vue.js", level: "Mahir" },
    { name: "Tailwind CSS", level: "Menengah" },
    { name: "Node.js", level: "Menengah" },
    { name: "Express.js", level: "Menengah" },
    { name: "PostgreSQL", level: "Dasar" },
    { name: "Git & GitHub", level: "Mahir" },
];

const projects = [
    {
        title: "Website CV Interaktif",
        image: "https://placehold.co/500x300?text=CV+Interaktif",
        description: "Website CV responsif dengan Vue.js dan backend Express.",
        tech: ["Vue.js", "Express.js", "PostgreSQL"],
        link: "https://github.com/nursyafiigit/interactive-cv",
    },
    {
        title: "Aplikasi Manajemen Tugas",
        image: "https://placehold.co/500x300?text=Task+Manager",
        description:
            "Aplikasi berbasis web untuk mencatat dan memantau tugas harian.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "#",
    },
];

module.exports = { educationHistory, skills, projects };
