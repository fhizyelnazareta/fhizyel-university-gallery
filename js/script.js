/* menagkap element html */
const slide = document.getElementById("slide");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
// let h1 = document.getElementById("brand");
// let desk = document.getElementById("desk");
// let btn = document.getElementById("btn");
const h2 = document.getElementById("title1");
const p = document.getElementById("text1");
const verticalLine = document.getElementById("vertical-line");

/* array untuk isi image slide, title, dan text */
let slideImages = [
    "images/kampus.jpg",
    "images/lobby.jpg",
    "images/tangga.jpg",
    "images/ruangdosen.jpg",
    "images/lab.jpg",
    "images/perpus.jpg",
    "images/belajar.jpg",
    "images/mengajar.jpg",
    "images/kantin.jpg"
];

let slideTitle = [
    "Ruang Kelas",
    "Lobby",
    "Tangga Kampus",
    "Ruang Dosen Fhizyel University",
    "Laboratorium Teknologi Informasi",
    "Perpustakaan",
    "Kegiatan Belajar Mahasiswa",
    "Kegiatan Mengajar Dosen",
    "Kantin"
];

let slideText = [
    "Ruang Kelas untuk belajar para Mahasiswa Fhizyel University..",
    "Lobby Kampus...",
    "Fhizyel University memiliki 7 Lantai yang masing - masing terdiri 15 Ruangan.",
    "Ruang Dosen dan Staff Karyawan.",
    "Kampus ini memiliki laboratorium yang bagus dan terawat.",
    "Perpustakaan yang banyak memiliki sumber ilmu.",
    "Suasana kegiatan belajar Mahasiswa yang tenang dan penuh konsentrasi.",
    "Kampus Fhizyel University Memiliki Pengajar yang berkualitas.",
    "Suasana Kantin kampus, Bersih dan Rapih hingga membuat suasana menjadi nyaman.."
];

/* mengisi yg kosong pada slider, title dan text */
slide.src = slideImages[0];
// h1.innerHTML = "Fhizyel University";
// desk.innerHTML = " profile kampus Fhizyel University, Terakreditasi A.";
// btn.innerHTML = "Website Profile";
h2.innerHTML = slideTitle[0];
p.innerHTML = slideText[0];


/* perulangan untuk mengganti slider */
let i = 0;
backBtn.style.display = "none";
verticalLine.style.display = "none";

nextBtn.onclick = function () {
    if (i < 8) {
        slide.src = slideImages[i + 1];
        h2.innerHTML = slideTitle[i + 1];
        p.innerHTML = slideText[i + 1];
        i++;
        backBtn.style.display = "inline";
        verticalLine.style.display = "inline";
    }
    if (i == 8) {
        nextBtn.style.display = "none";
        verticalLine.style.display = "none";
    }
}

backBtn.onclick = function () {
    if (i > 0) {
        slide.src = slideImages[i - 1];
        h2.innerHTML = slideTitle[i - 1];
        p.innerHTML = slideText[i - 1];
        i--;
        nextBtn.style.display = "inline";
        verticalLine.style.display = "inline";
    }
    if (i == 0) {
        backBtn.style.display = "none";
        verticalLine.style.display = "none";
    }
}

/* Penerapan Framework VueJS */
/* Header Html = Title */
new Vue({
    el: '#title',
    data: {
        title: 'Fhizyel University Gallery'
    }
})
/* Body Content */
new Vue({
    el: '#content',
    data: {
        brand: 'Fhizyel University',
        brandTitle: 'Galeri Kampus',
        desk: 'Halaman galeri profile kampus Fhizyel University, Terakreditasi A.',
        btn: '<b>Website Profile</b>'
    }
})
/* Footer */
new Vue({
    el: '#footer',
    data: {
        footer: 'Copyright &copy; Fhizyel Nazareta 2020.'
    }
})