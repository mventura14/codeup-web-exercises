"use strict";
import greeting from "./greeting-logic.js";
(()=>{

    document.querySelector("#submit").addEventListener("click",()=>{
        let userName;
        document.querySelector(".greeting-msg").innerHTML = "";
        userName = document.querySelector("#name").value;
        let h2 = document.createElement("h2");
        h2.innerText =  `${greeting()}, ${userName}`;
        document.querySelector(".greeting-msg").append(h2);
    })

})()