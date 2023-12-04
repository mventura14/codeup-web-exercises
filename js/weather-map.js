"use strict";


/*
[x]Create a new HTML file called weather_map.html.
[x]As you complete each step, commit your changes and push them to GitHub.
[x]Using HTML, CSS, Fetch API, and the OpenWeatherMap API, start by showing the current conditions for city you live in on your page.
[x]Update your layout and fetch request(s) to display a five-day forecast for the city you live in that looks like the screenshot below.
[x]If you want to add the icons the URLs for OpenWeatherMap's icons are formatted like: http://openweathermap.org/img/w/[icon].png where [icon] comes from the API response.
[x]Refer to your Mapbox API exercise. Recreate the map below your five-day forecast. Read through the documentation for the Mapbox API and figure out how to allow the user to drop a pin on any place on the map. Once the user drops a pin, grab its coordinates and feed those into your OpenWeatherMap API. Update the five-day forecast with the information from those coordinates (you should also get rid of your input boxes at this point).
[x]Add a Mapbox text input to search by location and have the forecast update when a new location is searched.
[x]As a bonus make sure you can update the marker's position to the new search result.
 */


(() => {
    const token = MB_KEY;
    let hasWeatherMarker = false /*default weather marker on map*/
    let weatherMarker; /*Making weather marker a global variable -defined in the interactiveWeatherMarker function-*/

    mapboxgl.accessToken = token;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [0, 0], // starting position [lng, lat]
        zoom:document.querySelector("#zoom").value
    });
    map.addControl(new mapboxgl.NavigationControl());

    /*-- Default Location --*/
    geocode("United States", token)
        .then(result => {
            map.setCenter(result);
        })

    /*-- retrieve zoom when map is moved and sets on zoom slider --*/
    map.on('move', () => {
        document.querySelector("#zoom").value = map.getZoom().toFixed(2)
    });

    /*-- Zoom slider changes zoom level on map --*/
    document.querySelector("#zoom").addEventListener("input",(e)=>{
        map.setZoom(e.currentTarget.value);
        console.log("somethings happening")
    })

    /*-- when map is clicked, sets weather marker and centers at location --*/
    map.on('click', (e) => {
        console.log(`A click event has occurred at ${e.lngLat}`);
        interactiveWeatherMarker(e)
        get5DayForecast()
        map.flyTo({
            center: [e.lngLat.lng, e.lngLat.lat], // replace with the coordinates of your marker
            essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
    });

    document.querySelector("#search-form").addEventListener("submit", (e) => {
        e.preventDefault()
    })
    document.querySelector("#search-btn").addEventListener('click', () => {
        let searchLocation = document.querySelector("#search-address")
        geocode(searchLocation.value.toLowerCase(), token).then(res => {
            return {
                lngLat: {
                    lng: res[0],
                    lat: res[1],
                },
            }
        }).then(res => {
            interactiveWeatherMarker(res)
            map.flyTo({
                center: [res.lngLat.lng, res.lngLat.lat], // replace with the coordinates of your marker
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });

            get5DayForecast()
        })
        searchLocation.value = "";

    })
    document.querySelector(".about-btn").addEventListener('click',()=>{
        document.querySelector(".about").style.display = "flex"
    })
    document.querySelector(".about").addEventListener('dblclick',(e)=>{
        e.currentTarget.style.display = "none"
    })


    function get5DayForecast() {
        let lat = weatherMarker._lngLat.lat;
        let lon = weatherMarker._lngLat.lng;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OWM_KEY}&units=imperial`).then(res => res.json())
            .then(data => {
                let dayForecast = [];
                for (let i = 0; i < data.list.length; i += 8) {
                    dayForecast.push(data.list[i])
                }
                renderForecast(dayForecast)
            })

    }/*-- Gets the 5day 3hr Forecast -- turn to -- 5 day 24h--*/

    function createForecastCard(forecast,i) {
        const date = new Date(forecast.dt * 1000)
        const dateObjStr = dateObj(date);
        const ico = forecast.weather[0].icon;
        const description = firstLetterUpperCase(forecast.weather[0].description)
        const maxTemp = parseInt(forecast.main.temp_max);
        const minTemp = forecast.main.temp_min;
        const temp = forecast.main.temp;
        const humidity = forecast.main.humidity
        const windSpeed = parseInt(forecast.wind.speed)
        const forecastContainer = document.querySelector("#forecastRender")

        // console.log(dateObjStr);
        if (forecastContainer.children.length === 5){
            forecastContainer.children[i].innerHTML =`
            <h2>${dateObjStr.dayOfWeek}, ${dateObjStr.month} ${dateObjStr.dayOfMonth}</h2>
            <h3>${description}</h3>
            <img src="http://openweathermap.org/img/w/${ico}.png" alt="" srcset="">
            <h2>${maxTemp}<sup>o</sup></h2>
            <div>
            <p>Humidity</p>
            <p>${humidity}%</p>
            </div>
            <div>
            <p>Wind</p>
            <p>${windSpeed} mph</p>
            </div>
            `
        }
        else
        {
            const cardContainer = document.createElement("div");
            cardContainer.classList.add("forecastCard");
            cardContainer.classList.add("slit-in-vertical");
            // console.log(date)
            cardContainer.innerHTML = `
            <h2>${dateObjStr.dayOfWeek}, ${dateObjStr.month} ${dateObjStr.dayOfMonth}</h2>
            <h3>${description}</h3>
            <img src="http://openweathermap.org/img/w/${ico}.png" alt="" srcset="">
            <h2>${maxTemp}<sup>o</sup></h2>
            <div>
            <p>Humidity</p>
            <p>${humidity}%</p>
            </div>
            <div>
            <p>Wind</p>
            <p>${windSpeed} mph</p>
            </div>
            `
            document.querySelector("#forecastRender").append(cardContainer)
        }


    }/*-- Creates/Updates forecast cards from forecastByDay output--*/

    function renderForecast(arr) {
        let forecastCards = document.querySelector("#forecastRender").children

        if (forecastCards.length !== 0) {
            let i = 0;
            let i2 = 0;
            let intervalId = setInterval(() => {
                if (i >= forecastCards.length) {
                    clearInterval(intervalId);
                } else {
                    forecastCards[i].classList.add("slit-out-vertical")
                    forecastCards[i].classList.remove("slit-in-vertical")
                    i++;
                }
            }, 200)
            setTimeout(()=>{
                let intervalId2 = setInterval(() => {
                    if (i2 >= forecastCards.length) {
                        clearInterval(intervalId2);
                    } else {
                        forecastCards[i2].classList.remove("slit-out-vertical")
                        forecastCards[i2].classList.add("slit-in-vertical")
                        createForecastCard(arr[i2],i2)
                        i2++;
                    }
                }, 200)
            }, 400)

        }else{
            arr.forEach((day,index) => {
                createForecastCard(day,index)
            })
        }

    }  /*Illiterates the array created by the forecastByDay functions, and appends cards*/

    function interactiveWeatherMarker(e) {
        /*-- If there is no marker --*/
        if (hasWeatherMarker === false) {
            /*-- creates marker --*/
            let marker = new mapboxgl.Marker({draggable: true})
                .setLngLat([`${e.lngLat.lng}`, `${e.lngLat.lat}`])
                .addTo(map);

            /*-- Creates a properties obj with id and coordinates on marker --*/
            marker.properties = {
                id: 'dynamicWeatherMarker',
                title: 'Weather Cursor',
                lat: marker.getLngLat().lng,
                lon: marker.getLngLat().lat,
            }

            // Store the marker in an object using its ID as the key
            let markers = {};
            markers[marker.properties.id] = marker;

            // Later, you can use the marker's ID to get its information
            let markerId = 'dynamicWeatherMarker'
            weatherMarker = markers[markerId]

            /* Gets five-day forecast after marker drag ends*/
            marker.on('dragend', ()=>{
                const lngLat = marker.getLngLat();
                get5DayForecast(lngLat.lat, lngLat.lng)
                getCurrentLocation()
            });

            hasWeatherMarker = true;

        } else {
            hasWeatherMarker = false;
            weatherMarker.remove()
            interactiveWeatherMarker(e)
        }
        getCurrentLocation()
    }  /*Creates and defines the Weather Maker*//*-- Creates and defines functionality of weather marker --*/

    function getCurrentLocation() {
        reverseGeocode(weatherMarker._lngLat, MB_KEY).then(res => {
            let locationData = res.features[0].context
            let location = []
            for (let data of locationData){
                if (data.id.includes("place") || data.id.includes("region") || data.id.includes("country")){
                    location.push(data.text)
                }
            }
            document.querySelector("#current-location").innerText = `${location[0]}, ${location[1]}, ${location[2]}`;
        })
    }/*-- Gets the coordinates of weather marker and reverse geocode its location--*/

    function dateObj(date) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const daysV2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const monthsV2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

        return {
            dayOfWeek: daysV2[date.getDay()],
            month: monthsV2[date.getMonth()],
            dayOfMonth: date.getDate(),
            fullYear: date.getFullYear(),
        }
    }/*Creates an object with date values*/ /*-- Generates an obj with date related values | input in milliseconds --*/

    function firstLetterUpperCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }  /*Function to make first letter of all words in a string*/

})()