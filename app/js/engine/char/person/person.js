class Person {

  constructor(p) {
		// console.log("A Person instance created.");
		this.name = p.name;
		this.gender = p.gender;
  }

  getName() {
  	return this.name;
  }

  getGender() {
  	return this.gender;
  }
}

export default Person;