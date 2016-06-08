import {dice} from './../dice/dice.js';
import Person from './person/person.js';
import Special from './special/special.js';

import Health from './health/health.js';
import Experience from './experience/experience.js';

import CombatAbility from './abilities/combatAbility.js';

class Character {

  constructor(p) {
    this._id = p.id;
    this._isPlayer = false;
    if (p.isPlayer) this._isPlayer = true;

		this.person = new Person(p.person);
    this.special = new Special(p.special);


    this.skills = {};
    this.behaviour = {};
    this.equipment = {};
    this.inventory = {};


    this.health = new Health(this);
    this.exp = new Experience(this);

    this.combatAbility = new CombatAbility(this);

    this.location = {};
    this.party = {};
	}

  getID() {
    return this._id;
  }

  getPerson() { 
    return this.person; 
  }
  getSpecial() { 
    return this.special; 
  }
  getHealth() { 
    return this.health; 
  }
  getExp() { 
    return this.exp; 
  }

  getCombatAbility() { 
    return this.combatAbility; 
  }

  moveToLocation(l){
    this.location = l;
  }
  getLocation() {
    return this.location;
  }

  joinParty(p){
    this.party = p;
  }


  receiveAttack(a) {
    if (a.damage > 0) {
      this.health.takeDamage(a.damage);
    }
    if (!this.health.isAlive()) {
      console.log(this.person.getName() + " is dead.")
    }
  }


  // Output
    print(p) {
      console.log("- Character: " + this.person.getName() + ", " + this.person.getGender());

      if(p == "S") {
        console.log("- SPECIAL:");
        console.log("-- S: " +    this.special.getStats("S"));
        console.log("-- P: " +    this.special.getStats("P"));
        console.log("-- E: " +    this.special.getStats("E"));
        console.log("-- C: " +    this.special.getStats("C"));
        console.log("-- I: " +    this.special.getStats("I"));
        console.log("-- A: " +    this.special.getStats("A"));
        console.log("-- L: " +    this.special.getStats("L"));
      }

      if (p == "a") {
        console.log("- ATTACK: ");
        console.log("-- Base Damage: " +  this.combatAbility.getDamageRange().min + "-" + this.combatAbility.getDamageRange().max);
        console.log("-- Crit Chance: " +  this.combatAbility.getCritChance() + "%");
        console.log("-- Crit Damage: x" + this.combatAbility.getCritMultipier());
      }

      if (p == "x") {
        console.log("- EXPERIENCE: ");
        console.log("-- XP:  " + this.exp.getXP());
        console.log("-- LVL: " + this.exp.getLevel());
        console.log("-- SkP: " + this.exp.getSkillPoints());
      }

      if (p == "h") {
        console.log("- HEALTH: ");
        console.log("-- HP:  " + this.health.getHP() + "/" + this.health.getMaxHP());
      }
    }


}


export default Character;