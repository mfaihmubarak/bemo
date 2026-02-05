function pilihShelter(jenis) {
  let info = "";

  if (jenis === "TMB") {
    info = `
      <strong>🚌 Shelter TMB Utama</strong><br><br>

      • Shelter TMB Sarimanis<br>
      <a href="https://www.google.com/maps/search/Shelter+TMB+Sarimanis+Bandung" target="_blank">
        🔗 Lihat di Google Maps
      </a><br><br>

      • Shelter TMB Surapati 06<br>
      <a href="https://www.google.com/maps/search/Shelter+TMB+Surapati+06+Bandung" target="_blank">
        🔗 Lihat di Google Maps
      </a><br><br>

      <em>Koridor yang melewati shelter ini:</em><br>
      K3, 05, 06, 10, 17, 33
    `;
  }

  else if (jenis === "BOSEH") {
    info = `
      <strong>🚲 Shelter BOSEH (Bike Sharing)</strong><br><br>

      • Stasiun BOSEH Dago<br>
      <a href="https://www.google.com/maps/search/BOSEH+Dago+Bandung" target="_blank">
        🔗 Lihat di Google Maps
      </a><br><br>

      • Stasiun BOSEH Cicendo<br>
      <a href="https://www.google.com/maps/search/BOSEH+Cicendo+Bandung" target="_blank">
        🔗 Lihat di Google Maps
      </a><br><br>

      <em>Stasiun BOSEH tersebar di beberapa titik strategis.</em>
    `;
  }

  else if (jenis === "Angkot") {
    info = `
      <strong>🚕 Titik Shelter Angkot</strong><br><br>

      • Terminal Cicaheum<br>
      <a href="https://www.google.com/maps/search/Terminal+Cicaheum+Bandung" target="_blank">
        🔗 Lihat di Google Maps
      </a><br><br>

      • Alun-alun Bandung<br>
      <a href="https://www.google.com/maps/search/Alun-alun+Bandung" target="_blank">
        🔗 Lihat di Google Maps
      </a><br><br>

      <em>Angkot melayani berbagai trayek kota.</em>
    `;
  }

  else if (jenis === "Bandros") {
    info = `
      <strong>🚌 Shelter Bandros (Wisata)</strong><br><br>

      • Shelter Bandros Alun-alun<br>
      <a href="https://www.google.com/maps/search/Bandros+Alun-alun+Bandung" target="_blank">
        🔗 Lihat di Google Maps
      </a><br><br>

      • Shelter Bandros Braga<br>
      <a href="https://www.google.com/maps/search/Bandros+Braga+Bandung" target="_blank">
        🔗 Lihat di Google Maps
      </a><br><br>

      <em>Bandros melayani rute wisata Bandung.</em>
    `;
  }

  document.getElementById("hasilShelter").innerHTML = `
    <div class="card" style="padding:16px;">
      ${info}
    </div>
  `;
}


// ================= GPS TERDEKAT =================

function cariShelterTerdekat() {
  if (!navigator.geolocation) {
    alert("Browser tidak mendukung GPS.");
    return;
  }

  navigator.geolocation.getCurrentPosition(showNearestShelter, showError);
}

function showNearestShelter(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const lokasiUser = `${lat},${lng}`;

  document.getElementById("hasilShelter").innerHTML = `
    <div class="card" style="padding:16px;">
      <strong>📍 Lokasi Anda Terdeteksi</strong><br><br>

      Pilih shelter terdekat:<br><br>

      <button onclick="bukaMaps('${lokasiUser} shelter TMB')">🚌 Shelter TMB Terdekat</button><br><br>
      <button onclick="bukaMaps('${lokasiUser} BOSEH')">🚲 Shelter BOSEH Terdekat</button><br><br>
      <button onclick="bukaMaps('${lokasiUser} halte angkot')">🚕 Shelter Angkot Terdekat</button><br><br>
      <button onclick="bukaMaps('${lokasiUser} Bandros')">🚌 Shelter Bandros Terdekat</button>
    </div>
  `;
}

function showError(error) {
  alert("Gagal mendapatkan lokasi. Pastikan GPS aktif.");
}


// ================= BUKA GOOGLE MAPS =================

function bukaMaps(lokasi) {
  window.open(
    `https://www.google.com/maps/search/${encodeURIComponent(lokasi)}`,
    "_blank"
  );
}
