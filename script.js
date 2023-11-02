"use strict";

//DO YOU WANT TO PLAY CONFIRMATION
let userConsent = confirm(
  "Can we play? You will only need to guess 1-100 with maximum of 10 guesses :)"
);

if (userConsent) {
  //Random number generator code  up to 1-100
  var correctNumber = Math.floor(Math.random() * 100) + 1;
  //Show the right number in the console inspect
  console.log(correctNumber);

  //makes variable for the loop so it limits it to 10 chances of guessing
  let counter = 0;
  while (counter < 10) {
    //ask your guessing number
    let userGuess = prompt("What do you think is the right number?");
    //If guess is correct
    if (userGuess == correctNumber) {
      alert("Wow so lucky.. Good Job!");
      break;
    }
    // if guess is wrong it shows hints
    else if (userGuess < correctNumber) {
      alert("Wrong!! Its higher than that!");
    } else {
      alert("Wrong again! The number is lower!");
    }

    //equivalent to writing counter = counter + 1. In this case, it's used to increase the value of the counter variable by 1 in each iteration of a loop.
    counter += 1;
  }

  //when the maxmum of guesses is reached it alert´s the user that is game over and shows the correct answer.
  if (counter == 10) {
    alert("So unlucky. Game Over!! The correct answer was: " + correctNumber);
  }

  //to play again or website reload
  let restartOrNot = confirm("Let´s Play again?");
  if (restartOrNot) {
    location.reload();
  } else {
    alert("Hate to see you go but okay...");
  }
} else {
  alert("Nobody wants to play with me...");
}
