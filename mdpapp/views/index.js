const express = require("express") // impor modul express\
const app = express() // inisialisasi express
const port = 3000 //port
const expressLayout = require("express-ejs-layouts"); // impor modul express-ejs-layouts

app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

app.use(expressLayout);
app.use(express.static('public'));

// route /
app.get("/", (req, res) => {
    // res.send("Hellooo");
    // res.sendFile(__dirname + "/home.html");

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

// route / about
app.get("/about", (req, res) => {
    // res.send("About Us");
    // res.sendFile(__dirname + "/about.html");
    res.render('about', { title: 'About Us', layout: 'main' });
});

// route / contact
app.get("/contact", (req, res) => {
    // res.send("Contact Us");
    // res.sendFile(__dirname + "/contact.html");
    res.render('contact', { title: 'Contact Us', layout: 'main' });
});

// route / Mahasiswa
app.get("/mahasiswa", (req, res) => {
    res.json({
        "status": "succes",
        "message": "Data Mahasiswa",
        "data": [{ npm: 2226240010, nama: "bambang" },
        { npm: 2226240020, nama: "bimbang" },
        { npm: 2226240030, nama: "bembang" }]
    })
});

// route / Dosen
app.get("/dosen", (req, res) => {
    res.json({
        "status": "succes",
        "message": "Data dosen",
        "data": [{ prodi: "Sistem Informasi", nama: ["Iis", "Faris", "Dafid"] },
        { prodi: "Informatika", nama: ["Derry", "siska", "Yohannes"] },
        ]
    })
});

// route / Prodi
app.get("/prodi", (req, res) => {
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

// handel route yang tidak terdaftar
app.use("/", (req, res) => {
    res.send("<h1>404 Not Found</h1>");
});

// jalankan server
app.listen(port, () => {
    console.log(`Server dapat diakses di http://localhost:${port}`);
});