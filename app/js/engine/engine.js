var Chance = require('chance');
var chance = new Chance();


import {dice} from './../model/dice/dice.js';
import Character from './../model/char/character.js';
import Combat from './combat/combat.js';

export class GameEngine {

	constructor(p) {
		console.log("GameEngine instance created.");

		console.log("Chance.first()" + chance.first());


		this.hero = new Character(GenerateChar("hero", "Tannhauser"));
  	// var charNaf = new Character(p.chars["Nafanail"]);
  	// var charTan = new Character(p.chars["Tan"]);
	}

  log(m) {
		console.log(m);
  }

  start(p) {

  	this.hero.gainXp(1000);

		var charRan1 = new Character(GenerateChar("charRan1", chance.first()));
  	charRan1.gainXp(2000);
  	PrintChar(charRan1);

		var charRan2 = new Character(GenerateChar("charRan2", chance.first()));
  	charRan2.gainXp(5000);
  	PrintChar(charRan2);

		var charRan3 = new Character(GenerateChar("charRan3", chance.first()));
  	charRan3.gainXp(10000);
  	PrintChar(charRan3);


  	var combat = new Combat([this.hero, charRan1, charRan2, charRan3]);
  	var enemiesMap = [];
		enemiesMap["hero"] = [charRan1, charRan2, charRan3];
		enemiesMap["charRan1"] = [this.hero];
		enemiesMap["charRan2"] = [this.hero];
		enemiesMap["charRan3"] = [this.hero];

  	combat.set(enemiesMap);
  	combat.start();
  	combat.start();
  	combat.start();
  	combat.start();
  	combat.start();


		// TestDice(dice);
		// PrintAttack(hero);
  }

  getHero() {
  	return this.hero;
  }


}

// ********************************************

function PrintChar(c) {
  console.log("");
  console.log("Character: " + c.person.getName() + "/" + c.person.getGender());

	console.log("- SPECIAL:");
	console.log("-- S: " + 		c.special.getStats("S"));
	console.log("-- P: " + 		c.special.getStats("P"));
	console.log("-- E: " + 		c.special.getStats("E"));
	console.log("-- C: " + 		c.special.getStats("C"));
	console.log("-- I: " + 		c.special.getStats("I"));
	console.log("-- A: " + 		c.special.getStats("A"));
	console.log("-- L: " + 		c.special.getStats("L"));

	console.log("- ATTACK: ");
	console.log("-- Base Damage: " + c.derived.getDamageRange().min + "-" + c.derived.getDamageRange().max);
	console.log("-- Crit Chance: " + c.derived.getCritChance() + "%");
	console.log("-- Crit Damage: x" + c.derived.getCritMultipier());

  console.log("- EXPERIENCE: ");
  console.log("-- XP:  " + c.exp.getXp());
  console.log("-- LVL: " + c.exp.getLevel());
  console.log("-- SkP: " + c.exp.getSkillPoints());
	}

function PrintAttack(char) {

	for(var i=0; i<10; i++) {

		var attack = char.getAttack();

		var log = char.getName() + " ";
		log = log + " attack: " + attack.damage;
		if (attack.isCritical) log = log + " (critical)";

		console.log(log);
	}
}



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