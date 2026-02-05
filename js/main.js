function goTo(page) {
  window.location.href = page;
}

function goHome() {
  window.location.href = "home.html";
}

function goMap() {
  window.location.href = "map.html";
}

function goBack() {
  window.history.back();
}

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.split("/").pop();
  const navButtons = document.querySelectorAll(".bottom-nav button");

  navButtons.forEach(btn => btn.classList.remove("active"));

  if (path === "index.html" || path === "") navButtons[0]?.classList.add("active");
  else if (path === "map.html") navButtons[1]?.classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("searchInput");

  if (search) {
    search.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        const tujuan = search.value.trim();
        if (tujuan !== "") {
          window.open(`https://www.google.com/maps/search/${encodeURIComponent(tujuan)}`, "_blank");
        }
      }
    });
  }
});

function cariHalteTerdekat(){

  const radar = document.getElementById("radarScan");
  radar.style.display = "flex";

  // radar tampil dulu 2 detik
  setTimeout(() => {

    if(!navigator.geolocation){
      alert("GPS tidak didukung");
      radar.style.display = "none";
      return;
    }

    navigator.geolocation.getCurrentPosition(function(pos){

      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      window.location.href =
        `https://www.google.com/maps/search/halte+bus/@${lat},${lng},17z`;

    }, function(){
      alert("Gagal mendapatkan lokasi");
      radar.style.display = "none";
    });

  }, 2000);

}


// Simulasi nama user dari akun
const nama = "Muhammad Faih"; 
document.getElementById("namaUser").innerText = nama;

// ===== AI ROBOT: DOUBLE CLICK = AI, DRAG = GESER =====
const ai = document.getElementById("ai-float");

let isDragging = false;
let offsetX, offsetY;

ai.addEventListener("mousedown", startDrag);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", stopDrag);

// Untuk layar sentuh (HP)
ai.addEventListener("touchstart", startDragTouch);
document.addEventListener("touchmove", dragTouch);
document.addEventListener("touchend", stopDrag);

function startDrag(e) {
  isDragging = true;
  offsetX = e.clientX - ai.getBoundingClientRect().left;
  offsetY = e.clientY - ai.getBoundingClientRect().top;
  ai.style.cursor = "grabbing";
}

function drag(e) {
  if (!isDragging) return;

  ai.style.left = (e.clientX - offsetX) + "px";
  ai.style.top = (e.clientY - offsetY) + "px";
  ai.style.right = "auto";
  ai.style.bottom = "auto";
}

function stopDrag() {
  isDragging = false;
  ai.style.cursor = "pointer";
}

// Touch (HP)
function startDragTouch(e) {
  isDragging = true;
  const touch = e.touches[0];
  offsetX = touch.clientX - ai.getBoundingClientRect().left;
  offsetY = touch.clientY - ai.getBoundingClientRect().top;
}

function dragTouch(e) {
  if (!isDragging) return;
  const touch = e.touches[0];

  ai.style.left = (touch.clientX - offsetX) + "px";
  ai.style.top = (touch.clientY - offsetY) + "px";
  ai.style.right = "auto";
  ai.style.bottom = "auto";
}


