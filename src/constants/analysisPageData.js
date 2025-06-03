const diseasesToAnalyze = [
	{ id: 1, label: "Masuk angin" },
	{ id: 2, label: "Sakit kepala" },
	{ id: 3, label: "Batuk" },
	{ id: 4, label: "Flu" },
	{ id: 5, label: "Sakit perut" },
	{ id: 6, label: "Nyeri otot" },
	{ id: 7, label: "Demam" },
	{ id: 8, label: "Asam urat" },
	{ id: 9, label: "Kolesterol tinggi" },
	{ id: 10, label: "Sembelit" },
	{ id: 11, label: "Pegal Linu" },
	{ id: 12, label: "Sakit tenggorokan" },
];

const severityLevels = [
	{ id: 1, label: "Ringan", value: "mild" },
	{ id: 2, label: "Sedang", value: "moderate" },
	{ id: 3, label: "Berat", value: "severe" },
];

const symptomDuration = [
	{ id: 1, label: "Kurang dari 1 hari", value: "kurang_dari_1_hari" },
	{ id: 2, label: "1-3 hari", value: "1-3_hari" },
	{ id: 3, label: "4-7 hari", value: "4-7_hari" },
	{ id: 4, label: "Lebih dari 7 hari", value: "lebih_dari_7_hari" },
];

export { diseasesToAnalyze, severityLevels, symptomDuration };
