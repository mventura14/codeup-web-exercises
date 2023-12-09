function generateStarRating(rating, maxStars) {

    // document.querySelector(".star-rating")
    for (let i = 1; i <= maxStars; i++) {
        let div = document.createElement("div")

        if (i > rating ) {div.innerHTML = "<i class='bx bx-star star'></i>"}
        if (i > rating && i - 1 < rating - .2) {div.innerHTML = "<i class='bx bxs-star-half star' ></i>"}
        if (i <= rating + .2){div.innerHTML = "<i class='bx bxs-star star' ></i>"; console.log("gg")}

        document.querySelector(".star-rating").append(div)
    }


}