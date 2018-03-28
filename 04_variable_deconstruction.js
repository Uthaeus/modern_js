// Variable Deconstruction
// ability to swap variable values

let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

let tempPlayerOne = playerOne;
let tempPlayerTwo = playerTwo;

playerOne = playerTwo;
playerTwo = playerOne;

console.log(`
  Player One: ${playerOne}
  Player Two: ${playerTwo}
  `);
  // => Player One: Kristine
  //    Player Two: Kristine

// Another language such as Ruby allows for 'mass assignment'
// Ex: playerOne, playerTwo = playerTwo, playerOne

// JavaScript now allows something similar
[playerOne, playerTwo] = [playerTwo, playerOne];