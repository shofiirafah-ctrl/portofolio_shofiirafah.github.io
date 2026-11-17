console.log("File script.js berhasil dijalankan."); 

let namaLengkap = "Shofi Irafah"; 
let tagline = "Mahasiswa Pendidikan Ilmu Komputer"; 
let jurusan = "Pendidikan Ilmu Komputer";
let tahunMasuk = 2025;
let sedangMencariMagang = false;

console.log("Nama:", typeof namaLengkap); 
console.log("Tahun masuk:", typeof tahunMasuk);
console.log("Status magang:", typeof sedangMencariMagang);

let pesanSambutan = "Halo, saya " + namaLengkap + ", mahasiswa " + jurusan + ".";
console.log(pesanSambutan); 

let tahunSekarang = new Date().getFullYear(); 
let lamaKuliah = tahunSekarang - tahunMasuk;
console.log("Sudah kuliah selama " + lamaKuliah + " tahun.");

let jamSekarang = new Date().getHours(); 
let sapaan;

if (jamSekarang < 11) {
    sapaan = "Selamat pagi";
} else if (jamSekarang < 15) {
    sapaan = "Selamat siang";
} else if (jamSekarang < 18) {
    sapaan = "Selamat sore";
} else {
    sapaan = "Selamat malam";
}

console.log(sapaan);

let statusMagang = sedangMencariMagang 
    ? "Terbuka untuk magang"               
    : "Belum mencari magang";

console.log(statusMagang);

function buatSambutan(nama) { 
    return "Halo " + nama + "! Selamat datang di portofolio saya.";
}

console.log(buatSambutan("Pengunjung"));

let daftarKeahlian = [ 
    "HTML Dasar",
    "CSS Dasar",
    "JavaScript Dasar",
    "Microsoft Word dan PowerPoint",
    "Desain menggunakan Canva",
    "Komunikasi",
    "Pemecahan Masalah",
    "Kerja Sama Tim"
];

let daftarProyek = [
    "Program Toko Alat Tulis",
    "Web Kalkulator Kalkulus"
];

console.log("Jumlah keahlian: " + daftarKeahlian.length); 
console.log("Jumlah proyek: " + daftarProyek.length);

for (let i = 0; i < daftarKeahlian.length; i++) { 
    console.log("Keahlian ke-" + (i + 1) + ": " + daftarKeahlian[i]);
}
let teksHakCipta = "\u00A9 " + tahunSekarang + " " + namaLengkap + ". Semua hak cipta dilindungi.";
document.getElementById("teksHakCipta").textContent = teksHakCipta; 

let kotakPesan = document.getElementById("pesan");

kotakPesan.oninput = function () { 
    let jumlah = kotakPesan.value.length;

    document.getElementById("jumlahKarakter").textContent =
        jumlah + " karakter";
};

document.getElementById("formKontak").onsubmit = function (event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;
    let hasil = document.getElementById("pesanForm");

    if (nama === "" || email === "" || pesan === "") {
        hasil.textContent = "Semua kolom wajib diisi ya!"; 
        hasil.style.color = "red";
    } else {
        hasil.textContent = 
            "Terima kasih, " + nama + "! Pesan kamu sudah tercatat.";
        hasil.style.color = "green";
    }
};
let jam = new Date().getHours();
let sapaanWaktu;

if (jam < 11) {
    sapaanWaktu = "Selamat pagi!";
} else if (jam < 15) {
    sapaanWaktu = "Selamat siang!";
} else if (jam < 18) {
    sapaanWaktu = "Selamat sore!";
} else {
    sapaanWaktu = "Selamat malam!";
}

document.getElementById("sapaanWaktu").textContent = sapaanWaktu;

document.getElementById("jumlahKeahlian").textContent =
    "Saya memiliki " + daftarKeahlian.length + " keahlian.";
document.getElementById("jumlahProyek").textContent =
    "Saya memiliki " + daftarProyek.length + " proyek.";

document.getElementById("tombolCV").onmouseover = function () {
    this.style.backgroundColor = "#375996";
    this.style.color = "white";
};

document.getElementById("tombolCV").onmouseout = function () {
    this.style.backgroundColor = "";
    this.style.color = "";
};

document.getElementById("nama").onfocus = function () {
    this.style.backgroundColor = "#eaf0fa";
};

document.getElementById("nama").onblur = function () {
    this.style.backgroundColor = "";
};

document.getElementById("email").onfocus = function () {
    this.style.backgroundColor = "#eaf0fa";
};

document.getElementById("email").onblur = function () {
    this.style.backgroundColor = "";
};

document.getElementById("pesan").onfocus = function () {
    this.style.backgroundColor = "#eaf0fa";
};

document.getElementById("pesan").onblur = function () {
    this.style.backgroundColor = "";
};