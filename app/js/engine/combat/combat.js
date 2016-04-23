import CombatTurn from './combatturn.js';

class Combat {

  constructor(combatParties) {

    this.parties = combatParties;
    this.combatants = [];
    this.set();
    // this.order = p;
    // this.order.sort(function(a, b){return b.getCombatAbility().getInitiative() - a.getCombatAbility().getInitiative()});
    // this.actors = {};
    // for (var i=0; i<this.order.length; i++) {
    //   var key = this.order[i].getID();
    //   this.actors[key] = this.order[i]; 
    // }
    // this.printOrder();
  }




  set(p) {

    for (var i = 0; i < this.parties.length; i++) {
      var partyMembers = this.parties[i].getMembersArray();

      this.combatants = this.combatants.concat(partyMembers);
    }    

    console.dir("Parties:");
    console.dir(this.parties);

    console.dir("Combatants:");
    console.dir(this.combatants);

    console.dir("---------");

  }

  start(p) {
    console.log("Combat satrted");
    var combatIsOver = false;
    var killSwitch = 0;

    while (!combatIsOver && killSwitch<500) {
      console.log("** Combat cycle starts **********");

      var turnCounter = 0;

      // Rounds - each char makes one turn per round
      for (var i=0; i<this.order.length; i++) {
        var char = this.order[i];
        var charID = char.getID();

        // Turn
        if (char.getHealth().isAlive()) {
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
      console.log("Name: " + this.order[i].getPerson().getName() + 
                  ", initiative: " + this.order[i].getDerived().getCombatInitiative());
    }
  }



}

export default Combat;