fetch('https://api.github.com/users/mventura14/events', {headers: {'Authorization': 'js/keys.js'}}).then(response => response.json()).then(data =>(
    console.log(data)
))