var map,
  infowindow,
  initialize = () => {
    const input = document.getElementById( 'placesAutocomplete' );
    initMap();
    initAutocomplete( input );
    preventSubmitOnEnter( input );
  };

function initMap() {
  var center = new google.maps.LatLng( 37.7749, -122.4194 ),
    mapProp = {
      center: center,
      zoom: 13,
    };
  map = new google.maps.Map( document.getElementById( 'googleMap' ), mapProp );
  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService( map );

  service.nearbySearch({
    location: center,
    radius: 500,
    type: ['bakery']
  }, mapsCallback);
}

function initAutocomplete( input ) {
  const autocomplete = new google.maps.places.Autocomplete( input );
}


function preventSubmitOnEnter ( input ) {
  google.maps.event.addDomListener(input, 'keydown', function( event ) { 
    if (event.keyCode === 13) { 
        event.preventDefault(); 
    }
  });
}

function mapsCallback( results, status ) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker( place ) {
  var placeLocation = place.geometry.location,
    marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener( marker, 'click', function() { //anon arrow function will not work in this case since we're using this function's scope
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
}