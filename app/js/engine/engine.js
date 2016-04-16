import {dice} from './../model/dice/dice.js';
import Character from './../model/char/character.js';

export class GameEngine {

	constructor(p) {
		console.log("GameEngine instance created.");
		this.hero = new Character(GenerateChar("Tannhauser"));
		// this.charRan = new Character(GenerateChar("Random"));
		
  	// var charNaf = new Character(p.chars["Nafanail"]);
  	// var charTan = new Character(p.chars["Tan"]);
	}

  log(m) {
		console.log(m);
  }

  start(p) {
		// TestDice(dice);
  	
		// PrintAttack(hero);
  }

  getHero() {
  	return this.hero;
  }


}

// ********************************************

function PrintAttack(char) {

	for(var i=0; i<10; i++) {

		var attack = char.getAttack();

		var log = char.getName() + " ";
		log = log + " attack: " + attack.damage;
		if (attack.isCritical) log = log + " (critical)";

		console.log(log);
	}
}



function GenerateChar(name) {

	var char = {};
	char.person = {};
	char.person.name = name;
	char.person.gender = "male";
	if(dice.rollBool(50)) char.person.gender = "female";

	char.special = {};
	char.special["S"] = dice.rollD10().value;
	char.special["P"] = dice.rollD10().value;
	char.special["E"] = dice.rollD10().value;
	char.special["C"] = dice.rollD10().value;
	char.special["I"] = dice.rollD10().value;
	char.special["A"] = dice.rollD10().value;
	char.special["L"] = dice.rollD10().value;

	return char;
}

function TestDice(dice) {
	  var roll = dice.roll(1, 6);
  	console.log("1-6: " + roll);

		roll = dice.rollBool(10);
  	console.log("Bool: " + roll);

  	roll = dice.rollD6();
  	console.log( "d6 x _: " + roll.value + " = " + roll.details);

  	roll = dice.rollD6(4);
  	console.log( "d6 x 4: " + roll.value + " = " + roll.details);

  	roll = dice.rollD20(1);
  	console.log("d20 x 1: " + roll.value + " = " + roll.details);

  	roll = dice.rollD20(4);
  	console.log("d20 x 4: " + roll.value + " = " + roll.details);
}