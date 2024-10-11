var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const berita = [
    {
        judul: "Berita 1",
        isi: "Isi Berita 1"
    },
    {
        judul: "Berita 2",
        isi: "Isi Berita 2"
    },
];
res.render('home', { title: 'Halaman Home', berita, layout: 'main' });
});

router.get("/about", (req, res) => {
    // res.send("About Us");
    // res.sendFile(__dirname + "/about.html");
    res.render('about', { title: 'About Us', layout: 'main' });
});

// route / contact
router.get("/contact", (req, res) => {
    // res.send("Contact Us");
    // res.sendFile(__dirname + "/contact.html");
    res.render('contact', { title: 'Contact Us', layout: 'main' });
});

// route / Mahasiswa
router.get("/mahasiswa", (req, res) => {
    res.json({
        "status": "succes",
        "message": "Data Mahasiswa",
        "data": [{ npm: 2226240010, nama: "bambang" },
        { npm: 2226240020, nama: "bimbang" },
        { npm: 2226240030, nama: "bembang" }]
    })
});

// route / Dosen
router.get("/dosen", (req, res) => {
    res.json({
        "status": "succes",
        "message": "Data dosen",
        "data": [{ prodi: "Sistem Informasi", nama: ["Iis", "Faris", "Dafid"] },
        { prodi: "Informatika", nama: ["Derry", "siska", "Yohannes"] },
        ]
    })
});

// route / Prodi
router.get("/prodi", (req, res) => {
    const prodi = [
        {
            namaProdi: "Sistem Informasi ",
            fakultas: "FIKR",
            singkatan: "SI"
        },
        {
            namaProdi: "Informatika",
            fakultas: "FIKR",
            singkatan: "IF"
        },
        {
            namaProdi: "Teknik Elektro",
            fakultas: "FIKR",
            singkatan: "TE"
        },
        {
            namaProdi: "Manajemen Informatika",
            fakultas: "FIKR",
            singkatan: "MI"
        },
        {
            namaProdi: "Manajemen ",
            fakultas: "FEB",
            singkatan: "MJ"
        },
        {
            namaProdi: "Akuntansi ",
            fakultas: "FEB",
            singkatan: "AK"
        },
    ];
    res.render('prodi', { title: 'Halaman Prodi', prodi, layout: 'main' });
});
module.exports = router;
