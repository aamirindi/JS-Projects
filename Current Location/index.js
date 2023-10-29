var map = L.map("map").setView([35.6764, 139.65], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 12,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

navigator.geolocation.watchPosition(success, error);

let marker, circle, zoomed;

function success(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  const accuracy = pos.coords.accuracy;
  if (marker) {
    map.removeLayer(marker);
    map.removeLayer(circle);
  }

  marker = L.marker([lat, lng]).addTo(map);
  circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);

  if (!zoomed) {
    zoomed = map.fitBounds(circle.getBounds());
  }
  map.setView([lat, lng]);

  var tooltip = L.tooltip()
    .setLatLng([lat, lng])
    .setContent("This is your current location!")
    .openOn(map);
}

function error() {
  if (err.code === 1) {
    alert("Please allow gelocation access");
  } else {
    alert("Cannot get current location");
  }
}
