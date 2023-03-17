// let age = 22;

// if (age <= 20){
//     console.log("You can not enter the club! ");
// }else {
//     console.log("Enter");
// }

let age = 100;

if (age < 100) {
  console.log("Not eligible");
} else if (age === 100) {
  console.log("Here is the birthday card the king!");
} else {
  console.log("Not eligible, you have already gotten one");
}

// ARRAY

let experience = [
  "Currently, I have zero experience :/",
  "I'm in 3rd year of B.E in AI&DS",
  "My skills are HTML, CSS, JS, REACT, SQL ",
];

console.log(experience[1]);
console.log(experience[2]);
console.log(experience[0]);
console.log(experience.length);

let mySelf = [(name = "Aamir"), (age = 21), (pizza = true)];

console.log(mySelf);

let messages = [
  "hey, how's its going?",
  "I'm good, Thank you! What about you ?",
  "All good. Sid is working on a porject lately.",
];

let newMessage = "Same here!";

// Pushing a new variable in an array
messages.push(newMessage);

console.log(messages);

// Removing a variable in an array
messages.pop(newMessage);
// OR messages.pop();

console.log(messages);

// for loop

for (let count = 1; count < 11; count += 1) {
  console.log(count);
}

for (let i = 10; i < 101; i += 10) {
  console.log(i);
}

// i += 1 / i++

// Using for loop and array
// DRY - Don't Repeat Yourself

let cards = [7, 3, 9];

for (i = 0; i < cards.length; i += 1) {
  console.log(cards[i]);
}

let sentence = ["Hello!", "My", "Name", "is", "Aamir"];
let greetingEl = document.querySelector("#greeting-el");

for (i = 0; i < sentence.length; i++) {
  console.log(sentence[i]);
  greetingEl.textContent += sentence[i] + " ";
}

let player1Time = 102;
let player2Time = 107;

function totalRaceTime() {
  return player1Time + player2Time;
}

let totalTime = totalRaceTime();
console.log(totalTime);

let randomNumber = Math.random() * 6;
console.log(randomNumber);

let flooredNumber = Math.floor(3.45632);
console.log(flooredNumber);

let randomFlooredNumber = Math.floor(Math.random() * 6);
console.log(randomFlooredNumber);

// DICE RANDOM NUMBER

function rollDice() {
  let diceRandomNumber = Math.floor(Math.random() * 7) + 1;
  return diceRandomNumber;
}
console.log(rollDice());

// Logical AND Operator

let sid = false;
let affan = true;

if (sid && affan === true) {
  generateCertificate();
}

function generateCertificate() {
  console.log("Generating Certificate...");
}
// Logical OR Operator

let faiz = false;
let tushar = true;

if (faiz || tushar === true) {
  generateCertificate();
}

// OBJECTS AND FUNCTIONS

let person = {
  name: "Aamir",
  age: 21,
  country: "India",
};

function logData() {
  console.log(
    person.name +
      " is " +
      person.age +
      " years old and lives in " +
      person.country
  );
}

logData();

let age1 = 15;

if (age < 6) {
  console.log("free");
} else if (age < 18) {
  console.log("child discount");
} else if (age < 27) {
  console.log("student discount");
} else if (age < 66) {
  console.log("full price");
} else {
  console.log("senior citizen discount");
}

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

console.log("The 5 Largest Countries in the world ");
for (i = 0; i < largeCountries.length; i++) {
  console.log("- " + largeCountries[i]);
}

let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

largeCountries2.pop();
largeCountries2.push("Pakistan");
largeCountries2.shift();
largeCountries2.unshift("China");
console.log(largeCountries2);

console.log("The 5 Largest Countries in the world ");
for (i = 0; i < largeCountries2.length; i++) {
  console.log("- " + largeCountries2[i]);
}

// LOGICAL AND OPERATOR

let dayOfMonth = 13;
let weekday = "Friday";

if (dayOfMonth === 13 && weekday === "Friday") {
  console.log("Scary");
}

// RANDOM NUMBERS

let hands = ["rock", "paper", "scissor"];

function getHands() {
  let randomNumber = Math.floor(Math.random() * 3);
  return hands[randomNumber];
}

console.log(getHands());

// last

let fruits = ["apple", "orange", "apple", "apple", "orange"];

let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function sortFruit() {
  for (i = 0; i < fruits.length; i++) {
    if (fruits[i] === "apple") {
      appleShelf.textContent += "apple";
    } else if (fruits[i] === "orange") {
      orangeShelf.textContent += "orange";
    }
  }
}

sortFruit();
