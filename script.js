let autocomplete;

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('search_input'),
  {
    types: ['establishment'],
    componentRestrictions: {'country': ['CA']},
    fields: ['place_id', 'geometry', 'name']
  })

  autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
  var place = autocomplete.getPlace();

  if (!place.geometry) {
    //user did not select a prediction; reset the input field
    document.getElementById('autocomplete').placeholder = 'Enter name of location...';
  } else {
    //display details about the valid place
    document.getElementById('details').innerHTML = place.name;
  }
}

function reportWindowPopUp() {
  var reportWindow = document.getElementById("reportWindow");
  if (reportWindow.style.display === "none") {
    reportWindow.style.display = "block";
  } else {
    reportWindow.style.display = "none";
  }
}

window.onclick = function(event) {
  var reportWindow = document.getElementById("reportWindow");

  if (event.target === reportWindow) {
    reportWindow.style.display = "none";
  }
}

function closeReportWindow() {
  reportWindow.style.display = "none";
}

// Initialize and add the map
function initMap() {
  // The location of UBC
  const ubc = { lat: 49.260801, lng: -123.246058 };
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
