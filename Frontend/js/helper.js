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
    //console.log(lat + "," + lon + ", " + name);
    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: {lat: lat, lng: lon},
      title: name
    });
    // console.log(marker);
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
  

  // station.locations.forEach(function(index){
  //   	var url = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCkTNVINAtrjTwtNbJUAZSIwni3t02mPVk";
		// $.getJSON( url, function( data ) {
		// 	var lat = data.results[0]["geometry"]["location"]["lat"];
		// 	var lon = data.results[0]["geometry"]["location"]["lng"];
		//   console.log(data.results[0]["geometry"]["location"]);
		//   console.log(lat);
		//   console.log(lon);
		//   mapMarker(index.lat, index.lon, index.name);
		// });
  //   });

  crimeData.forEach(function(index){
  		if (index.blockAddress.indexOf("/") < 0){
  			var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+index.blockAddress+"+,Riverside,+CA&key=AIzaSyCkTNVINAtrjTwtNbJUAZSIwni3t02mPVk";
			$.getJSON( url, function( data ) {
				var lat = data.results[0]["geometry"]["location"]["lat"];
				var lon = data.results[0]["geometry"]["location"]["lng"];
			  // console.log(data.results[0]["geometry"]["location"]);
			  // console.log(lat);
			  // console.log(lon);
			  mapMarker(lat, lon, index.offenseDate +"<br />"  + index.crimeType);
			});
  		}
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



$('#myButton').on('click', function () {
	crimeData.forEach(function(index){
  		if (index.blockAddress.indexOf("/") < 0){
  			var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+index.blockAddress+"+,Riverside,+CA&key=AIzaSyCkTNVINAtrjTwtNbJUAZSIwni3t02mPVk";
			$.getJSON( url, function( data ) {
				var lat = data.results[0]["geometry"]["location"]["lat"];
				var lon = data.results[0]["geometry"]["location"]["lng"];
			  // console.log(data.results[0]["geometry"]["location"]);
			  // console.log(lat);
			  // console.log(lon);
			  mapMarker(lat, lon, index.offenseDate +"<br />"  + index.crimeType);
			});
  		}
    	
    });
  })

$('#myButton1').on('click', function () {
	var mapOptions = {
    disableDefaultUI: true
  	};
	map = new google.maps.Map(document.querySelector('#mapDiv'), mapOptions);
  	// Sets the boundaries of the map based on pin locations
  	window.mapBounds = new google.maps.LatLngBounds();
	crimeData.forEach(function(index){
  		if (index.blockAddress.indexOf("/") < 0 && index.crimeType.indexOf("THEFT") >=0){
  			var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+index.blockAddress+"+,Riverside,+CA&key=AIzaSyCkTNVINAtrjTwtNbJUAZSIwni3t02mPVk";
			$.getJSON( url, function( data ) {
				var lat = data.results[0]["geometry"]["location"]["lat"];
				var lon = data.results[0]["geometry"]["location"]["lng"];
			  // console.log(data.results[0]["geometry"]["location"]);
			  // console.log(lat);
			  // console.log(lon);
			  mapMarker(lat, lon, index.offenseDate +"<br />"  + index.crimeType);
			});
  		}
    	
    });
  })

$('#myButton2').on('click', function () {
	var mapOptions = {
    	disableDefaultUI: true
  	};
	map = new google.maps.Map(document.querySelector('#mapDiv'), mapOptions);
  	// Sets the boundaries of the map based on pin locations
  	window.mapBounds = new google.maps.LatLngBounds();
	crimeData.forEach(function(index){
  		if (index.blockAddress.indexOf("/") < 0 && index.crimeType.indexOf("ROBBERY") >= 0){
  			var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+index.blockAddress+"+,Riverside,+CA&key=AIzaSyCkTNVINAtrjTwtNbJUAZSIwni3t02mPVk";
			$.getJSON( url, function( data ) {
				var lat = data.results[0]["geometry"]["location"]["lat"];
				var lon = data.results[0]["geometry"]["location"]["lng"];
			  // console.log(data.results[0]["geometry"]["location"]);
			  // console.log(lat);
			  // console.log(lon);
			  mapMarker(lat, lon, index.offenseDate +"<br />"  + index.crimeType);
			});
  		}
    	
    });
  })

$('#myButton3').on('click', function () {
	var mapOptions = {
    	disableDefaultUI: true
  	};
	map = new google.maps.Map(document.querySelector('#mapDiv'), mapOptions);
  	// Sets the boundaries of the map based on pin locations
  	window.mapBounds = new google.maps.LatLngBounds();
	crimeData.forEach(function(index){
  		if (index.blockAddress.indexOf("/") < 0 && index.crimeType.indexOf("FRAUD") >= 0){
  			var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+index.blockAddress+"+,Riverside,+CA&key=AIzaSyCkTNVINAtrjTwtNbJUAZSIwni3t02mPVk";
			$.getJSON( url, function( data ) {
				var lat = data.results[0]["geometry"]["location"]["lat"];
				var lon = data.results[0]["geometry"]["location"]["lng"];
			  // console.log(data.results[0]["geometry"]["location"]);
			  // console.log(lat);
			  // console.log(lon);
			  mapMarker(lat, lon, index.offenseDate +"<br />"  + index.crimeType);
			});
  		}
    	
    });
  })



function mapMarker(lat, lon, name, color) {
	
    // The next lines save location data from the search result object to local variables
    var lat = lat;  // latitude from the place service
    var lon = lon;  // longitude from the place service
    var name = name;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window
    //console.log(lat + "," + lon + ", " + name);
    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: {lat: lat, lng: lon},
      title: name
    });
    // console.log(marker);
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
