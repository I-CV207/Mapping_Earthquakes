//Add console.log to check to see if our code is working.
console.log("Working......please stand by")

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 4);

// 1. We are assigning the variable map to the object L.map(), and well instantiate the object eith the given string "mapid"
// 2. The mapid will reference the id tag in our <div> element on the index.html file
// 3. The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of 4 on a scale 0-18

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow",
    fillColor:"Black",
    weight:4,
    opacity:0.5
  }).addTo(map);


let lineSkill=[
    [37.6213, -122.3790],
    [30.196942,-97.667147],
    [47.677593,-79.625474],
    [40.641766,-73.780968]
];

L.polyline(lineSkill,{
    color:"blue",
    fillColor:"Black",
    weight:4,
    opacity:0.5,
    linecap:"square",
    dashArray:"5, 10"


}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// 1. We assign the tileLayer() method as shown in the leaflet quickstart guide
// 2. The following URLs appear in the parentheses of oour tileLayer() method:
    //-The API URL with a reference to the accesToken
    //-The OpenStreetMap URL inside the curly braces of our tileLayer() method
// 3. We add the maxXoom attibute and assign it a value of 18
// 4. We add the id attibute and assign it "mapbox/streets-v11" which will be show the streets on the map
// 5. We add the accessTohen attribute and assign it the value of our API_KEY
// 6. We call the addTo() function with our map object, map our graymap object tile layer. The addTo() function will add the graymap object tile layer to our let map    