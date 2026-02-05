function pilihBusSekolah(sekolah) {
  let info = "";

  if (sekolah === "sman3") {
    info = `
      <strong>Bus Sekolah SMAN 3 Bandung</strong><br><br>
      Status: Dalam perjalanan<br>
      Estimasi tiba: 10 menit<br><br>
      <button onclick="bukaMaps('SMAN 3 Bandung')">Lihat di Maps</button>
    `;
  }

  else if (sekolah === "smpn1") {
    info = `
      <strong>Bus Sekolah SMPN 1 Bandung</strong><br><br>
      Status: Menunggu penumpang<br>
      Estimasi tiba: 5 menit<br><br>
      <button onclick="bukaMaps('SMPN 1 Bandung')">Lihat di Maps</button>
    `;
  }

  else if (sekolah === "sman5") {
    info = `
      <strong>Bus Sekolah SMAN 5 Bandung</strong><br><br>
      Status: Dalam perjalanan<br>
      Estimasi tiba: 12 menit<br><br>
      <button onclick="bukaMaps('SMAN 5 Bandung')">Lihat di Maps</button>
    `;
  }

  document.getElementById("hasilBusSekolah").innerHTML = `
    <div class="card" style="padding:16px;">
      ${info}
    </div>
  `;
}

function bukaMaps(lokasi) {
  window.open(
    `https://www.google.com/maps/search/${encodeURIComponent(lokasi)}`,
    "_blank"
  );
}
