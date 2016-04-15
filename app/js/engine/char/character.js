import Person from './person/person.js';
import Special from './special/special.js';


class Character {

  constructor(p) {

		this.person = new Person(p.person);
		this.special = new Special(p.special);

		console.log("A Character instance created");
		console.log("- " + this.person.getName() + " / " + this.person.getGender());

		console.log("-- S: " + 		this.special.getSpecial("S"));
		console.log("-- P: " + 	this.special.getSpecial("P"));
		console.log("-- E: " + 		this.special.getSpecial("E"));
		console.log("-- C: " + 		this.special.getSpecial("C"));
		console.log("-- I: " + this.special.getSpecial("I"));
		console.log("-- A: " + 			this.special.getSpecial("A"));
		console.log("-- L: " + 				this.special.getSpecial("L"));
  }

}


export default Character;