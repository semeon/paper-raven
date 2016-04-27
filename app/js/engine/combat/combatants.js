class Combatants {

  constructor(order) {
    this.combatants = {};
    this.currentCount = 0;

    for (var i = 0; i < order.length; i++) {
      var char = order[i];
      this.combatants[i] = char;
    }

    this.print(); 

  }

  getCurrent() {
    return this.combatants[this.currentCount];
  }

  getFirst() {
    return this.combatants[0];
  }

  getNext(n) {
    var result = this.combatants[n+1];
    if(!result) {
      result = false;
    }
    return result;
  }

  isAlive(n) {
    var result = false;
    if (this.combatants[n]) {
      result = this.combatants[n].getHealth().isAlive();
    }
    return result;
  }

  // getNextActive(n) {
  //   var result = false;
  //   var i = n;
  //   var found = false;
  //   var stop = false;

  //   while( this.getNext(i) && !found) {

  //     if(this.isAlive(i+1)) {
  //       result = this.getNext(i);
  //       found = true;
  //     }

  //     i++;
  //   }
  //   return result;
  // }

  print() {
    var i = 0;

    console.log("Comb collection: ");
    console.log(this.getFirst());

    while (this.getNext(i)) {
      console.log(this.getNext(i));
      i++;
    }
  }


}

export default Combatants;