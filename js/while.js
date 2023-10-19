"use strict"

function w1() {

    let num1 = 0;
    let num2 = 1;
    while (num1 < 16) {
        num1++
        console.log(num2 = num2 * 2)
    }
}

// w1()

function dW() {
    let totalCones = Math.floor(Math.random() * (100 - 50) + 50 + 1)
    console.log(`${totalCones} ice cream cones need to be sold`)
    do {
        let x = Math.floor(Math.random() * 5) + 1;
        if (totalCones >= x) {
            console.log(`${x} cones sold`);
            totalCones = totalCones - x;
        } else if (totalCones < x) {
            console.log(`Cannot sell you ${x} cones i only have ${totalCones}.`);
        }
        if (totalCones === 0) {
            console.log(`Yay! I sold them all!`)
            break;
        }
    } while (totalCones > 0);
}

//dW()