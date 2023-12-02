"use strict";


/*
[x]Create a new HTML file called weather_map.html.
[x]As you complete each step, commit your changes and push them to GitHub.
[x]Using HTML, CSS, Fetch API, and the OpenWeatherMap API, start by showing the current conditions for city you live in on your page.
[x]Update your layout and fetch request(s) to display a five-day forecast for the city you live in that looks like the screenshot below.
[x]If you want to add the icons the URLs for OpenWeatherMap's icons are formatted like: http://openweathermap.org/img/w/[icon].png where [icon] comes from the API response.
[]Refer to your Mapbox API exercise. Recreate the map below your five-day forecast. Read through the documentation for the Mapbox API and figure out how to allow the user to drop a pin on any place on the map. Once the user drops a pin, grab its coordinates and feed those into your OpenWeatherMap API. Update the five-day forecast with the information from those coordinates (you should also get rid of your input boxes at this point).
[]Add a Mapbox text input to search by location and have the forecast update when a new location is searched.
[]As a bonus make sure you can update the marker's position to the new search result.
 */


(() => {
    const token = MB_KEY;
    let hasWeatherMarker = false /*default weather marker on map*/
    let weatherMarker; /*Making weather marker a global variable -defined in the create function-*/

    mapboxgl.accessToken = token;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [0, 0], // starting position [lng, lat]
        zoom: 5, // starting zoom
    });

    map.addControl(new mapboxgl.NavigationControl());

    document.querySelector("#search-form").addEventListener("submit",(e)=>{
        e.preventDefault()
    })

    /*sets default map location*/
    geocode("1962 W Gray St, Houston, TX 77019", MB_KEY)
        .then(result => {
            map.setCenter(result);
            map.setZoom(10);
        })


    map.on('click', (e) => {
        console.log(`A click event has occurred at ${e.lngLat}`);
        interactiveWeatherMarker(e)
        get5DayForecast()
        console.log(weatherMarker)
    });

    document.querySelector("#search-btn").addEventListener('click', ()=>{
        let searchLocation = document.querySelector("#search-address")
        geocode(searchLocation.value.toLowerCase(), token).then(res=>{
            console.log(res)
            let cord = {
                lngLat:{
                    lng:res[0],
                    lat:res[1],
                },
            }
            return cord
        }).then(res=>{
            interactiveWeatherMarker(res)
            map.flyTo({
                center: [res.lngLat.lng, res.lngLat.lat], // replace with the coordinates of your marker
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });

            get5DayForecast()
        })
        searchLocation.value = "";

    })



   /* function onClickMarker(info, token, map) {
        geocode(info.address, token).then(coords => {
            let popup = new mapboxgl.Popup()
                .setHTML(info.popupHTML);


        });
    }*/

function get5DayForecast(){
    let lat=weatherMarker._lngLat.lat;
    let lon=weatherMarker._lngLat.lng;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OWM_KEY}&units=imperial`).then(res => res.json())
        .then(data => {
            console.log(data);
            const cityName = data.city.name;
            const forecastList = data.list;
            const weekForecast = forecastByDay(forecastList)
            console.log(weekForecast);
            // createForecastCard(weekForecast[0])
            renderForecast(weekForecast)
            // document.querySelector("#current-location").innerText = cityName;
            // console.log(cityName)
        })

}



    function forecastByDay(forecastList) {
        let dayForecast = [];
        for (let i = 0; i < forecastList.length; i += 8) {
            dayForecast.push(forecastList[i])
        }
        return dayForecast
    } /*--Leaves 5 items In Forecast Array | Interval:24h--*/

    function createForecastCard(forecast) {
        const date = new Date(forecast.dt * 1000)
        const dateObjStr = dateObj(date);
        const ico = forecast.weather[0].icon;
        const description = firstLetterUpperCase(forecast.weather[0].description)
        const maxTemp = forecast.main.temp_max;
        const minTemp = forecast.main.temp_min;
        const temp = forecast.main.temp;
        const humidity = forecast.main.humidity
        const windSpeed = forecast.wind.speed

        // console.log(dateObjStr);

        const cardContainer = document.createElement("div")
        cardContainer.classList.add("forecastCard")

        // console.log(date)
        cardContainer.innerHTML = `
        <h1>${dateObjStr.dayOfWeek}</h1>
        <h2>${dateObjStr.month} ${dateObjStr.dayOfMonth} ${dateObjStr.fullYear}</h2>
        <h2>${maxTemp}<sup>o</sup>/${minTemp}<sup>o</sup></h2>
        <h3>${description}</h3>
        <img src="http://openweathermap.org/img/w/${ico}.png" alt="" srcset="">
        <p>Humidity: ${humidity}%</p>
        <p>Wind:${windSpeed}</p>
        `
        document.querySelector("#forecastRender").append(cardContainer)
    }/*--Defines Variables and creates a Card inner html*/

    function renderForecast(arr) {
        document.querySelector("#forecastRender").innerHTML = ""
        arr.forEach((day) => {
            createForecastCard(day)
        })
    }  /*Illiterates the array created by the forecastByDay functions, and appends cards*/

    function dateObj(date) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const monthsV2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

        return {
            dayOfWeek: days[date.getDay()],
            month: monthsV2[date.getMonth()],
            dayOfMonth: date.getDate(),
            fullYear: date.getFullYear(),
        }
    }/*Creates an object with date values*/

    function firstLetterUpperCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }  /*Function to make first letter of all words in a string*/
    function interactiveWeatherMarker(e){
        let cord = e.lngLat
        console.log(cord)
        if(hasWeatherMarker === false){
            let marker = new mapboxgl.Marker({
                draggable: true
            })
                .setLngLat([`${e.lngLat.lng}`,`${e.lngLat.lat}`])
                .addTo(map);
            marker.properties = {
                id: 'dynamicWeatherMarker',
                title: 'Weather Cursor',
                lat:marker.getLngLat().lng,
                lon:marker.getLngLat().lat,
            }
            console.log("fffsc")
            console.log(e.lngLat)
            // Store the marker in an object using its ID as the key
            let markers = {};
            markers[marker.properties.id] = marker;

            // Later, you can use the marker's ID to get its information
            let markerId = 'dynamicWeatherMarker'
            weatherMarker = markers[markerId]

            /* Gets five day forecast after marker drag ends*/
            weatherMarker.on('dragend', function () {
                const lngLat = marker.getLngLat();
                console.log(`Longitude: , Latitude: `);
                get5DayForecast( lngLat.lat, lngLat.lng)
                console.log(weatherMarker)
            });

            hasWeatherMarker = true;
        }   else {
            hasWeatherMarker = false;
            weatherMarker.remove()
            interactiveWeatherMarker(e)
        }
        getCurrentLocation()
    }  /*Creates and defines the Weather Maker*/

    function getCurrentLocation(){
        reverseGeocode(weatherMarker._lngLat, MB_KEY).then(res=>{
            document.querySelector("#current-location").innerText = res;
        })
    }

})()