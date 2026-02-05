function bukaBerita(id) {
  let konten = "";

  if (id === 1) {
    konten = `
      <strong>TMB Tambah Koridor Baru</strong><br><br>
      Pemerintah Kota Bandung menambah koridor baru untuk meningkatkan konektivitas...
    `;
  } 
  else if (id === 2) {
    konten = `
      <strong>Penambahan Stasiun BOSEH</strong><br><br>
      Kini tersedia 5 stasiun BOSEH baru di area Dago dan Cicendo...
    `;
  } 
  else if (id === 3) {
    konten = `
      <strong>Bandros Tambah Rute Wisata</strong><br><br>
      Bandros kini melayani jalur wisata heritage dan kota tua...
    `;
  }

  document.getElementById("detailBerita").innerHTML = `
    <div class="card" style="padding:16px;">
      ${konten}
    </div>
  `;
}
