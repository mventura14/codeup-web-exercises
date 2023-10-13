"use strict"

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");
let favoriteColor = prompt("What is your favorite color?");
alert(`Cool, ${favoriteColor} is my favorite too!`);


let mermaidDays = prompt("How many days are you renting The little mermaid?");
let brotherBearDays = prompt("How many days are you renting Brother Bear?");
let herculesDays = prompt("How many days are you renting Hercules?");
let pricePerDay = prompt("What is the price per day per movie?");
let totalCost = ((mermaidDays * pricePerDay) + (brotherBearDays * pricePerDay) + (herculesDays * pricePerDay));
alert(`Your total is ${totalCost}`);


alert("Lets Calculate your income.");
let gP = prompt("How much does Google pay?");
let aP = prompt("How much does Amazon pay?");
let fP = prompt("How much does Facebook pay?");
let gH = prompt("How many hours did you work at google?");
let aH = prompt("How many hours did you work at Amazon?");
let fH = prompt("How many hours did you work at Facebook?");
let totalIncome = (gP * gH)+ (aP * aH) + (fP * fH);
alert(`You total income is ${totalIncome}`);
