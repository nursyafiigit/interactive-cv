export default function handler(req, res) {
    const skills = [
        { name: "Vue.js", level: "Advanced" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "Node.js", level: "Intermediate" },
    ];
    res.status(200).json(skills);
}
