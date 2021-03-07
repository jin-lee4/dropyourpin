
function windowPopUp() {
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

function closeWindowPopUp() {
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
  var latlng;
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    {
      types: ['establishment'],
      componentRestrictions: {'country': ['CA']},
    });

    autocomplete.addListener('place_changed', function() {
      fields: ['place_id', 'geometry', 'name', 'formatted_address'];
      var place = autocomplete.getPlace();
      var lng = place.geometry.location.lng();
      var lat = place.geometry.location.lat();
      latlng = {lat, lng};
      console.log(latlng);
      });

      $(document).ready(function() {
        $("#submit").click(function() {
          console.log("submitted");
          createMarker(latlng, map);
        });
      });
    }

function createMarker(location, map) {
  saveReportInfo(location);
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: 'Vector.png'
  });
  console.log("marker created")
}

function saveReportInfo(location) {
  var datetime = document.getElementById("datetime");
  var id; // create unique id for each report
  var details = document.getElementById("details");
  var location = location;
}
