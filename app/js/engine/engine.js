import {diceInstance} from './dice/dice.js';

function GameEngine() {

	// var dice = new Dice();
	var dice = diceInstance;
	console.log("GameEngine instance created.");

  this.log = function(m) {
		console.log(m);
  }

  this.start = function() {

  	var roll = dice.roll(1, 6);
  	this.log("1-6: " + roll);

		roll = dice.rollBool(10);
  	this.log("Bool: " + roll);

  	roll = dice.rollD6();
  	this.log( "d6 x _: " + roll.total + " = " + roll.details);

  	roll = dice.rollD6(4);
  	this.log( "d6 x 4: " + roll.total + " = " + roll.details);

  	roll = dice.rollD20(1);
  	this.log("d20 x 1: " + roll.total + " = " + roll.details);

  	roll = dice.rollD20(4);
  	this.log("d20 x 4: " + roll.total + " = " + roll.details);

  }
}

export default GameEngine;