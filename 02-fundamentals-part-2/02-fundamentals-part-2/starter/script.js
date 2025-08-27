// console.log("part 2 is now working"); 

// // Function -  Declaration and Expression
// console.log("=== FUNCTION ===");

// function logger() {
//     console.log("My name is Kobe");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);


// // Function Expressions
// const calAge = function (birthyeasr) {
//     return 2025 - birthyeasr;
// };

// console.log(calAge(2000));
// console.log(calAge(1991));

// function introduce(firstName, lastName, age) {
//   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//   return introduction;
// }

// function calcAge(birthYear, currentYear) {
//   // Parameters
//   const age = currentYear - birthYear;
//   return age;
// }

// console.log(introduce("Kobe", "Hufancia", 23)); 

// function yearsUntilRetirement(birthYear, firstName) {
//   const age = calcAge(birthYear); 
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} has already retired!`;
//   }
// }

// console.log(yearsUntilRetirement(2002, "Kobe"));

// //global scope
// const globalVar = "I am global";

// function testscope() {
//     const localVar = "I am local";
//     console.log(globalVar); 
//     console.log(localVar);
// }

//     testscope();
    
// ////////////////////////////////////
// // Coding Challenge #1

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas)  (${avgDolphins vs. ${avgKoalas}};
    
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas}})`;
//     } else if (avgKoalas >= 2 * avgDolphins) {
    
//       return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//     } else {
//         return `No team wins... `(${avgDolphins} vs. ${avgKoalas})``;

//     };
    
// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));



const student1Grade = 85;
const students2Grade = 92;
const student3Grade = 78;

const grade = [85, 92, 78, 96, 88];
console.log(grades);

const friends =["Michael", "Marcel", "John"];
console.log(friends);

const mixed = ["Jonas", 27, true, friends];
console.log(mixed);

const years = new Array(1991, 1984, 2008, 2020);
console,loge(years);

//array starts counting at 0
console.log(friends[0]);
console.log(friends[2]);

console.log(friends,length);
//change tha value per index
friends [1] = "Marcel";
console,log(friends);

const firstName = "Kobe";
const Kobe = [firstName, "Hufancia", 2025 - 2002];
console.log(Kobe);

const calAge = function (birthYear) {
    return 2025 - birthYear;
}

const ages = [calAge(2002), calAge(2003), calAge(1991)];
console.log(ages);

// Array methods - Adding elements
//add an item at the end of the list
const newLenght = friends.push("Steven");
console.log(friends);
console.log(newLenght);
const newLength2 = friends1.push("John");
console.log(friends);

//add the first item in a list
friends.unshift("Marla");
console.log(friends);

//removing elements
const popped = friends.pop();
const popped2 = friends.pop();
console.log(popped);
console.log(popped2);
console.log(popped3);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

// find an elements
// IndeOf

console.log(friends.indexOf("Michael"));

console.log(friends.indexOf("Marla"));
console.log(friends.indexOf("John"));

// Includes()
console.log(friends.includes("Michael"));
console.log(friends.includes("Maralo"));

// Array Iteration - Loops

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]); `Michael`, `Jay`, `Peter`
}

friends.forEach((friend, index) => {
  console.log(`Friend ${index + 1}: ${friend}`);
});


for (let i = 0; i < grades.length; i++) {
  total += grades[i];
}

const average = total / grades.length;
console.log(`Average grade: ${average.toFixed(2)}`);

let passedCount = 0;
grades.forEach((grade) => {
  if (grade >= 70) passedCount++;
});
console.log(`${passedCount} out of ${grades.length} students passed`);


////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager

// Function to calculate average
function calculateAverage(grades) {
 let sum = 0;
 for (let i = 0; i < grades.length; i++) {
   sum += grades[i];
 }
 return sum / grades.length;
}
// Function to find highest grade
function findHighestGrade(grades) {
 let highest = grades[0];
 for (let i = 1; i < grades.length; i++) {
   if (grades[i] > highest) {
     highest = grades[i];
   }
 }
 return highest;
}
// Function to find lowest grade
function findLowestGrade(grades) {
 let lowest = grades[0];
 for (let i = 1; i < grades.length; i++) {
   if (grades[i] < lowest) {
     lowest = grades[i];
   }
 }
 return lowest;
}
// Function to count passing students
function countPassing(grades, passingGrade) {
 let passingCount = 0;
 for (let i = 0; i < grades.length; i++) {
   if (grades[i] >= passingGrade) {
     passingCount++;
   }
 }
 return passingCount;
}
// Generate complete report
const averages = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);
console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);
