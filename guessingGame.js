alert("Hey! This is a Guessing game. Let's play with Computer.");
console.warn("You have only 5 chance to think about that number.");

// let's play
//limit of guessing number is in between 0 to 50
//generate a random number
// give user the ability to guess
// if they guess wrong ask them again
// give some hint to guess that number
// if they win say that - You Won!

function guessing() {
  // random number generate
  let rand = Math.random() * 51;
  let randFloor = Math.floor(rand);

  //   did you want to see the answer first ?
  function seeAns() {
    let userChoice = prompt(
      `Y to see the guessed Number or N for skip.`
    ).toUpperCase();
    if (userChoice == "Y") {
      console.log(`Guessed Number is ${randFloor}`);
    } else if (userChoice == "N") {
      console.log("Guessed Number is hidden.");
    }
  }

  //   calling seeAns() function
  seeAns();

  let guessCount = 1;
  while (guessCount <= 5) {
    let guess = prompt(`Guess : `);

    if (guess != randFloor) {
      // giving hint
      if (randFloor > 0 && randFloor < 10) {
        console.warn(`Hint : Greater than 0 and less than 10`);
      } else if (randFloor > 10 && randFloor < 20) {
        console.warn(`Hint : Greater than 10 and less than 20`);
      } else if (randFloor > 20 && randFloor < 30) {
        console.warn(`Hint : Greater than 20 and less than 30`);
      } else if (randFloor > 30 && randFloor < 40) {
        console.warn(`Hint : Greater than 30 and less than 40`);
      } else if (randFloor > 40 && randFloor < 50) {
        console.warn(`Hint : Greater than 40 and less than 50`);
      }
      if (guessCount > 4) {
        console.error(`You Loose!`);
        break;
      } else {
        guessCount++;
      }
    } else {
      console.log(`You won!`);
      break;
    }
  }
}

guessing();
