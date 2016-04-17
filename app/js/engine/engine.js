var Chance = require('chance');
var chance = new Chance();


import {dice} from './../model/dice/dice.js';
import Character from './../model/char/character.js';
import Combat from './combat/combat.js';

export class GameEngine {

	constructor(p) {
		console.log("GameEngine instance created.");

		this.hero = new Character(GenerateChar("hero", "Tannhauser"));
  	// var charNaf = new Character(p.chars["Nafanail"]);
  	// var charTan = new Character(p.chars["Tan"]);
	}

  log(m) {
		console.log(m);
  }

  start(p) {

  	this.hero.getExp().gainXP(1000);

		var charRan1 = new Character(GenerateChar("charRan1", chance.first()));
  	charRan1.getExp().gainXP(2000);
  	charRan1.print("a");

		var charRan2 = new Character(GenerateChar("charRan2", chance.first()));
  	charRan2.getExp().gainXP(5000);
  	charRan2.print("a");

		// var charRan3 = new Character(GenerateChar("charRan3", chance.first()));
  	// charRan3.getExp().gainXP(10000);
  	// charRan3.print("a");


  	var combat = new Combat([this.hero, charRan1, charRan2]);
  	// var combat = new Combat([this.hero, charRan1, charRan2, charRan3]);


  	// combat.set([charRan1, charRan2, charRan3]);
  	combat.start();

		// TestDice(dice);
		// PrintAttack(hero);
  }

  getHero() {
  	return this.hero;
  }


}

// ********************************************



function GenerateChar(id, name) {

	var char = {};
	char.id = id;
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
