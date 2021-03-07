var lng;
var lat;
var latlng;

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
    zoom: 13,
    center: ubc,
  });

    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      {
        types: ['establishment'],
        componentRestrictions: {'country': ['CA']},
      });

      autocomplete.addListener('place_changed', function() {
        fields: ['place_id', 'geometry', 'name', 'formatted_address'];
        var place = autocomplete.getPlace();
        lng = place.geometry.location.lng();
        lat = place.geometry.location.lat();
        latlng = {lat, lng};
        var submitReport = document.getElementById("submit");
        submitReport.addEventListener("onclick", createMarker(latlng));

        console.log(latlng);

        function createMarker(coords) {
          var marker = new google.maps.Marker({
            position: coords,
            map: map,
            icon: 'Vector.png'
          });
        }
      });
    }
