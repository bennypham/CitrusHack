function initMap() 
{
  var uluru = {lat: 33.975645, lng: -117.326088};
  var map = new google.maps.Map(document.getElementById('map'), 
  {
    zoom: 12,
    center: uluru
  });

  var marker = new google.maps.Marker
  ({
    position: uluru,
    map: map
  });
}