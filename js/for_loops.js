"use strict"

console.log("Linked")


//------------------------------------------------- Example 2

function showMultiplicationTable(x) {
    for (let y = 1; y <= 10; y++) {
        console.log(`${x} * ${y} = ${x * y}`)
    }
}


//------------------------------------------------ Example 3

/*
for (let x = 0; x <= 10; x++) {

    let randomNumber = Math.floor(Math.random() * 180 + 20)

    if (randomNumber % 2 === 0) {
        console.log(`${randomNumber} is even.`)
    } else {
        console.log(`${randomNumber} is odd`)
    }
}*/

//------------------------------------------------ Example 4

/*
let z = "";

for (let x = 1; x < 10; x++){
    let y = "1"
    console.log((x * (z = z + y)))
}*/

//---------------------------------------------- Example 5

/*
for (let x = 0, y = 100; x < 20; x++){
    console.log(y)
    if(y === 5){
        break;
    }
    y = y - 5
}*/

//---------------------------------------------- Example 6

