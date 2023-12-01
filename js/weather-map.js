"use strict";


/*
[x]Create a new HTML file called weather_map.html.
[x]As you complete each step, commit your changes and push them to GitHub.
[]Using HTML, CSS, Fetch API, and the OpenWeatherMap API, start by showing the current conditions for city you live in on your page.
[]Update your layout and fetch request(s) to display a five-day forecast for the city you live in that looks like the screenshot below.
[]If you want to add the icons the URLs for OpenWeatherMap's icons are formatted like: http://openweathermap.org/img/w/[icon].png where [icon] comes from the API response.
[]Refer to your Mapbox API exercise. Recreate the map below your five-day forecast. Read through the documentation for the Mapbox API and figure out how to allow the user to drop a pin on any place on the map. Once the user drops a pin, grab its coordinates and feed those into your OpenWeatherMap API. Update the five-day forecast with the information from those coordinates (you should also get rid of your input boxes at this point).
[]Add a Mapbox text input to search by location and have the forecast update when a new location is searched.
[]As a bonus make sure you can update the marker's position to the new search result.
 */


(() => {
    const lat = 29.7604;
    const lon = -95.3698;


    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OWM_KEY}`).then(res => res.json())
        .then(data => {
            console.log(data);
            const cityName = data.city.coord.name;
            const forecastList = data.list;
            const weekForecast = forecastByDay(forecastList)
            console.log(weekForecast);
            createForecastCard(weekForecast[0])
        })


    function forecastByDay(forecastList) {
        let dayForecast = [];
        for (let i = 0; i < forecastList.length; i += 8) {
            dayForecast.push(forecastList[i])
        }
        return dayForecast
    }

    function displayDayForecast() {

    }

    function createForecastCard(forecast) {
        const date =new Date(forecast.dt * 1000).getDay()
        const cardContainer = document.createElement("div")
        const daysOfWeek = ["Sunday","Monday","Tuesday","Wendsday","Thurstday", "Friday", "Saturday"]
        console.log(date)
        cardContainer.innerHTML = `
        <h1>Monday</h1>
        <h2>september 20 2023</h2>
        <h3>Description</h3>
        <p>humitidy:</p>
        <p>wind:</p>
        <p>pressure:</p>
        `
        document.querySelector("body").append(cardContainer)
    }
})()