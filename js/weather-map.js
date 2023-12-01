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


    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OWM_KEY}&units=imperial`).then(res => res.json())
        .then(data => {
            console.log(data);
            const cityName = data.city.coord.name;
            const forecastList = data.list;
            const weekForecast = forecastByDay(forecastList)
            console.log(weekForecast);
            // createForecastCard(weekForecast[0])
            renderForecast(weekForecast)
        })


    function forecastByDay(forecastList) {
        let dayForecast = [];
        for (let i = 0; i < forecastList.length; i += 8) {
            dayForecast.push(forecastList[i])
        }
        return dayForecast
    }

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

        console.log(dateObjStr);

        const cardContainer = document.createElement("div")
        cardContainer.classList.add("forecastCard")

        console.log(date)
        cardContainer.innerHTML = `
        <h1>${dateObjStr.dayOfWeek}</h1>
        <h2>${dateObjStr.month} ${dateObjStr.dayOfMonth} ${dateObjStr.fullYear}</h2>
        <h2>${maxTemp}/${minTemp}</h2>
        <h3>${description}</h3>
        <img src="http://openweathermap.org/img/w/${ico}.png" alt="" srcset="">
        <p>Humidity:${humidity}</p>
        <p>Wind:${windSpeed}</p>
        `
        document.querySelector("#forecastRender").append(cardContainer)
    }
    function renderForecast(arr){
        arr.forEach((day)=>{
            createForecastCard(day)
        })
    }
    function dateObj(date){
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday", "Saturday"]
        const months = ["January", "February","March","April","May","June","July","August","September","October","November","December"]
        const monthsV2 = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]

        return{
            dayOfWeek: days[date.getDay()],
            month: monthsV2[date.getMonth()],
            dayOfMonth: date.getDate(),
            fullYear: date.getFullYear(),
        }
    }
    function firstLetterUpperCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }


})()