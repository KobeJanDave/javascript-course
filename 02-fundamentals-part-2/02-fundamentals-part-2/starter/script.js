// // // console.log("part 2 is now working"); 

// // // // Function -  Declaration and Expression
// // // console.log("=== FUNCTION ===");

// // // function logger() {
// // //     console.log("My name is Kobe");
// // // }

// // // logger();
// // // logger();
// // // logger();

// // // function fruitProcessor(apples, oranges) {
// // //     console.log(apples, oranges);
// // //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // //   return juice;
// // // }

// // // const juice1 = fruitProcessor(5, 0);
// // // const juice2 = fruitProcessor(2, 4);
// // // const juice3 = fruitProcessor(3, 2);


// // // // Function Expressions
// // // const calAge = function (birthyeasr) {
// // //     return 2025 - birthyeasr;
// // // };

// // // console.log(calAge(2000));
// // // console.log(calAge(1991));

// // // function introduce(firstName, lastName, age) {
// // //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// // //   return introduction;
// // // }

// // // function calcAge(birthYear, currentYear) {
// // //   // Parameters
// // //   const age = currentYear - birthYear;
// // //   return age;
// // // }

// // // console.log(introduce("Kobe", "Hufancia", 23)); 

// // // function yearsUntilRetirement(birthYear, firstName) {
// // //   const age = calcAge(birthYear); 
// // //   const retirement = 65 - age;

// // //   if (retirement > 0) {
// // //     return `${firstName} retires in ${retirement} years`;
// // //   } else {
// // //     return `${firstName} has already retired!`;
// // //   }
// // // }

// // // console.log(yearsUntilRetirement(2002, "Kobe"));

// // // //global scope
// // // const globalVar = "I am global";

// // // function testscope() {
// // //     const localVar = "I am local";
// // //     console.log(globalVar); 
// // //     console.log(localVar);
// // // }

// // //     testscope();
    
// // // ////////////////////////////////////
// // // // Coding Challenge #1

// // // // Function to calculate average of 3 scores
// // // function calcAverage(score1, score2, score3) {
// // // const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

// // // }

// // // // Function to check winner
// // // function checkWinner(avgDolphins, avgKoalas) {
// // //   const checkWinner = (avgDolphins, avgKoalas) => {
// // //   if (avgDolphins >= 2 * avgKoalas)  (${avgDolphins vs. ${avgKoalas}};
    
// // //     return `Dolphins win (${avgDolphins} vs. ${avgKoalas}})`;
// // //     } else if (avgKoalas >= 2 * avgDolphins) {
    
// // //       return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// // //     } else {
// // //         return `No team wins... `(${avgDolphins} vs. ${avgKoalas})``;

// // //     };
    
// // // // Test Data 1
// // // let scoreDolphins = calcAverage(44, 23, 71);
// // // let scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // Test Data 2
// // // scoreDolphins = calcAverage(85, 54, 41);
// // // scoreKoalas = calcAverage(23, 34, 27);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));



// // const student1Grade = 85;
// // const students2Grade = 92;
// // const student3Grade = 78;

// // const grade = [85, 92, 78, 96, 88];
// // console.log(grades);

// // const friends =["Michael", "Marcel", "John"];
// // console.log(friends);

// // const mixed = ["Jonas", 27, true, friends];
// // console.log(mixed);

// // const years = new Array(1991, 1984, 2008, 2020);
// // console,loge(years);

// // //array starts counting at 0
// // console.log(friends[0]);
// // console.log(friends[2]);

// // console.log(friends,length);
// // //change tha value per index
// // friends [1] = "Marcel";
// // console,log(friends);

// // const firstName = "Kobe";
// // const Kobe = [firstName, "Hufancia", 2025 - 2002];
// // console.log(Kobe);

// // const calAge = function (birthYear) {
// //     return 2025 - birthYear;
// // }

// // const ages = [calAge(2002), calAge(2003), calAge(1991)];
// // console.log(ages);

// // // Array methods - Adding elements
// // //add an item at the end of the list
// // const newLenght = friends.push("Steven");
// // console.log(friends);
// // console.log(newLenght);
// // const newLength2 = friends1.push("John");
// // console.log(friends);

// // //add the first item in a list
// // friends.unshift("Marla");
// // console.log(friends);

