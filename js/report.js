function kirimPengaduan() {
  const input = document.getElementById("inputPengaduan");
  const pesan = input.value.trim();

  if (pesan === "") return;

  const chatBox = document.getElementById("chatPengaduan");

  // Pesan user
  const userChat = document.createElement("div");
  userChat.className = "chat user";
  userChat.innerHTML = `<div class="bubble">${pesan}</div>`;
  chatBox.appendChild(userChat);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Simulasi balasan admin
  setTimeout(() => {
    const botChat = document.createElement("div");
    botChat.className = "chat bot";
    botChat.innerHTML = `<div class="bubble">${jawabPengaduan(pesan)}</div>`;
    chatBox.appendChild(botChat);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 800);
}

function jawabPengaduan(pesan) {
  pesan = pesan.toLowerCase();

  if (pesan.includes("tmb")) return "Terima kasih. Pengaduan terkait TMB akan kami teruskan ke petugas.";
  if (pesan.includes("angkot")) return "Laporan angkot sudah kami terima dan sedang diproses.";
  if (pesan.includes("boseh")) return "Laporan BOSEH diterima. Teknisi akan segera mengecek.";
  if (pesan.includes("bandros")) return "Laporan Bandros sedang kami tindaklanjuti.";
  if (pesan.includes("bus sekolah")) return "Terima kasih. Kami akan menghubungi pihak terkait.";

  return "Terima kasih atas laporan Anda. Tim kami akan segera menindaklanjuti 🙏";
}
