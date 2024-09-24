const express = require("express") // impor modul express\
const app = express() // inisialisasi express
const port = 3000 //port

// route /
app.get("/", (req,res) => {
    // res.send("Hellooo");
    res.sendFile(__dirname + "/home.html");
});

// route / about
app.get("/about", (req,res) => {
    // res.send("About Us");
    res.sendFile(__dirname + "/about.html");
});

// route / contact
app.get("/contact", (req,res) => {
    // res.send("Contact Us");
    res.sendFile(__dirname + "/contact.html");
});

// route / Mahasiswa
app.get("/mahasiswa", (req,res) => {
    res.json({
        "status"    : "succes",
        "message"   : "Data Mahasiswa",
        "data"      : [{npm: 2226240010, nama: "bambang"},
                      {npm: 2226240020, nama: "bimbang"},
                      {npm: 2226240030, nama: "bembang"}]
    })
});

// route / Dosen
app.get("/dosen", (req,res) => {
    res.json({
        "status"    : "succes",
        "message"   : "Data dosen",
        "data"      : [{prodi: "Sistem Informasi", nama: ["Iis", "Faris", "Dafid"] },
                        {prodi: "Informatika", nama: ["Derry", "siska", "Yohannes"] },
                    ]
    })
});

// handel route yang tidak terdaftar
app.use("/",(req, res) => {
    res.send("<h1>404 Not Found</h1>");
});

// jalankan server
app.listen(port, () => {
    console.log(`Server dapat diakses di http://localhost:${port}`);
});