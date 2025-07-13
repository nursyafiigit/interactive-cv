export default function handler(req, res) {
    const projects = [
        {
            id: 1,
            title: "Website Portofolio",
            description: "Website pribadi dengan Vue 3 dan Tailwind.",
            image: "",
            tech: ["Vue", "Tailwind", "Vercel"],
            link: "https://contoh.vercel.app",
        },
    ];
    res.status(200).json(projects);
}
