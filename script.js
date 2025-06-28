// ====== Data Barang ======
let barangList = JSON.parse(localStorage.getItem("barangList")) || [];

function simpanBarang() {
  localStorage.setItem("barangList", JSON.stringify(barangList));
}

function tambahBarang() {
  const nama = document.getElementById("namaBarang").value;
  const beli = parseInt(document.getElementById("hargaBeli").value);
  const jual = parseInt(document.getElementById("hargaJual").value);
  const jumlah = parseInt(document.getElementById("jumlah").value);

  if (!nama || isNaN(beli) || isNaN(jual) || isNaN(jumlah)) {
    alert("Isi semua data dengan benar!");
    return;
  }

  const keuntungan = (jual - beli) * jumlah;

  barangList.push({ nama, beli, jual, jumlah, keuntungan });
  simpanBarang();
  tampilkanBarang();

  document.getElementById("namaBarang").value = "";
  document.getElementById("hargaBeli").value = "";
  document.getElementById("hargaJual").value = "";
  document.getElementById("jumlah").value = "";
}

function tampilkanBarang() {
  const tabel = document.getElementById("tabelBarang");
  tabel.innerHTML = "";

  let totalKeuntungan = 0;

  barangList.forEach((item, index) => {
    totalKeuntungan += item.keuntungan;

    const row = `
            <tr>
                <td>${item.nama}</td>
                <td>Rp ${item.beli}</td>
                <td>Rp ${item.jual}</td>
                <td>${item.jumlah}</td>
                <td>Rp ${item.keuntungan}</td>
                <td><button onclick="hapusBarang(${index})">Hapus</button></td>
            </tr>
        `;
    tabel.innerHTML += row;
  });

  document.getElementById("totalKeuntungan").innerText = totalKeuntungan;
}

function hapusBarang(index) {
  if (confirm("Yakin ingin menghapus?")) {
    barangList.splice(index, 1);
    simpanBarang();
    tampilkanBarang();
  }
}

// ====== Data Hutang ======
let hutangList = JSON.parse(localStorage.getItem("hutangList")) || [];

function simpanHutang() {
  localStorage.setItem("hutangList", JSON.stringify(hutangList));
}

function tambahHutang() {
  const nama = document.getElementById("namaPelanggan").value;
  const jumlah = parseInt(document.getElementById("jumlahHutang").value);
  const keterangan = document.getElementById("keterangan").value;

  if (!nama || isNaN(jumlah) || !keterangan) {
    alert("Isi semua data dengan benar!");
    return;
  }

  hutangList.push({ nama, jumlah, keterangan });
  simpanHutang();
  tampilkanHutang();

  document.getElementById("namaPelanggan").value = "";
  document.getElementById("jumlahHutang").value = "";
  document.getElementById("keterangan").value = "";
}

function tampilkanHutang() {
  const tabel = document.getElementById("tabelHutang");
  tabel.innerHTML = "";

  let totalHutang = 0;

  hutangList.forEach((item, index) => {
    totalHutang += item.jumlah;

    const row = `
            <tr>
                <td>${item.nama}</td>
                <td>Rp ${item.jumlah}</td>
                <td>${item.keterangan}</td>
                <td><button onclick="hapusHutang(${index})">Hapus</button></td>
            </tr>
        `;
    tabel.innerHTML += row;
  });

  document.getElementById("totalHutang").innerText = totalHutang;
}

function hapusHutang(index) {
  if (confirm("Yakin ingin menghapus hutang ini?")) {
    hutangList.splice(index, 1);
    simpanHutang();
    tampilkanHutang();
  }
}

// ====== Data Pengeluaran ======
let pengeluaranList = JSON.parse(localStorage.getItem("pengeluaranList")) || [];

function simpanPengeluaran() {
  localStorage.setItem("pengeluaranList", JSON.stringify(pengeluaranList));
}

function tambahPengeluaran() {
  const nama = document.getElementById("namaPengeluaran").value;
  const jumlah = parseInt(document.getElementById("jumlahPengeluaran").value);

  if (!nama || isNaN(jumlah)) {
    alert("Isi semua data dengan benar!");
    return;
  }

  pengeluaranList.push({ nama, jumlah });
  simpanPengeluaran();
  tampilkanPengeluaran();

  document.getElementById("namaPengeluaran").value = "";
  document.getElementById("jumlahPengeluaran").value = "";
}

function tampilkanPengeluaran() {
  const tabel = document.getElementById("tabelPengeluaran");
  tabel.innerHTML = "";

  let total = 0;

  pengeluaranList.forEach((item, index) => {
    total += item.jumlah;

    const row = `
            <tr>
                <td>${item.nama}</td>
                <td>Rp ${item.jumlah}</td>
                <td><button onclick="hapusPengeluaran(${index})">Hapus</button></td>
            </tr>
        `;
    tabel.innerHTML += row;
  });

  document.getElementById("totalPengeluaran").innerText = total;
}

