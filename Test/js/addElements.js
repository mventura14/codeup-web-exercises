(() => {
    "use strict"

    const newDiv = (r)=>{
        const newDiv = document.createElement("div");
        newDiv.innerText = "im good";
        document.querySelector("body").appendChild(newDiv)
        if (r === "y"){
            newDiv.remove()
        }
    }

    newDiv()
    newDiv()
    setTimeout(newDiv,7000)
})()