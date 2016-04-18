class Location {

  constructor(id, name) {
    this._id = id;
    this.name = name;
    this.parties = {};
    this.loot = {}; // Containers
  }


  getID() {
    return this._id;
  }

  getName() {
    return this.name;
  }


  addParties(parties) {
  	if (parties) {
  		for (var i = 0; i < parties.length; i++) {
  			var p = parties[i];
  			p.assignLocation(this);
  			this.parties[p.getID()] = p;
  		}
  	}
  }

}

export default Location;