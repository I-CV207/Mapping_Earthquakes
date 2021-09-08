
// Accessing the Toronto airline routes GeoJSON URL.
let torontoHoods="https://raw.githubusercontent.com/I-CV207/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/Mapping_GeoJSON_Polygons/static/data/torontoNeighborhoods.json";

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data,{
    color:"#0000FF",
    weight:1,
    onEachFeature:function(feature,layer){
        layer.bindPopup(`<h3>Neighborhood: ${feature.properties.AREA_NAME}</h3>`);
    }
  })
  .addTo(map);
});

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id:"light-v10",
    accessToken: API_KEY
})

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id:"dark-v10",
    accessToken: API_KEY
})

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
    "Light":light,
    "Dark":dark,
    "Satellite Streets":satelliteStrets,
    "Streets":streets
}
// Create the map object with a center and zoom level.
let map = L.map('mapid',{
    center:[43.7, -79.3],
    zoom:11,
    layers:[streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);