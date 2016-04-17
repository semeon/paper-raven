import CombatTurn from './combatturn.js';

class Combat {

  constructor(p) {
    this.order = p;
    this.order.sort(function(a, b){return b.getCombatInitiative() - a.getCombatInitiative()});

    this.actors = {};
    for (var i=0; i<this.order.length; i++) {
      var key = this.order[i].getID();
      this.actors[key] = this.order[i]; 
    }

    this.printOrder();
  }

  set(p) {
  }

  start(p) {
    console.log("Combat satrted");
    var combatIsOver = false;
    var killSwitch = 0;

    while (!combatIsOver && killSwitch<100) {
      console.log("** Combat cycle starts **********");

      var turnCounter = 0;
      // Choose Char
      for (var i=0; i<this.order.length; i++) {
        var char = this.order[i];
        var charID = char.getID();

        if (char.isAlive()) {
          var turn = new CombatTurn(char, this.order);
          var turnResult = turn.make();
          if (turnResult) turnCounter +=1;
        }
      }

      if (!turnCounter) combatIsOver = true;
      
      killSwitch += 1;
      console.log("** Combat cycle ends ************");
      console.log("");
    }    
    console.log("Combat is over.");
  }

  printOrder() {
    console.log(this.actors);
    console.log("Combat order:");
    for (var i=0; i<this.order.length; i++) {
      console.log("Name: " + this.order[i].getName() + ", initiative: " + this.order[i].getCombatInitiative());
    }
  }



}

export default Combat;