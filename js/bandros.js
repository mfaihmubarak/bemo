function pilihBandros(tipe) {
  let info = "";

  if (tipe === "kota") {
    info = `
      <strong>Rute Kota Tua</strong><br><br>
      Alun-alun → Braga → Asia Afrika → Gedung Merdeka<br>
      Estimasi: 45 menit<br>
      Tarif: Rp 25.000<br><br>
      <button onclick="bukaMaps('Alun-alun Bandung')">Lihat di Maps</button>
    `;
  }

  else if (tipe === "heritage") {
    info = `
      <strong>Rute Heritage</strong><br><br>
      Gedung Sate → Dago → Cihampelas → Braga<br>
      Estimasi: 50 menit<br>
      Tarif: Rp 25.000<br><br>
      <button onclick="bukaMaps('Gedung Sate Bandung')">Lihat di Maps</button>
    `;
  }

  document.getElementById("hasilBandros").innerHTML = `
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
