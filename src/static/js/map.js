// Initialize the Leaflet map
const map = L.map("map").setView([-8.16, 113.7], 13);

// Add a tile layer to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Fetch TPS data from API
fetch("/api/tps")
  .then((response) => response.json())
  .then((data) => {
    L.geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng);
      },
      onEachFeature: function (feature, layer) {
        layer.bindPopup(`
                    <h3>${feature.properties.nama}</h3>
                    <p>Alamat: ${feature.properties.alamat}</p>
                    <p>Kapasitas: ${feature.properties.kapasitas} ton</p>
                `);
      },
    }).addTo(map);
  });