// // //removing elements
// // const popped = friends.pop();
// // const popped2 = friends.pop();
// // console.log(popped);
// // console.log(popped2);
// // console.log(popped3);

// // const shifted = friends.shift();
// // console.log(shifted);
// // console.log(friends);

// // // find an elements
// // // IndeOf

// // console.log(friends.indexOf("Michael"));

// // console.log(friends.indexOf("Marla"));
// // console.log(friends.indexOf("John"));

// // // Includes()
// // console.log(friends.includes("Michael"));
// // console.log(friends.includes("Maralo"));

// // // Array Iteration - Loops

// // for (let i = 0; i < friends.length; i++) {
// //     console.log(friends[i]); `Michael`, `Jay`, `Peter`
// // }

// // friends.forEach((friend, index) => {
// //   console.log(`Friend ${index + 1}: ${friend}`);
// // });


// // for (let i = 0; i < grades.length; i++) {
// //   total += grades[i];
// // }

// // const average = total / grades.length;
// // console.log(`Average grade: ${average.toFixed(2)}`);

// // let passedCount = 0;
// // grades.forEach((grade) => {
// //   if (grade >= 70) passedCount++;
// // });
// // console.log(`${passedCount} out of ${grades.length} students passed`);


// // ////////////////////////////////////
// // // Coding Challenge #2 - Student Grade Manager

// // // Function to calculate average
// // function calculateAverage(grades) {
// //  let sum = 0;
// //  for (let i = 0; i < grades.length; i++) {
// //    sum += grades[i];
// //  }
// //  return sum / grades.length;
// // }
// // // Function to find highest grade
// // function findHighestGrade(grades) {
// //  let highest = grades[0];
// //  for (let i = 1; i < grades.length; i++) {
// //    if (grades[i] > highest) {
// //      highest = grades[i];
// //    }
// //  }
// //  return highest;
// // }
// // // Function to find lowest grade
// // function findLowestGrade(grades) {
// //  let lowest = grades[0];
// //  for (let i = 1; i < grades.length; i++) {
// //    if (grades[i] < lowest) {
// //      lowest = grades[i];
// //    }
// //  }
// //  return lowest;
// // }
// // // Function to count passing students
// // function countPassing(grades, passingGrade) {
// //  let passingCount = 0;
// //  for (let i = 0; i < grades.length; i++) {
// //    if (grades[i] >= passingGrade) {
// //      passingCount++;
// //    }
// //  }
// //  return passingCount;
// // }
// // // Generate complete report
// // const averages = calculateAverage(grades);
// // const highest = findHighestGrade(grades);
// // const lowest = findLowestGrade(grades);
// // const passing = countPassing(grades, 70);
// // console.log("=== GRADE REPORT ===");
// // console.log(`Average: ${average.toFixed(2)}`);
// // console.log(`Highest: ${highest}`);
// // console.log(`Lowest: ${lowest}`);
// // console.log(`Passing students: ${passing} out of ${grades.length}`);


// // problems with arrays
// const kobeArray = [
//   "Kobe",
//   "Hufancia",
//   2025 - 2002,
//   "student",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// console.log(kobeArray[0]);
// console.log(kobeArray[1]); 

// const kobeObject = {
//   firstName: "Kobe",
//   lastName: "Hufancia",
//   age: 2025 - 2002,
//   job: "student",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
// }
// console.log(kobeObject);

// // Property access methods
// console.log(kobeObject.firstName);
// console.log(kobeObject["lastName"]);
// console.log(kobeObject.age);

// // Bracket notation
// console.log(kobeObject["firstName"]);
// console.log(kobeObject["lastName"]);
// console.log(kobeObject["age"]);

// const nameKey = "Name";
// console.log(kobeObject["first" + nameKey]);

// // Modifying existing properties
// kobeObject.job = "programmer";
// kobeObject["age"] = 23;
// console.log(kobeObject);

// // Adding new properties
// kobeObject.location = "Philippines";
// kobeObject["twitter"] = "kobeprogrammer";
// kobeObject.hasDriversLicense = true;
// console.log(kobeObject);

// // When to use dot vs. bracket notation
// const property = "job";
// console.log(kobeObject[property]);

// // "1. Property name is in a variable"
// // "2. Property name has spaces or special characters"
// // "3. Property name is computed/dynamic"
// // "Otherwise, prefer dot notation"

