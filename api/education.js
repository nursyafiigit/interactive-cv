export default function handler(req, res) {
    const education = [
        {
            id: 1,
            institution: "Universitas Indonesia",
            major: "Teknik Informatika",
            period: "2019 - 2023",
        },
        {
            id: 2,
            institution: "SMA Negeri 1 Jakarta",
            major: "IPA",
            period: "2016 - 2019",
        },
    ];
    res.status(200).json(education);
}
