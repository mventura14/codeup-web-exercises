(() => {
    "use strict"

  /*  const newDiv = (r) => {
        const newDiv = document.createElement("div");
        newDiv.innerText = "im good";
        document.querySelector("body").appendChild(newDiv)
        if (r === "y") {
            newDiv.remove()
        }
    }*/

    let rating = 3.8

    function addStarRating(rating, maxStars, appendTo) {

        // document.querySelector(".star-rating")
        for (let i = 1; i <= maxStars; i++) {
            let div = document.createElement("div");

            if (i > rating ) {div.innerHTML = "<i class='bx bx-star star'></i>"}
            if (i > rating && i - 1 < rating - .2) {div.innerHTML = "<i class='bx bxs-star-half star' ></i>"}
            if (i <= rating + .2){div.innerHTML = "<i class='bx bxs-star star' ></i>"; console.log("gg")}

            document.querySelector(`${appendTo}`).append(div)
        }


    }

    addStarRating(rating, 5, ".star-rating")

})()