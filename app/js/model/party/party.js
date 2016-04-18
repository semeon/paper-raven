class Party {

  constructor(id, name, beh) {
    this._id = id;
    this.name = name;
    this.behaviour = beh;
    this.members = {};
    this.location = {};
  }


  getID() {
    return this._id;
  }

  addMembers(members) {
  	if (members) {
  		for (var i = 0; i < members.length; i++) {
  			var m = members[i];
  			m.joinParty(this);
  			this.members[m.getID()] = m;
  		}
  	}
  }

  getMembers() {
    return this.members;
  }

  getLocation() {
  	return this.location;
  }

  assignLocation(l) {
  	this.location = l;
  }

}

export default Party;