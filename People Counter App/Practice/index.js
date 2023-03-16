let firstName = "Aamir";
let lastName = "Indi";

let fullName = lastName + " " + firstName;
console.log(fullName);

let name = "Linda";
let greeting = "Hi! there, ";

function greetingLinda() {
  console.log(greeting + " " + name);
}

greetingLinda();

let myPoints = 3;

function add3Points() {
  myPoints += 3;
}

function removal1Points() {
  myPoints -= 1;
}

// let lastPoints = add3Points() + add3Points() +add3Points () - removal1Points() -removal1Points();

add3Points();
add3Points();
add3Points();
removal1Points();
removal1Points();

console.log(myPoints);

//  Nike Shoe

let errorEl = document.getElementById("error");

function error() {
  errorEl.textContent = "Something Went Wrong, Please try again";
}

// Calulator

let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

function add() {
  sumEl.textContent = "Sum: " + (num1 + num2);
//   OR


//   let result = num1 + num2 ;
//   sumEl.textContext = "Sum: " + result;
}

function subtract() {
  sumEl.textContent = "Sum: " + (num1 - num2);
}

function multiply() {
  sumEl.textContent = "Sum: " + (num1 * num2);
}

function divide() {
  sumEl.textContent = "Sum: " + (num1 / num2);
}
