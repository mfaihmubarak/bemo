function bukaNotif(id) {
  let isi = "";

  if (id === 1) {
    isi = "Bus TMB akan tiba di shelter terdekat dalam 5 menit.";
  } 
  else if (id === 2) {
    isi = "Pembelian tiket Anda berhasil. Silakan cek di menu Tiket.";
  } 
  else if (id === 3) {
    isi = "Laporan Anda sedang diproses oleh petugas.";
  }

  document.getElementById("detailNotif").innerHTML = `
    <div class="card" style="padding:16px;">
      ${isi}
    </div>
  `;
}
