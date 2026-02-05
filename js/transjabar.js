function pilihTransJabar(rute) {
  let info = "";

  if (rute === "lembang") {
    info = `
      <strong>Bandung – Lembang</strong><br><br>
      Estimasi: 45 menit<br>
      Tarif: Rp 15.000<br>
      Jadwal: 06.00 – 20.00<br><br>
      <button onclick="bukaMaps('Bandung ke Lembang')">Lihat di Maps</button>
    `;
  }

  else if (rute === "sumedang") {
    info = `
      <strong>Bandung – Sumedang</strong><br><br>
      Estimasi: 60 menit<br>
      Tarif: Rp 20.000<br>
      Jadwal: 05.30 – 19.00<br><br>
      <button onclick="bukaMaps('Bandung ke Sumedang')">Lihat di Maps</button>
    `;
  }

  else if (rute === "garut") {
    info = `
      <strong>Bandung – Garut</strong><br><br>
      Estimasi: 2 jam<br>
      Tarif: Rp 30.000<br>
      Jadwal: 05.00 – 18.00<br><br>
      <button onclick="bukaMaps('Bandung ke Garut')">Lihat di Maps</button>
    `;
  }

  document.getElementById("hasilTransJabar").innerHTML = `
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
