function pilihBOSEH(lokasi) {
  let info = "";

  if (lokasi === "dago") {
    info = `
      <strong>Stasiun BOSEH Dago</strong><br><br>
      Sepeda tersedia: 5<br>
      Status: Aktif<br><br>
      <button onclick="bukaMaps('BOSEH Dago Bandung')">Lihat di Maps</button>
    `;
  }

  else if (lokasi === "cicendo") {
    info = `
      <strong>Stasiun BOSEH Cicendo</strong><br><br>
      Sepeda tersedia: 3<br>
      Status: Aktif<br><br>
      <button onclick="bukaMaps('BOSEH Cicendo Bandung')">Lihat di Maps</button>
    `;
  }

  else if (lokasi === "gasibu") {
    info = `
      <strong>Stasiun BOSEH Gasibu</strong><br><br>
      Sepeda tersedia: 7<br>
      Status: Aktif<br><br>
      <button onclick="bukaMaps('Gasibu Bandung')">Lihat di Maps</button>
    `;
  }

  document.getElementById("hasilBOSEH").innerHTML = `
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
