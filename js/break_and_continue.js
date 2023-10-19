"use strict"


let num = parseInt(prompt('Please choose an odd number between 1 - 50'))

while (0 < 1) {
    if ((num >= 1) && (num <= 50) && num % 2 !== 0) {
        console.log(`Number to skip is: ${num}`)
        break;
    }
    num = parseInt(prompt('Please choose an odd number between 1 - 50'))
}

// alert(`Number to skip is: ${num}`)

for (let i = 0; i < +50; i++) {
    if (i === num) {
        console.log(`Yikes! Skipping number: ${i}`)
        continue;
    }

    if (i % 2 === 0) {
        continue;
    }
    console.log(`Here is an odd number: ${i}`)


}
