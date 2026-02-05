function cariBusTerdekat() {
  if (!navigator.geolocation) {
    alert("Browser tidak mendukung GPS");
    return;
  }

  navigator.geolocation.getCurrentPosition(showBus, showError);
}

function showBus(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const lokasi = `${lat},${lng}`;

  document.getElementById("hasilBus").innerHTML = `
    <div class="card" style="padding:16px;">
      <strong>📍 Lokasi Anda Berhasil Terdeteksi</strong><br><br>

      Pilih jenis transportasi terdekat dari lokasi Anda:<br><br>

      <button onclick="bukaMaps('${lokasi} halte TMB terdekat')">
        🚌 Halte TMB Terdekat
      </button><br><br>

      <button onclick="bukaMaps('${lokasi} halte bus bandung')">
        🚏 Halte Bus Terdekat
      </button><br><br>

      <button onclick="bukaMaps('${lokasi} angkot terdekat')">
        🚕 Angkot Terdekat
      </button>
    </div>
  `;
}

function showError() {
  alert("Gagal mendapatkan lokasi. Aktifkan GPS.");
}

function bukaMaps(query) {
  window.open(`https://www.google.com/maps/search/${query}`, "_blank");
}

