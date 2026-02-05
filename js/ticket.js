function beliTiket() {
  const jenis = document.getElementById("jenisTiket").value;
  const jumlah = parseInt(document.getElementById("jumlahTiket").value);

  let harga = 0;

  if (jenis === "TMB") harga = 3000;
  else if (jenis === "Angkot") harga = 7500;
  else if (jenis === "Bandros") harga = 20000;
  else if (jenis === "Trans Jabar") harga = 4900;

  const total = harga * jumlah;

  document.getElementById("hasilTiket").innerHTML = `
    <div class="card" style="padding:16px;">
      <strong>🎉 Tiket Berhasil Dibeli</strong><br><br>

      Transportasi: ${jenis}<br>
      Jumlah: ${jumlah}<br>
      Harga per tiket: Rp ${harga}<br>
      <strong>Total: Rp ${total}</strong><br><br>

      <div style="text-align:center;">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${jenis}-${jumlah}-${total}" />
        <p>QR Tiket (Demo)</p>
      </div>

      <button onclick="alert('Tiket tersimpan!')">Simpan Tiket</button>
    </div>
  `;
}
