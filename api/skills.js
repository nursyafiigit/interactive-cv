module.exports = (req, res) => {
    res.status(200).json([
        { name: "JavaScript", level: "Advanced" },
        { name: "Vue.js", level: "Intermediate" },
        { name: "Node.js", level: "Intermediate" },
    ]);
};
