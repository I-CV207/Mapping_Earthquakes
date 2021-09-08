let satelliteStrets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id:"satellite-streets-v11",
    accessToken: API_KEY
})

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id:"streets-v11",
    accessToken: API_KEY
})
let baseMaps={
    "Satellite Streets":satelliteStrets,
    "Streets":streets
}
// Create the map object with a center and zoom level.
let map = L.map('mapid',{
    center:[39.5, -98.5],
    zoom:3,
    layers:[streets]
});

//Earthqueake GeoJSON URL
let earthquake_URL="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
// Grabbing our GeoJSON data.
d3.json(earthquake_URL).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data).addTo(map)
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);