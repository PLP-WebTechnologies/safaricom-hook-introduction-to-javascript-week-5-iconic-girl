// Part 1: JavaScript Basics
// Variables and Data Types
let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "coding", "gaming"];
let person = {
    firstName: "Jane",
    lastName: "Smith",
    age: 30
};

console.log("Name: " + name + " (Type: " + typeof name + ")");
console.log("Age: " + age + " (Type: " + typeof age + ")");
console.log("Is student: " + isStudent + " (Type: " + typeof isStudent + ")");
console.log("Hobbies: ", hobbies, "(Type: " + typeof hobbies + ")");
console.log("Person: ", person, "(Type: " + typeof person + ")");

// Operators (Calculator)
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter numbers.");
        return;
    }

    switch (operation) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    document.getElementById("calculator-result").textContent = "Result: " + result;
}
calculator();

// Functions (Greeting)
function greetUser(name) {
    return "Hello, " + name + "!";
}

let userName = prompt("Enter your name to be greeted:");
document.getElementById("greeting-display").textContent = greetUser(userName);

// Part 2: JavaScript Control Structures
// If Statements (Voting Eligibility)
let userAge = parseInt(prompt("Enter your age to check voting eligibility:"));
let votingMessage = userAge >= 18 ? "You are eligible to vote." : "You are not eligible to vote yet.";
document.getElementById("voting-result").textContent = votingMessage;

// Loops
let numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Part 3: Introduction to the DOM
// Selecting and Modifying HTML Elements
document.querySelector("h1").textContent = "JavaScript in Action!";

let dynamicContentDiv = document.getElementById("dynamic-content");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContentDiv.appendChild(newParagraph);