"use strict";

/* ########################################################################## */
console.log("JS Linked")

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

/*
function analyzeColor(color){
    if (color.toLowerCase() === "red"){
        return `Strawberries are ${color}.`
    } else if (color.toLowerCase() === "blue"){
        return `There is no natural ${color} in nature.`
    } else if (color.toLowerCase() === "orange"){
        return `The sun seems to be ${color}.`
    } else
        return `It seems like ${color} is not in the database.`
}


console.log(analyzeColor("red"));
console.log(analyzeColor("blue"));
console.log(analyzeColor("orange"));
console.log(analyzeColor("gray"));
*/




// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor))



/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


function analyzeColor(color) {
    switch (color.toLowerCase()) {
        case "red":
            return `Strawberries are ${color}.`;
            break;
        case "blue":
            return `There is no natural ${color} in nature.`;
            break;
        case "orange":
            return `The sun seems to be ${color}.`
        default:
            return `It seems ${color} is not in the database.`

    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let color = prompt('What is your favorite color?').toLowerCase()
alert(analyzeColor(color))




/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(num,total){
    switch (num){
        case 1:
            return `Lucky number 1, Your total after 10% discount is $${(total - total *.1).toFixed(2)}.Before it was $${total}.`;
            break;
        case 2:
            return `Lucky number 2, Your total after 25% discount is $${(total - total *.1).toFixed(2)}.Before it was $${total}.`;
            break;
        case 3:
            return `Lucky number 3, Your total after 35% discount is $${(total - total * .1).toFixed(2)}.Before it was $${total}.`;
            break;
        case 4:
            return `Lucky number 4, Your total after 50% discount is $${(total - total *.1).toFixed(2)}.Before it was $${total}.`;
            break;
        case 5:
            return `Lucky number 5, Your total after 100% discount is $${(total - total *.1).toFixed(2)}.Before it was $${total}.`;
            break ;

        default:
            return `Sorry, no discount. Your total is $${total.toFixed(2)}`;
    }


}

/*
console.log(calculateTotal(0,100));
console.log(calculateTotal(1,100));
console.log(calculateTotal(2,100));
console.log(calculateTotal(3,100));
console.log(calculateTotal(4,100));
console.log(calculateTotal(5,100));
*/

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
const luckyNumber = Math.floor(Math.random() * 6);

let total = parseFloat(prompt('What is your to bill?'))
alert(calculateTotal(luckyNumber,total))

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function isEven(num){
        switch (num % 2 === 0) {
            case true:
                return `${num} is even`;
                break;
            default:
                return `${num} is odd`
        }
}

function isPos(num){
    switch (num >= 0) {
        case true:
            return `${num} is a positive number.`;
            break;
        default:
            return `${num} is a negative number.`
    }
}



if (confirm("Would you like to enter a number?")) {
    let userNum = parseFloat(prompt("Please enter your number."));
    if (!isNaN(userNum)) {
        alert(isEven(userNum));
        alert(`${userNum} + 100 = ${userNum + 100}`);
        alert(isPos(userNum));
    }
    else {alert("That's not a number...");}
}