function hapusPengeluaran(index) {
  if (confirm("Yakin ingin menghapus pengeluaran ini?")) {
    pengeluaranList.splice(index, 1);
    simpanPengeluaran();
    tampilkanPengeluaran();
  }
}

// ====== Load Data Saat Buka ======
tampilkanBarang();
tampilkanHutang();
tampilkanPengeluaran();
let pembelianList = JSON.parse(localStorage.getItem("pembelianList")) || [];

function simpanPembelian() {
  localStorage.setItem("pembelianList", JSON.stringify(pembelianList));
}

function tambahPembelian() {
  const nama = document.getElementById("namaPembelian").value;
  const harga = parseInt(document.getElementById("hargaPembelian").value);
  const jumlah = parseInt(document.getElementById("jumlahPembelian").value);

  if (!nama || isNaN(harga) || isNaN(jumlah)) {
    alert("Isi semua data pembelian dengan benar!");
    return;
  }

  const subtotal = harga * jumlah;

  pembelianList.push({ nama, harga, jumlah, subtotal });
  simpanPembelian();
  tampilkanPembelian();

  document.getElementById("namaPembelian").value = "";
  document.getElementById("hargaPembelian").value = "";
  document.getElementById("jumlahPembelian").value = "";
}

function tampilkanPembelian() {
  const tabel = document.getElementById("tabelPembelian");
  tabel.innerHTML = "";

  let totalPembelian = 0;

  pembelianList.forEach((item, index) => {
    totalPembelian += item.subtotal;

    const row = `
            <tr>
                <td>${item.nama}</td>
                <td>Rp ${item.harga}</td>
                <td>${item.jumlah}</td>
                <td>Rp ${item.subtotal}</td>
                <td><button onclick="hapusPembelian(${index})">Hapus</button></td>
            </tr>
        `;
    tabel.innerHTML += row;
  });

  document.getElementById("totalPembelian").innerText = totalPembelian;
}

function hapusPembelian(index) {
  if (confirm("Yakin ingin menghapus?")) {
    pembelianList.splice(index, 1);
    simpanPembelian();
    tampilkanPembelian();
  }
}

// Load data saat halaman dibuka
tampilkanPembelian();

let bungkusList = JSON.parse(localStorage.getItem("bungkusList")) || [];

function simpanBungkus() {
  localStorage.setItem("bungkusList", JSON.stringify(bungkusList));
}

function tambahBungkus() {
  const nama = document.getElementById("namaBungkus").value;
  const hargaKulakan = parseInt(
    document.getElementById("hargaKulakanBungkus").value
  );
  const jumlahKulakan = parseInt(
    document.getElementById("jumlahKulakanBungkus").value
  );
  const totalBungkus = parseInt(document.getElementById("totalBungkus").value);

  if (
    !nama ||
    isNaN(hargaKulakan) ||
    isNaN(jumlahKulakan) ||
    isNaN(totalBungkus) ||
    totalBungkus <= 0
  ) {
    alert("Isi semua data dengan benar!");
    return;
  }

  const totalKulakan = hargaKulakan * jumlahKulakan;
  const modalPerBungkus = Math.ceil(totalKulakan / totalBungkus); // dibulatkan ke atas biar aman

  bungkusList.push({
    nama,
    hargaKulakan,
    jumlahKulakan,
    totalBungkus,
    modalPerBungkus,
  });
  simpanBungkus();
  tampilkanBungkus();

  document.getElementById("namaBungkus").value = "";
  document.getElementById("hargaKulakanBungkus").value = "";
  document.getElementById("jumlahKulakanBungkus").value = "";
  document.getElementById("totalBungkus").value = "";
}

function tampilkanBungkus() {
  const tabel = document.getElementById("tabelBungkus");
  tabel.innerHTML = "";

  bungkusList.forEach((item, index) => {
    const row = `
            <tr>
                <td>${item.nama}</td>
                <td>Rp ${item.hargaKulakan}</td>
                <td>${item.jumlahKulakan}</td>
                <td>${item.totalBungkus}</td>
                <td>Rp ${item.modalPerBungkus}</td>
                <td><button onclick="hapusBungkus(${index})">Hapus</button></td>
            </tr>
        `;
    tabel.innerHTML += row;
  });
}

function hapusBungkus(index) {
  if (confirm("Yakin ingin menghapus?")) {
    bungkusList.splice(index, 1);
    simpanBungkus();
    tampilkanBungkus();
  }
}

// Load data saat halaman dibuka
tampilkanBungkus();
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// Splash Screen Manual
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  splash.style.opacity = 1;
  setTimeout(() => {
    splash.style.transition = "opacity 0.5s";
    splash.style.opacity = 0;
    setTimeout(() => {
      splash.style.display = "none";
    }, 500);
  }, 1500); // Tampil selama 1.5 detik
});
