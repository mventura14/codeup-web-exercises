document.querySelector("#gitUserSubmit").addEventListener("click",(e)=>{
    e.preventDefault()
    let gitUser = document.querySelector("#gitUser").value

    fetch(`https://api.github.com/users/${gitUser}/events/public`, {headers: {'Authorization': GH_KEY}}).then(response => response.json()).then(data =>{
            let lastPushEvent = data.filter((n)=> n.type === "PushEvent")[0].created_at;
            console.log(data);
            const div = document.createElement("div");
            const h1 = document.createElement("h1");
            const h2 = document.createElement("h2");

            h1.innerText = `${data[0].actor.display_login}`;
            h2.innerText = `Last push event was on ${lastPushEvent}`;
            div.append(h1);
            div.append(h2);

            document.querySelector("body").append(div);
        }
    )


})




