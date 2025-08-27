console.log("part 2 is now working"); 

// Function -  Declaration and Expression
console.log("=== FUNCTION ===");

function logger() {
    console.log("My name is Kobe");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);


// Function Expressions
const calAge = function (birthyeasr) {
    return 2025 - birthyeasr;
};

console.log(calAge(2000));
console.log(calAge(1991));

function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}

function calcAge(birthYear, currentYear) {
  // Parameters
  const age = currentYear - birthYear;
  return age;
}

console.log(introduce("Kobe", "Hufancia", 23)); 

function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge(birthYear); 
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired!`;
  }
}

console.log(yearsUntilRetirement(2002, "Kobe"));

//global scope
const globalVar = "I am global";

function testscope() {
    const localVar = "I am local";
    console.log(globalVar); 
    console.log(localVar);
}

    testscope();
    
////////////////////////////////////
// Coding Challenge #1

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas)  (${avgDolphins vs. ${avgKoalas}};
    
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas}})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
    
      return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        return `No team wins... `(${avgDolphins} vs. ${avgKoalas})``;

    };
    


// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));



