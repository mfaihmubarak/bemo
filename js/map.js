function cariLokasi() {
  const tujuan = document.getElementById("lokasiTujuan").value.trim();
  if (tujuan === "") {
    alert("Masukkan lokasi tujuan.");
    return;
  }

  const frame = document.getElementById("mapFrame");
  frame.src = `https://www.google.com/maps?q=${encodeURIComponent(tujuan)}&output=embed`;
}

function lokasiSaya() {
  if (!navigator.geolocation) {
    alert("Browser tidak mendukung GPS.");
    return;
  }

  navigator.geolocation.getCurrentPosition(showMyLocation, showError);
}

function showMyLocation(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const frame = document.getElementById("mapFrame");
  frame.src = `https://www.google.com/maps?q=${lat},${lng}&output=embed`;
}

function showError() {
  alert("Gagal mendapatkan lokasi.");
}
