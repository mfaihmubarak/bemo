function kirimPesan() {
  const input = document.getElementById("userInput");
  const pesan = input.value.trim();

  if (pesan === "") return;

  const chatBox = document.getElementById("chatBox");

  // Pesan user
  const userChat = document.createElement("div");
  userChat.className = "chat user";
  userChat.innerHTML = `<div class="bubble">${pesan}</div>`;
  chatBox.appendChild(userChat);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Simulasi balasan AI
  setTimeout(() => {
    const botChat = document.createElement("div");
    botChat.className = "chat bot";
    botChat.innerHTML = `<div class="bubble">${jawabAI(pesan)}</div>`;
    chatBox.appendChild(botChat);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);
}

function jawabAI(pesan) {
  pesan = pesan.toLowerCase();

  if (pesan.includes("tmb")) return "TMB adalah transportasi massal Bandung.";
  if (pesan.includes("angkot")) return "Angkot melayani rute dalam kota.";
  if (pesan.includes("boseh")) return "BOSEH adalah layanan sepeda publik.";
  if (pesan.includes("tiket")) return "Kamu bisa beli tiket di menu Tiket.";
  if (pesan.includes("rute")) return "Cek rute lengkap di menu Rute.";

  return "Terima kasih! Fitur ini masih dalam tahap demo 😊";
}
