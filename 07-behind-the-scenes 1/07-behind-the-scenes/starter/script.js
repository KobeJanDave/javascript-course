// // // 'use strict';

// // // // console.log(varX); 
// // // // // console.log(letX); 
// // // // // console.log(constX);

// // // // var varX = 1;
// // // // let letX = 2;
// // // // const constX = 3;

// // // // console.log(addDecl(5, 3));
// // // // function addDecl(a, b) {
// // // //   return a + b;
// // // // }

// // // // const addExpr = function(a, b) {
// // // //   return a + b;
// // // // };

// // // // const addArrow = (a, b) => a + b;


// // // const person = {
// // //   name: 'Jonas',
// // //   greet: function () {
// // //     console.log(`Hello, I am ${this.name}`);
// // //   },
// // // };

// // // person.greet();
 
// // // const anotherPerson = { name: 'Sarah' };

// // // // Borrow greet function
// // // anotherPerson.greet = person.greet;

// // // // Display or run the greet function for anotherPerson
// // // anotherPerson.greet();

// // // // Detached function
// // // const greetFunction = person.greet;

// // // greetFunction();

// // const obj = {
// //   name: 'Object',

// //   regularMethod: function () {
// //     console.log('Regular:', this.name); 
// //   },

// //     arrowMethod: () => {    
// //     console.log('Arrow:', this.name); 
// //   },
// // };

// // obj.regularMethod(); 

// // obj.arrowMethod();

// // // Before running this code, predict what each method will output
// // const quiz = {
// //   name: 'Quiz Object',
// //   regularMethod() {
// //     console.log('Regular:', this.name);
// //   },
// //   arrowMethod: () => {
// //     console.log('Arrow:', this.name);
// //   },
// // };

// // quiz.regularMethod(); // Predict: ?
// // quiz.arrowMethod(); // Predict: ?

// const timer = {
//   name: 'Timer',

//   // Old approach with self = this
//   start: function () {
//     console.log(`${this.name} starting...`);
//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },

//   // Modern approach with arrow function
//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`); // this works!
//     }, 1500);
//   },
// };

// timer.start(); // Uses self = this approach
// timer.startModern(); // Uses arrow function approach

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

  arrowFunction: () => {
    // console.log(arguments); // ReferenceError: arguments is not defined
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};

functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');