"use strict";
/*
[x]Generate a Mapbox API Key using the steps from above
[x]Create a new file named mapbox_maps_api.html and add a map using the next steps.
[x]Generate a map that shows the city with your favorite restaurant using geocoding.
[x]Redraw the map of the above location at zoom levels 5, 15, and 20. Do this by simply changing the value of zoom level where the map properties are initially set and refresh the page to see the changes. Can the zoom be changed programmatically after the initial map is drawn?
[x]Create a marker on your map of the exact location of your favorite restaurant set the zoom to allow for best viewing distance.
[x]Create a popup with the name of the restaurant.
[x]Make sure the info window does not display until the marker has been clicked on.
[]Refactor your code to display at least three of your favorite restaurants with information about each. Create an array of objects with information about each restaurant to accomplish this. Use a .forEach() loop rather than a for loop.
*/


/* --------------Bonus---------------




*/

(() => {
    mapboxgl.accessToken = MB_KEY;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [0, 0], // starting position [lng, lat]
        zoom: 5, // starting zoom
    });



    map.addControl(new mapboxgl.NavigationControl());
    geocode("1962 W Gray St, Houston, TX 77019", MB_KEY)
        .then(result => {
            map.setCenter(result);
            map.setZoom(10);
        })

    const favRest = [
        {
            address:"1962 W Gray St, Houston, TX 77019",
            popupHTML:"<h3>Brasserie 19</h3>",
        },{
        address:"2011 Ella Blvd, Houston, TX 77008" ,
            popupHTML:"<h3>Rainbow Lodge</h3>",
        },{
        address:"412 Washington Ave, Houston, TX 77007",
            popupHTML:"<h3>Laurenzo's</h3>",
        }
    ];

    favRest.forEach((location)=>{
        placeMarkerAndPopup(location, MB_KEY, map)

    })


    /*Function List*/
    function placeMarkerAndPopup(info, token, map) {
        geocode(info.address, token).then(coords => {
            let popup = new mapboxgl.Popup()
                .setHTML(info.popupHTML);
            let marker = new mapboxgl.Marker()
                .setLngLat(coords)
                .addTo(map)
                .setPopup(popup);
            console.log(marker.getLngLat())
            marker.on('click',(e) => {
                console.log(marker.getlngLat);

            });
            map.on('click', (e) => {
                console.log(`A click event has occurred at ${e.lngLat}`);
            });

        });
    }

document.addEventListener("keyup",(e)=>{
    if(e.key === "q"){
        console.log("ff")
        console.log(map.getProjection())
    }
})

})()