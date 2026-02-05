let map;
let layers = {};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -6.9175, lng: 107.6191 },
    zoom: 13,
  });
}

function toggleLayer(jenis) {
  if (layers[jenis]) {
    layers[jenis].setMap(null);
    layers[jenis] = null;
    return;
  }

  const rute = getRute(jenis);

  layers[jenis] = new google.maps.Polyline({
    path: rute,
    geodesic: true,
    strokeColor: getColor(jenis),
    strokeOpacity: 1.0,
    strokeWeight: 4,
  });

  layers[jenis].setMap(map);
}

function getColor(jenis) {
  switch (jenis) {
    case "tmb": return "#00c6ff";
    case "transjabar": return "#ff9800";
    case "bandros": return "#e91e63";
    case "busschool": return "#4caf50";
    case "angkot": return "#9c27b0";
  }
}

function getRute(jenis) {
  // Contoh koordinat rute (demo)
  const routes = {
    tmb: [
      { lat: -6.90, lng: 107.60 },
      { lat: -6.92, lng: 107.62 },
      { lat: -6.93, lng: 107.64 }
    ],
    transjabar: [
      { lat: -6.88, lng: 107.58 },
      { lat: -6.90, lng: 107.61 },
      { lat: -6.92, lng: 107.65 }
    ],
    bandros: [
      { lat: -6.91, lng: 107.61 },
      { lat: -6.92, lng: 107.62 },
      { lat: -6.93, lng: 107.63 }
    ],
    busschool: [
      { lat: -6.89, lng: 107.60 },
      { lat: -6.90, lng: 107.63 },
      { lat: -6.92, lng: 107.66 }
    ],
    angkot: [
      { lat: -6.93, lng: 107.60 },
      { lat: -6.94, lng: 107.62 },
      { lat: -6.95, lng: 107.64 }
    ],
  };

  return routes[jenis];
}
