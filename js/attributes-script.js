"use strict";

(() => {
    const profilePic = document.querySelector('#profile-pic');
    const profileName = document.querySelector('#profile-name');
    const profileDesc= document.querySelector('#profile-desc');
    const profileCard = document.querySelector('#profile-card')

    console.log(profilePic);



    setTimeout(()=>{
        profilePic.setAttribute('src',"img/son_goku__headshot___bg__by_peculiardoc_dbtqtnu-pre.jpg")
    },2000);

    setTimeout(()=>{
        profileName.innerText = "Goku"
    },4000);

    setTimeout(()=>{
        profileDesc.classList.toggle("text-red-mont")
    },6000);

    let count = 0;
    let max = 10;
    let interval = 2000;

    const intervalId = setInterval( () => {
        if (count >= max) {
            clearInterval(intervalId);
        } else {
            profileCard.classList.toggle("background-red")
            count++;
        }
    }, interval);









})();