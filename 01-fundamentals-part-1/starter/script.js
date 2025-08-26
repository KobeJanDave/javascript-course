// // JavaScript Fundamentals - Part 1
// // We'll write our code here!


// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
// console.log("js");


// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// // do  not do this!
// // birthYear = 2000;

// const PI = 3.1415;
// console.log(PI);

// var job = 'programmer';
// job = 'teacher';
// console.log(job);

// const country = 'Philippines';
// const language = 'Filipino';

// age = 23;
// age = 24; // this will change

// // good variables names
// //let firstName
// //et mycurrentJob 
// //const PI 

// // bad variable names
// //let 3years
// //let jonas&matilda
// //let now

// console.log("=== DATA TYPES ===");

// // Number
// let id = 100571;
// console.log(id);
// console.log(typeof id); 

// // String
// let lastname = "Hufancia"
// console.log(lastname);
// console.log(typeof lastname);   

// // Boolean
// let JavaScriptIsFun = true;
// console.log(JavaScriptIsFun);
// console.log(typeof JavaScriptIsFun);  

// // Undefined
// let year;
// console.log(year);
// console.log(typeof year);


// let dynamicvariable = 40;
// console.log(typeof dynamicvariable);

// //change to a string
// dynamicvariable = 'I am now a string';
// console.log(typeof dynamicvariable);  

// //change to a boolean
// dynamicvariable = true;
// console.log(typeof dynamicvariable);   


// Basic Operators - Math
console.log("==== MATH OPERATORS ====");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);  

// more math operators
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

console.log("Math operations");
console.log("Addition: " + (10 + 5));
console.log("Substraction;", 20 - 8);
console.log("Multiplication:", 4 * 7); // 28
console.log("Division:", 15 / 3); // 5
console.log("Exponentiation:", 2 ** 3); // 8

// Math with strings!
const firstName = "Jonas";
const lastName = "Doe";
console.log(firstName + " " + lastName); 

console.log("Hello " + "World!");


// Assignment Operators
console.log("==== ASSIGNMENT OPERATORS ====");
let x = 10 + 5; // 15
console.log("x starts as",x);

x += 10; 

x *= 4;

x /= 2

x ++;

x --;
console.log("x starts as",x);

// Comparison Operators
console.log("==== COMPARISON OPERATORS ====");

console.log("Age comparison:");
console.log(ageJonas > ageSarah); 
console.log(ageSarah >= 18);
console.log(ageJonas < ageSarah);

console.log("Number comparison:");
console.log(25 > 20);
console.log(15<10);
console.log(18 >= 18);
console.log(16 <= 15);

const isFullAge = ageSarah >= 18;
console.log("sarah is of full age:", isFullAge);

console.log("complex comparison:");
console.log(now - 1991 > now - 2018); // ageJonas > ageSarah

let z, y;
z = y = 25 - 10 - 5; 
console.log(z, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

////////////////////////////////////
// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// Your code here:

// 1. Calculate BMIs
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

// 2. Create markHigherBMI variable
const markHigherBMI = BMIMark > BMIJohn;

// 3. Log results to console
// log marsks BMI
console.log("Mark's BMI:", BMIMark);
// log johns BMI
console.log("John's BMI:", BMIJohn);   
// log markHigherBMI
console.log("Is Mark's BMI higher than John's?", markHigherBMI);

