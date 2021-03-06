// Initialize and add the map
function initMap() {
  // The location of UBC
  const ubc = { lat: -49.260801, lng: -123.246058 };
  // The map, centered at UBC
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: ubc,
  });
  // The marker, positioned at UBC
  const marker = new google.maps.Marker({
    position: ubc,
    map: map,
  });
}
