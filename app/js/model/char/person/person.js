class Person {

  constructor(p) {
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