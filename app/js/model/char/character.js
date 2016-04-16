import {dice} from './../dice/dice.js';
import Person from './person/person.js';
import Special from './special/special.js';
import Derived from './derived/derived.js';

import Experience from './experience/experience.js';


class Character {

  constructor(p) {
    this._id = p.id;

		this.person = new Person(p.person);
		this.special = new Special(p.special);
		this.derived = new Derived(this);

    // this.health = new Health();
    this.exp = new Experience(this);
	}

  // Read
  getID() {
    return this._id;
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

  getDerived() {
  	return this.derived;
  }

  getCombatInitiative() {
    return this.exp.getLevel();
  }

  // Write
  gainXp(xp) {
    this.exp.gainXp(xp);
  }






  // REFACTOR!! Move to engine
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

}


export default Character;