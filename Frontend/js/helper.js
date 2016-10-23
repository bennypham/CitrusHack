/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /* 
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js. 
  */
  map = new google.maps.Map(document.querySelector('#mapDiv'), mapOptions);

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();
  
  function mapMarker(lat, lon, name) {

    // The next lines save location data from the search result object to local variables
    var lat = lat;  // latitude from the place service
    var lon = lon;  // longitude from the place service
    var name = name;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window
    console.log(lat + "," + lon + ", " + name);
    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: {lat: lat, lng: lon},
      title: name
    });
    console.log(marker);
    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  station.locations.forEach(function(index){
    
      mapMarker(index.lat, index.lon, index.name);
    });

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});