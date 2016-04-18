var Chance = require('chance');
var chance = new Chance();


import {dice} 		from './../model/dice/dice.js';
import Location 	from './../model/location/location.js';
import Party 			from './../model/party/party.js';
import Character 	from './../model/char/character.js';

import Combat 		from './combat/combat.js';

export class GameEngine {

	constructor(p) {
		console.log("GameEngine instance created.");
		this.hero = new Character(GenerateChar("hero", "Tannhauser"));

		this.location = {};
	}

  start(p) {

  	this.hero.getExp().gainXP(3000);

  	var hopeTown = new Location("hope", "Hope");
  	var raiders = new Party("raiders", "Raiders", "aggressive");
		var charRan1 = new Character(GenerateChar("charRan1", chance.first()));
		var charRan2 = new Character(GenerateChar("charRan2", chance.first()));


		this.location = hopeTown;

  	console.dir(hopeTown);

  	charRan1.getExp().gainXP(2000);
  	charRan1.print("a");

  	charRan2.getExp().gainXP(5000);
  	charRan2.print("a");

  	raiders.addMembers([charRan1, charRan2]);
  	hopeTown.addParties([raiders]);

  	console.dir(hopeTown);


  	var combat = new Combat([this.hero, charRan1, charRan2]);
  	// combat.start();



  }

  getHero() {
  	return this.hero;
  }

  getLocation() {
  	return this.location;
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
