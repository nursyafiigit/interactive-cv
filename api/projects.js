module.exports = (req, res) => {
    res.status(200).json([
        {
            id: 1,
            title: "Portfolio Website",
            description: "Website portofolio dengan Vue.js",
            tech: ["Vue.js", "TailwindCSS"],
            image: "https://source.unsplash.com/800x600/?website",
            link: "https://github.com/username/portfolio",
        },
        // ...data project lain
    ]);
};
