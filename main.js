var initMap = () => {
  const input = document.getElementById('placesAutocomplete');
  setAutocomplete( input );
  preventSubmitOnEnter( input );
  setMap();
}
// refactor to jquery on all
function setAutocomplete( input ) {
  var autocomplete = new google.maps.places.Autocomplete( input );
}

function setMap() {
  const mapProp = {
    center: new google.maps.LatLng( 37.7749, -122.4194 ),
    zoom: 15,
  },
    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function preventSubmitOnEnter ( input ) {
  google.maps.event.addDomListener(input, 'keydown', function( event ) { 
    if (event.keyCode === 13) { 
        event.preventDefault(); 
    }
  });
}