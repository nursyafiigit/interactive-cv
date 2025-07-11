// backend/data.js

const educationHistory = [
    {
        id: 1,
        period: "2023 - Sekarang",
        institution: "Universitas Amikom Yogyakarta",
        major: "S1 - Informatika",
    },
    {
        id: 2,
        period: "2020 - 2023",
        institution: "SMA Negeri 1 Karangmojo",
        major: "Jurusan IPA",
    },
];

const skills = [
    { name: "HTML5 & CSS3", level: "Mahir" },
    { name: "JavaScript", level: "Mahir" },
    { name: "Vue.js", level: "Mahir" },
    { name: "Tailwind CSS", level: "Menengah" },
    { name: "Node.js", level: "Menengah" },
    { name: "Git & GitHub", level: "Mahir" },
];

const projects = [
    {
        title: "Website Pengaduan Masyarakat",
        image: "/image/web.png",
        description: "Website CV responsif dengan Vue.js dan backend Express.",
        tech: ["Vue.js", "Express.js", "PostgreSQL"],
        link: "https://github.com/nursyafiigit/interactive-cv",
    },
    {
        title: "Aplikasi E-Commerce Billiard",
        image: "/image/bl.png",
        description:
            "Aplikasi berbasis web untuk mencatat dan memantau tugas harian.",
        tech: ["Dart", "Python", "JavaScript"],
        link: "#",
    },
];

module.exports = { educationHistory, skills, projects };
