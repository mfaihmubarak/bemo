function editProfil() {
  tampilkan("Fitur edit profil masih dalam tahap demo.");
}

function riwayat() {
  tampilkan("Belum ada riwayat perjalanan.");
}

function logout() {
  tampilkan("Anda telah logout (demo).");
}

function tampilkan(teks) {
  document.getElementById("hasilProfil").innerHTML = `
    <div class="card" style="padding:16px;">
      ${teks}
    </div>
  `;
}
