var Chance = require('chance');
var chance = new Chance();

import {charGen} 	from 'js/utils/charGen.js';
import {locGen} 	from 'js/utils/locGen.js';


import {dice} 		from 'js/model/dice/dice.js';
import Location 	from 'js/model/location/location.js';
import Party 			from 'js/model/party/party.js';
import Character 	from 'js/model/char/character.js';

import Combat 		from './combat/combat.js';

export class GameEngine {

	constructor(p) {
		this.hero = {};
		this.location = {};

  	this.createParty();
		this.createLocation()
	}

	createParty() {
		this.hero = charGen.GenerateChar("hero", "Tannhauser", "graham.png");
  	this.hero.getExp().gainXP(3000);

		var charRan1 = charGen.GenerateChar("wrench", chance.first(), "crazy_wrench.png");
  	charRan1.getExp().gainXP(2000);

		this.heroParty = new Party("heroParty", "The Party", "neutral");
  	this.heroParty.addMembers([this.hero, charRan1]);
	}

	createLocation() {
		this.location = locGen.GenerateLocation();
	}

  start(p) {

  	var combatParties = this.location.getPartiesArray();
  	combatParties.push(this.heroParty);
  	var combat = new Combat(combatParties);
  	// combat.start();
  }

  getHero() {
  	return this.hero;
  }

  getParty() {
  	return this.heroParty;
  }

  getLocation() {
  	return this.location;
  }

}

