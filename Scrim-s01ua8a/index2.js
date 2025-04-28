/* let player1Time = 102;
let player2Time = 107;

// cmd+d - ctrl+d
function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function getTotalRaceTime() {
  return player1Time + player2Time;
}

let totalTime = getTotalRaceTime();

console.log(totalTime);
 */

/* let randomNumber = Math.random() * 6;

console.log(randomNumber);

/* 

In which range will our randomNumber be now?

From: 0
To: 5.999999

*/
/* // let randomNumber = Math.random() * 6

let flooredNumber = Math.floor(12);

console.log(flooredNumber);

/* 

What does Math.floor() do to positive numbers?

Your answer: it removes the decimals

*/

/*
let randomNumber = Math.floor(Math.random() * 6);

console.log(randomNumber);

/* 

Write down all the possible values randomNumber can hold now!

  0,1,2,3,4,5


*/

/* // Try to modify the expression so that we get a range from 1 to 6
let randomNumber = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber);
 */

// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

console.log(rollDice());
