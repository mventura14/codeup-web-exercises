"use strict";
(()=>{
    function animationOffOn(arr,offClass,offInterval,onClass,onInterval,delay){
        /*
        arr:
        offInterval: 200,
        onInterval: 200,
        delay: 400,
        */
        let i = 0;
        let i2 = 0;
        let intervalId = setInterval(() => {
            if (i >= arr.length) {
                clearInterval(intervalId);
                console.log('All done');
            } else {
                arr[i].classList.add("slit-out-vertical")
                arr[i].classList.remove("slit-in-vertical")
                i++;
            }
        }, 200)
        setTimeout(()=>{
            let intervalId2 = setInterval(() => {
                if (i2 >= arr.length) {
                    clearInterval(intervalId2);
                    console.log('almost');
                } else {
                    arr[i2].classList.remove("slit-out-vertical")
                    arr[i2].classList.add("slit-in-vertical")
                    i2++;
                }
            }, 200)
        }, 400)
    }






})()