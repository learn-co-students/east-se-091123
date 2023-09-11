// ✅ console.log
// console.log("hello");
// ✅ run js file
// ✅ declare variables with let and const

const constantVariable = "hello";
let canBeChanged = "hello";

// console.log(canBeChanged);
canBeChanged = "hello world";
// console.log(canBeChanged);

// ✅ JS 8 data types
// Primitive values = immutable values lowest level of the language
// 1. String
const str = "hello world";
// 2. Number
const num = 1;
// 3. Bigint (+9,000 trillion: good for high precision time stamps, cryptography, financial calculations)
// const bigNum = 166n
// 4. Boolean
false;
true;
// 5. Undefined
// 6. Null
// 7. Symbol

// mutable (talk more about tomorrow)
// 8. Object

// ✅ control flow: if else if else
// if (str) {
//   console.log("the condition was true");
// } else {
//   console.log("the condition was false");
// }
// const temp = 100;
// if tempature is greater than 80  console.log go swimming
// if the tempature is less than 50 console.log stay in doors
// if temp is between 50 and 80 console.log go for a walk

// if (temp > 80) {
//   console.log("go swimming");
// } else if (temp < 50) {
//   console.log("stay in doors");
// } else {
//   console.log("go for a walk");
// }

// functions = set of statements to perform a task
// ✅ define a function called sayHello that will print "Hello world!"
// ✅ have that function return "Hello east-se-091123"
function sayHello() {
  console.log("Hello world!");

  return "Hello east-se-091123";
}

// parameters = placeholder, variable, name in function parentheses

// arguments = real value passed to the function

// ✅ add a parameter cohortName
// ✅ change the return value so it says hello to the cohort (string interpolation or template literals)
function sayHello(cohortName) {
  // console.log(cohortName);
  return `Hello ${cohortName}`;
  // return "Hello " + cohortName;
}

// define a function called whatShouldWeDo
// accept a tempature
// return a string of "go swimming" if the temp is greater than 80
// return a string of "stay indoors" if the temp is less than 40
// return a string of "go for a walk if the temp is between 40 and 80"

function whatShouldWeDo(temperature) {
  if (temperature > 80) {
    return "go swimming";
  } else if (temperature < 40) {
    const blockVar = "block";
    return "stay indoors";
  } else {
    return "Go for a walk! :)";
  }
}
console.log(whatShouldWeDo(100));

// Global Scope - variables declared in the global execution context
// Function Scope - variables and functions inside function body
// - can access variables and functions defined in global scope
// - in global scope cannot access function scoped variables and functions
// Block Scope - Variables declared inside a { } block
// - cannot be accessed from outside the block

let globalScopeVariable = "Potato";

function someFunction() {
  console.log(globalScopeVariable, "before reassignment in function scope");
  globalScopeVariable = "nachos";
  // const functionScopeVariable = "hello from a function";
  // console.log(functionScopeVariable);
  if (true) {
    // console.log(functionScopeVariable);
    console.log(globalScopeVariable, "after in block scope");
  }
}

someFunction();

console.log(globalScopeVariable, "after function call in global scope");

// function declaration and function expression
const variableForFunction = function () {};

const sumNums = (parameter, anotherParameter) => {
  return parameter + anotherParameter;
};
console.log(sumNums(1, 2));

// first-class functions - first-class objects, means they can be treated like any other object
//  - assigned to a variable, passed as values to other functions, returned as the value from another function, etc

//  Higher-order function - function that can take in a function as an argument and or return a function

// function higherOrderFunction(anotherFunction) {
//   console.log(anotherFunction());
//   return function () {};
// }
// higherOrderFunction(sumNums);
// forEach, map, filter

//  callback function - function passed as an argument to another function and the other function will invoke it

// ✅ define a function called checkEmileysSchedule that takes in a time and will return true if that time (hour as a number) is between 10 and 11 otherwise will return false
function checkEmileysSchedule(time) {
  return time >= 10 && time <= 11;
}

function checkAdamsSchedule(time) {
  return time >= 12 && time <= 13;
}

// ✅ define a higher-order function called areYouAvailable that takes in another function as an argument as well as a time (hour as a number) and returns whether the person is available at that time
function areYouAvailable(callbackFunction, time) {
  const available = callbackFunction(time);
  if (available) {
    console.log("Yay they are free!");
  } else {
    console.log("try another time :(");
  }
}

areYouAvailable(checkEmileysSchedule, 12.75);
areYouAvailable(checkAdamsSchedule, 12.5);
