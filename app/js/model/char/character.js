import {dice} from './../dice/dice.js';
import Person from './person/person.js';
import Special from './special/special.js';

import Health from './health/health.js';
import Experience from './experience/experience.js';

import Derived from './derived/derived.js';

import Actions from './actions/actions.js';


class Character {

  constructor(p) {
    this._id = p.id;

		this.person = new Person(p.person);
    this.special = new Special(p.special);

    this.skills = {};
    this.behaviour = {};
    this.equipment = {};
    this.inventory = {};


    this.health = new Health(this);
    this.exp = new Experience(this);

    this.derived = new Derived(this);

    this.actions = new Actions(this);

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
  getDerived() { 
    return this.derived; 
  }

  getActions() { 
    return this.actions; 
  }


  // Person
    getName() {
      return this.person.getName();
    }
    getGender() {
      return this.person.getGender();
    }

  // Health
    isAlive() {
      return this.health.getHP()>0;
    }
    getHP() {
      return this.health.getHP();
    }
    getMaxHP() {
      return this.health.getMaxHP();
    }
    takeDamage(d) {
      this.health.decHP(d);
    }

  // Experience
    getLevel() {
      return this.exp.getLevel();
    }
    getXP() {
      return this.exp.getXP();
    }
    getNextLvlXP() {
      return this.health.getMaxHP();
    }
    gainXP(xp) {
      this.exp.gainXP(xp);
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
        console.log("-- Base Damage: " +  this.derived.getDamageRange().min + "-" + this.derived.getDamageRange().max);
        console.log("-- Crit Chance: " +  this.derived.getCritChance() + "%");
        console.log("-- Crit Damage: x" + this.derived.getCritMultipier());
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