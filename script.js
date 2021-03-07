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
  var name;
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
      name = place.name;
      });

      $(document).ready(function() {
        $("#submit").click(function() {
          console.log("submitted");
          createMarker(latlng, name, map);
          closeWindowPopUp();
        });
      });
    }

function createMarker(location, name, map) {
  var datetime;
  var placename;
  var id;
  var details;
  var location;
  saveReportInfo(location, name);
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: 'Vector.png',
    title: name
  });
  console.log("marker created")

  function saveReportInfo(location, name) {
    datetime = document.getElementById("datetime");
    placename = name;
    console.log(datetime.value);
    console.log(name);
    //unique id for each report
    id = datetime.value + placename;
    details = document.getElementById("details");
    console.log(details.value);
    location = location;
  }

  const contentString =
  '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" + '<h2>' + placename + '</h2>' +
  '<div id="bodyContent">' +
  "<p><b>Date: </b>" + datetime.value +
  "<br><b>Details: </b>" + details.value + "</p>" +
  "</div>" +
  "</div>"

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}
