"use strict";
(() => {

    let position = 0;
    document.addEventListener("keyup", e => {
        const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "a", "b", "Enter"]
        if (konamiCode[position] === e.key) {
            position++
        } else {
            position = 0
        }
        if (position === konamiCode.length) {
            position = 0
            document.querySelector("h1").innerText = "You have added 30 lives!";
            easterEgg()
        }
        console.log(e.key)
    });

    const easterEgg = () => {
        let count = 0;
        let max = 30;
        let interval = 200;
        let heartHtml = "";
        // let heart = "<div class=\"heart-con\"><div class=\"heart\"></div></div>"
        let heart = "<div class=\"heart-con\"><img class=\"heart\" src=\"img/heart-solid.svg\" alt=\"\"></div>"

        /*Render hearts at an interval*/
        const intervalID = setInterval(() => {
            if (count === max - 1) {
                clearInterval(intervalID)
            }
            count++;
            heartHtml += heart;
            document.querySelector(".heart-display").innerHTML = heartHtml;
            console.log(document.querySelectorAll(".heart"))

            /*Max Count reached apply event listeners*/
            if (document.querySelectorAll(".heart").length === 30) {
                console.log("its 30")
                for (let heart of document.querySelectorAll(".heart")){
                    heart.addEventListener("mouseenter",(e)=>{
                        e.target.classList.add("hide");
                            console.log(document.querySelectorAll(".hide"))
                        if(document.querySelectorAll(".hide").length === 30){
                            console.log("gameover")
                            document.querySelector(".heart-display").innerHTML = "<h1 class='game-over'>Game Over</h1>";
                            document.querySelector(".game-over").addEventListener("click",()=>{
                                // window.location.reload();
                                window.location = 'https://www.youtube.com/watch?v=kdOPBP9vuZA'
                            })
                        }
                    })

                }
            }
        }, interval)
    }


})()