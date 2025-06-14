// Initialize the Leaflet map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Add a marker to the map
var marker = L.marker([51.5, -0.09]).addTo(map);

// Bind a popup to the marker
marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();

// Function to add a layer to the map
function addLayer(layer) {
    layer.addTo(map);
}

// Example of adding a circle to the map
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// Function to handle map click events
map.on('click', function(e) {
    alert("You clicked the map at " + e.latlng);
});