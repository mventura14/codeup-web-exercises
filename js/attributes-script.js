"use strict";

(() => {
    const profilePic = document.querySelector('#profile-pic');
    const profileName = document.querySelector('#profile-name');
    const profileDesc= document.querySelector('#profile-desc');
    const profileCard = document.querySelector('#profile-card')

    console.log(profilePic);



/*    setTimeout(()=>{
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

    */

    const attTest = (maxCount,Interval) => {
        let interval = 2000;
        let step = 0;

        const intervalId = setInterval(()=>{

            switch (step){
                case 0:
                    profilePic.setAttribute('src',"img/son_goku__headshot___bg__by_peculiardoc_dbtqtnu-pre.jpg");
                    break;
                case 1:
                    profileName.innerText = "Goku";
                    break;
                case 2:
                    profileDesc.classList.toggle("text-red-mont")
                    break;
                case maxCount:clearInterval(intervalId);
            }

            profileCard.classList.toggle("background-red")
            step++;
        },interval)


    }

    attTest(10,2000)






})();