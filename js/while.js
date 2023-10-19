"use strict"
console.log("while linked")

/*
let num1 = 0;
let num2 = 1;
while (num1 < 16){
    num1++
    console.log(num2 = num2 * 2)
}*/


let ranNum = Math.floor(Math.random() * (100 - 50) + 50 + 1)

console.log(`${ranNum} ice cream cones need to be sold`)



do{ let x = Math.floor(Math.random() * 5) + 1;
    if (ranNum === 0){
        console.log(`Yay! I sold them all!`)
        break;
    }
    if (ranNum >= x){
        console.log(`${x} cones sold`);
        ranNum = ranNum - x;
    } else if(ranNum < x ){

        console.log(`Cannot sell you ${x} cones i only have ${ranNum}.`)
        break;
    }

}while(ranNum >= 0) ;