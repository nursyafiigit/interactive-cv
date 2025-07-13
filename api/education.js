// Data array
const educationData = [
    {
        id: 1,
        institution: "Universitas Amikom Yogyakarta",
        field: "Teknik Informatika",
        startYear: 2021,
        endYear: 2025,
    },
    {
        id: 2,
        institution: "SMA Negeri 1 Sleman",
        field: "IPA",
        startYear: 2018,
        endYear: 2021,
    },
];

// Handler function (ES module)
export default function handler(req, res) {
    res.status(200).json(educationData);
}
