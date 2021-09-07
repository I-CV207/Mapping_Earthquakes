//Add console.log to check to see if our code is working.
console.log("Working......please stand by")

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};
// Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
      console.log(feature);
      return L.marker(latlng)
      .bindPopup("<h2>" + feature.properties.name + "</h2>"+ feature.properties.city +", "+feature.properties.country);
    }

  }).addTo(map);
//------------------------------------------------------------------------
// The pointLayer Function

// L.geoJson(data, {
//     pointToLayer: function(feature, latlng) {
//       return L.marker(latlng);
//      }
// });

// 1. We add two arguments: the data and the pointToLayer callback function.
// 2. The data will be our sanFranAirport data.
// 3. For the pointToLayer callback function, we are first going to call a function() where we pass each GeoJSON feature as feature, and its latitude and longitude as latlng.
// 4. Then we add a marker for each feature with a latitude and longitude in the pointToLayer callback function argument by using return L.marker(latlng).

//-------------------------------------------------------------------------
//The onEachFeature Function

//L.geoJson(data, {
//     onEachFeature: function(feature, layer) {
//         layer.bindPopup();
//        }
//   });

// 1. First, we add two arguments: the data and the onEachFeature callback function.
// 2. The data will be our sanFranAirport data.
// 3. With the onEachFeature callback function we are first going to call an anonymous function, function(), where we pass each GeoJSON feature as feature, and any properties to the second argument, layer.
//-------------------------------------------------------------------------

L.geoJson(sanFranAirport, {
    // We turn each feature into a marker on the map.
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup(`<h2>Airport code: ${feature.properties.faa} </h2><hr>Airport name: ${feature.properties.name} `);
    }

  }).addTo(map);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id:"navigation-night-v1",
    accessToken: API_KEY
});
streets.addTo(map);