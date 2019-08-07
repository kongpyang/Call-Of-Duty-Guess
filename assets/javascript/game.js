// select character  on html page
let character1 = document.querySelector("#character1");
let character2= document.querySelector("#character2");
let character3 = document.querySelector("#character3");
let character4 = document.querySelector("#character4");


// random numbers for character Crash, Torque, Ajax, and Ruin//
let randomNumberOne = Math.floor(Math.random() * ((120-19)+1) + 19);  // returns a random integer from 19 to 120
// returns a random integer for Crash//
let random1 = Math.floor(Math.random() * ((12-1)+1) + 1);  
// returns a random integer for Torque//
let random2 = Math.floor(Math.random() * ((12-1)+1) + 1);  
// returns a random integer for Ajax//
let random3 = Math.floor(Math.random() * ((12-1)+1) + 1);  
// returns a random integer for Ruin//
let random4 = Math.floor(Math.random() * ((12-1)+1) + 1);  

// selecting the displays on html page
let targetNumber = document.querySelector("#targetNumber");
let totalScoreDisplay = document.querySelector("#playerTotal");
let winsDisplay = document.querySelector("#wins");
let lossesDisplay = document.querySelector("#losses");


// Keeping Scores on scoreboard//
let wins = 0;
let losses = 0;
let totalScore = 0;


//Set up functions for function: reset, winner, loser, and random number generator
function reset() {
   randomNumberOne = Math.floor(Math.random() * ((120-19)+1) + 19);
   //console log for each random number. 12-0 +1. Set target number to text content =randomNumberOne.//
   console.log(randomNumberOne);
   targetNumber.textContent = randomNumberOne;
   random1 = Math.floor(Math.random() * ((12-1)+1) + 1);
   random2 = Math.floor(Math.random() * ((12-1)+1) + 1);
   random3 = Math.floor(Math.random() * ((12-1)+1) + 1);
   random4 = Math.floor(Math.random() * ((12-1)+1) + 1);
   totalScore = 0;
   totalScoreDisplay.textContent = totalScore;
}
//Set up functions for winner

function winner() {
   document.querySelector("#wins").textContent = "You Won";
   wins++;
   winsDisplay.textContent = wins;
   reset();
}
//Set up functions for function: reset, winner, loser, and random number generator
function loser() {
   document.querySelector("#wins").textContent = "0";
   losses++;
   lossesDisplay.textContent = losses;
   reset();
}


targetNumber.textContent = randomNumberOne;


// add eventlisteners on characters(click)//
character1.addEventListener("click", function() {
   totalScore = totalScore + random1;
   totalScoreDisplay.textContent = totalScore;
       if(totalScore === randomNumberOne) {
           winner();
       } else if (totalScore > randomNumberOne) {
           loser();
       }
});
character2.addEventListener("click", function() {
   totalScore = totalScore + random2;
   totalScoreDisplay.textContent = totalScore;
       if(totalScore === randomNumberOne) {
           winner();
       } else if (totalScore > randomNumberOne) {
           loser();
       }
});
character3.addEventListener("click", function() {
   totalScore = totalScore + random3;
   totalScoreDisplay.textContent = totalScore;
       if(totalScore === randomNumberOne) {
           winner();
       } else if (totalScore > randomNumberOne) {
           loser();
       }
});
character4.addEventListener("click", function() {
   totalScore = totalScore + random4;
   totalScoreDisplay.textContent = totalScore;
       if(totalScore === randomNumberOne) {
           winner();
       } else if (totalScore > randomNumberOne) {
           loser();
       }
});