// // Objects vs. Arrays Decision Making

// // Arrays
// const listOfYears = [1991, 2002, 2003, 2020];
// const shoppingList = ["bread", "milk", "eggs", "fruits"];
// const testscores = [85, 92, 78, 96, 88];

// // Objects
// const person = {
//   name: "Kobe",
//   age: 23,
//   occupation: "student",
// };
// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020, 
//   color: "blue",
// };

// // objects can contain arrays,arrays can contain objects
// const student = {
//   name: "Kobe",
//   age: 23,
//   grades: [85, 92, 78, 96, 88],
//   address: {
//     street: "123 Main St",
//     city: "Manila",
//     country: "Philippines",
//   },
// };

// console.log(student);
// console.log(student.grades);
// console.log(student.address.city);

// // oBject methods
// const kobe = {
//   firstName: "Kobe",
//   lastName: "Hufancia",
//   birthYear: 2002,
//   job: "student",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2025 - birthYear;
//   // },

//   // calcAge: function () {
//   //   return 2025 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2025 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${
//       this.hasDriversLicense ? "a" : "no"
//     } driver's license.`;
//   },
// };

// console.log(kobe.calcAge());
// console.log(kobe.age); 
// console.log(kobe.getSummary());

// ////////////////////////////////////
// // Coding Challenge #3 - User Profile System

// const user = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   birthYear: 1995,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],
//   isActive: true,

//   // Calculate age method
//   calcAge: function () {
//     // Calculate age and store as this.age
//     // Hint: Use new Date().getFullYear() for current year
//     // Your code here
//     this.age = new Date().getFullYear() - this.birthYear;
//     return this.age;
//   },

//   // Add friend method
//   addFriend: function (name, status = "active") {
//     // Add new friend object to this.friends array
//     // Return the new length of friends array
//     // Your code here
//     this.friends.push({ name: name, status: status });
//     return this.friends.length;
//   },

//   // Get active friends count
//   getActiveFriends: function () {
//     // Filter friends array to count only active friends
//     // Hint: use this.friends.filter()
//     // Your code here
//     this.activeFriendsCount = this.friends.filter(
//       (friend) => friend.status === "active"
//     ).length;
//   },

//   // Toggle active status
//   toggleStatus: function () {
//     // Switch this.isActive between true and false
//     // Return the new status
//     // Your code here
//     this
//   },

//   // Generate profile summary
//   getSummary: function () {
//     // Create a social media style profile summary
//     // Include: name, age, location, status, friend counts, interests
//     // Use template literals for nice formatting
//     // Your code here
//     this.calcAge();
//     this.getActiveFriends();
//     return `${this.firstName} ${this.lastName}, age ${this.age}, from ${
//       this.location
//     }. Status: ${this.isActive ? "Active" : "Inactive"}. Interests: ${
//       this.interests.join(", ")
//     }. Friends: ${this.friends.length} total, ${this.activeFriendsCount} active.`;
//   },
// };

// // Test your user profile system
// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());


// Select DOM elements

// 1st method
// querySelector - uses CSS selectors

const message = document.querySelector(".message");
console.log(message);

const button = document.querySelector(".btn-country");
console.log(button);

const heading = document.querySelector("h1");
console.log(heading);

console.log(message.textContent);
console.log(button.id);
console.log(heading.tagName);
console.log(heading.textContent);

// getElementById
const buttonById = document.getElementById("btn-country");
console.log(buttonById);
console.log(buttonById === button); 

// querySelectorAll - multiple elements
const allparagraphs = document.querySelectorAll("p");
console.log(allparagraphs);
console.log(allparagraphs[0]);

// modifying elements
const message1 = document.querySelector(".message");

console.log(message1.textContent);
message1.textContent = "Hello, welcome to the JavaScript course!";
console.log(message1.textContent);

// innerHTML
message1.innerHTML = "<strong>Hello, welcome to the JavaScript course!</strong>";

// innerText
console.log(message1.innerText);

// input elements valies
const input = document.querySelector(".guess");

console.log(input.value);
input.value = "default text";

const heading1 = document.querySelector("h1");
heading1.style.color = "red";
heading1.style.backgroundColor = "blue";
heading1.style.fontSize = "3rem";

const button = document.querySelector("#btn");
button.style.padding = "20px";
button.style.borderRadius = "10px";


