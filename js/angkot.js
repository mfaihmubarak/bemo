function pilihAngkot(tipe) {
  let info = "";

  if (tipe === "ledeng") {
    info = `
      <strong>Ledeng – Alun-alun</strong><br><br>
      Estimasi: 20 menit<br>
      Tarif: Rp 4.000<br><br>
      <button onclick="bukaMaps('Ledeng Bandung')">Lihat di Maps</button>
    `;
  }

  else if (tipe === "cicaheum") {
    info = `
      <strong>Cicaheum – Dago</strong><br><br>
      Estimasi: 25 menit<br>
      Tarif: Rp 4.000<br><br>
      <button onclick="bukaMaps('Terminal Cicaheum Bandung')">Lihat di Maps</button>
    `;
  }

  document.getElementById("hasilAngkot").innerHTML = `
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
