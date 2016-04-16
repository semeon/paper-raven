import {dice} from './../dice/dice.js';
import Person from './person/person.js';
import Special from './special/special.js';
import Derived from './derived/derived.js';


class Character {

  constructor(p) {

		this.person = new Person(p.person);
		this.special = new Special(p.special);
		this.derived = new Derived(this);

		this.print();
  }

  getName() {
  	return this.person.getName();
  }
  getGender() {
  	return this.person.getGender();
  }

  getSpecial() {
    return this.special;
  }

  getDerivedStats() {
  	return this.derived.getStats();
  }

  getAttack() {
  	var damRange = this.derived.getDamageRange();
  	var baseDamage = dice.roll(damRange.min, damRange.max);
		var damMultipier = 1;

  	var isCritical = dice.rollBool(this.derived.getCritChance());
  	if(isCritical) damMultipier = this.derived.getCritMultipier();

  	var attack = {};
  	attack.damage = baseDamage * damMultipier;
  	attack.isCritical = isCritical;

  	return attack;
  }


  print() {
		console.log("A Character instance created: " + this.person.getName() + "/" + this.person.getGender());

		console.log("- SPECIAL:");
		console.log("-- S: " + 		this.special.getStats("S"));
		console.log("-- P: " + 		this.special.getStats("P"));
		console.log("-- E: " + 		this.special.getStats("E"));
		console.log("-- C: " + 		this.special.getStats("C"));
		console.log("-- I: " + 		this.special.getStats("I"));
		console.log("-- A: " + 		this.special.getStats("A"));
		console.log("-- L: " + 		this.special.getStats("L"));

		console.log("- ATTACK: ");
		console.log("-- Base Damage: " + this.derived.getDamageRange().min + "-" + this.derived.getDamageRange().max);
		console.log("-- Crit Chance: " + this.derived.getCritChance() + "%");
		console.log("-- Crit Damage: x" + this.derived.getCritMultipier());


	}

}


export default Character;