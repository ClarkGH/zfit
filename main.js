var initMap = () => {
  setAutocomplete();
  setMap();
}

function setAutocomplete() {
  var input = document.getElementById('placesAutocomplete'),
    autocomplete = new google.maps.places.Autocomplete(input);
}

function setMap() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
  };
  var map= new google.maps.Map(document.getElementById("googleMap"),mapProp);
}