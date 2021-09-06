//Add console.log to check to see if our code is working.
console.log("Working......please stand by")

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// 1. We are assigning the variable map to the object L.map(), and well instantiate the object eith the given string "mapid"
// 2. The mapid will reference the id tag in our <div> element on the index.html file
// 3. The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of 4 on a scale 0-18

// This is an alternative to using setView() using curly braces notation

// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Change the marker into a circle

// let marker = L.circle([34.0522, -118.2437], {
//     color:"yellow",
//     fillcollor:"#f03",
//     fillopacity:0.2,
//     radius: 300
//  }).addTo(map);

// Add a circle using circleMarker() function

L.circleMarker([34.0522, -118.2437], {
    color:"black",
    fillColor:"#ffffa1",
    radius: 300
 }).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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