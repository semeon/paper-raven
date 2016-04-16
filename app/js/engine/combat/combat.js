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

    this.enemiesMap = {};

  }

  set(p) {
    this.enemiesMap = p;
  }

  start(p) {

    console.log("Combat satrted");
    console.log(this.enemiesMap);

    var combatIsOver = false;
    while (!combatIsOver) {

      console.log("Combat cycle:");
      for (var i=0; i<this.order.length; i++) {
        var char = this.order[i];
        var charID = char.getID();

        var target = this.enemiesMap[charID][0];

        console.log(char.getName() + " attacks " + this.actors[target.getID()].getName());
      }
      combatIsOver = true;
    }    
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