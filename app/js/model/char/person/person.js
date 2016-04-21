class Person {

  constructor(p) {
		this.name = p.name;
		this.gender = p.gender;
    this.image = 'default.png';
    if (p.image) this.image = p.image;
  }

  getName() {
    return this.name;
  }

  getGender() {
    return this.gender;
  }

  getImageFileName() {
    return this.image;
  }


}

export default Person;