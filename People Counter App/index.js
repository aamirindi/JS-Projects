// 1
let myAge = 35;
let humanDogRatio = 7;

let myDogAge = myAge * humanDogRatio;

console.log(myDogAge);


// 2

let count = 50;
console.log(count);

count = count * 2;
console.log(count);

count = count - 75;
console.log(count);

count = count + 45;

console.log(count);

// 3 

function forty (){
    console.log(42);
}

forty();

// 4

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function lap(){
    let lapTime = lap1 + lap2 + lap3;
    console.log(lapTime)
}

// console.log(lapTime);

lap();

// 5


let lapCompleted = 0;
function lapRoll(){
    lapCompleted = lapCompleted + 1;
}
lapRoll();
lapRoll();

lapRoll();

// 6

let username = "per";

let message = "You have tree new notifications";

let messageToUser = message + ", " + username + "!";

console.log(messageToUser);

// 7

let name = "Aamir";
let greeting = "Hi!, my name is ";

let myGreeting = greeting+ name;

console.log(myGreeting);

// 8

let saveLogOut = document.getElementById("count-el"); 

function saveLogOut(){
    console.log(count);
    saveLogOut.innerText = count = 0;

}


P

let welcomeEl = document.getElementById("welcome-el");


let name2 = "Aamir";
let greeting2 = "Welcome back "

welcomeEl.innerText = greeting2 +" "+ name2; 

welcomeEl.innerText += "🫠";