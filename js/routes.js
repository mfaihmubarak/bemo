function bukaLink(url) {
  window.open(url, "_blank");
}

function pilihRute(jenis) {
  let info = "";

  // ===================== TMB =====================
  if (jenis === "TMB") {

    const koridorTMB = [
      { nama: "TMB Koridor 1", link: "https://moovitapp.com/index/id/Tranportasi_Umum-line-tmb_k1-Bandung-4486-954424-123003768-0" },
      { nama: "LIVE BUS Koridor 1", link: "https://bemo.uptangkutan-bandung.id/" },
      { nama: "TMB Koridor 2", link: "https://moovitapp.com/index/id/Tranportasi_Umum-line-tmb_k2-Bandung-4486-954424-123003774-0" },
      { nama: "LIVE BUS Koridor 2", link: "https://bemo.uptangkutan-bandung.id/" },
      { nama: "TMB Koridor 3", link: "https://moovitapp.com/index/id/Tranportasi_Umum-line-tmb_k3-Bandung-4486-954424-123003769-0" },
      { nama: "LIVE BUS Koridor 3", link: "https://bemo.uptangkutan-bandung.id/" },
      { nama: "TMB Koridor 4", link: "https://moovitapp.com/index/id/Tranportasi_Umum-line-tmb_k4-Bandung-4486-954424-123003770-0" },
      { nama: "LIVE BUS Koridor 4", link: "https://bemo.uptangkutan-bandung.id/" },
      { nama: "TMB Koridor 5", link: "https://moovitapp.com/index/id/Tranportasi_Umum-line-tmb_k5-Bandung-4486-954424-123003772-0" },
      { nama: "LIVE BUS Koridor 5", link: "https://bemo.uptangkutan-bandung.id/" },
      { nama: "TMB Feeder 1",  link: "https://moovitapp.com/index/id/Tranportasi_Umum-line-tmb_f1-Bandung-4486-954424-166057019-0" },
      { nama: "LIVE BUS Feeder 1", link: "https://bemo.uptangkutan-bandung.id/" },
      { nama: "TMB Feeder 2",  link: "https://moovitapp.com/index/id/Tranportasi_Umum-line-tmb_f2-Bandung-4486-954424-166057020-0" },
      { nama: "LIVE BUS Feeder 2", link: "https://bemo.uptangkutan-bandung.id/" },
    ];

    let tombol = "";
    koridorTMB.forEach(k => {
      tombol += `
        <button onclick="bukaLink('${k.link}')">
          ${k.nama}
        </button><br><br>
      `;
    });

    info = `
      <strong>🚌 Rute TMB Bandung</strong><br><br>

      <a href="https://moovitapp.com/index/id/Tranportasi_Umum-lines-Bandung-4486-954424"
         target="_blank"
         style="display:inline-block;padding:10px 14px;background:#1e88e5;color:white;border-radius:8px;text-decoration:none;font-weight:bold;">
         Lihat Semua Jalur di Moovit
      </a><br><br>

      <strong>Pilih Koridor:</strong><br><br>
      ${tombol}

      ⏱ Interval: 10–15 menit<br>
      💳 Tarif Umum: Rp 4.000<br>
      💳 Tarif Pelajar: Rp 2.000
    `;
  }

  // ===================== BUS SEKOLAH =====================
  else if (jenis === "Bus Sekolah") {
    info = `
      <strong>🎓 Rute Bus Sekolah</strong><br><br>
      SMAN 3 → SMPN 1<br><br>

      <button onclick="bukaLink('https://www.google.com/maps/search/SMAN+3+Bandung')">
        Lihat di Maps
      </button>
    `;
  }

  // ===================== BANDROS =====================
  else if (jenis === "Bandros") {
    info = `
      <strong>🚌 Rute Bandros</strong><br><br>
      Kota Tua → Braga → Alun-alun<br>
      Tarif: Rp 25.000<br><br>

      <button onclick="bukaLink('https://www.google.com/maps/search/Braga+Bandung')">
        Lihat Jalur Wisata
      </button>
    `;
  }

  // ===================== ANGKOT =====================
  else if (jenis === "Angkot") {
    info = `
      <strong>🚕 Rute Angkot</strong><br><br>
      Ledeng – Alun-alun<br>
      Tarif: Rp 4.000<br><br>

      <button onclick="bukaLink('https://www.google.com/maps/search/Ledeng+Bandung')">
        Lihat di Maps
      </button>
    `;
  }

  // tampilkan hasil
  document.getElementById("hasilRute").innerHTML = `
    <div class="card" style="padding:16px;">
      ${info}
    </div>
  `;
}

