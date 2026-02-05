function hubungiWA() {
  window.open("https://wa.me/6281234567890", "_blank");
}

function hubungiEmail() {
  window.location.href = "mailto:cs@bemoapp.id";
}

function toggleFAQ(id) {
  const el = document.getElementById("faq" + id);
  el.style.display = el.style.display === "none" ? "block" : "none";
}
