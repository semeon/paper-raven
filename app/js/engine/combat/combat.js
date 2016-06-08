import {logger}   from 'js/engine/eventlogger/eventlogger.js';

// import Combatants from './combatants.js';
import Combatant from './combatant.js';
import CombatTurn from './combatturn.js';

class Combat {

  constructor(combatParties) {

    this.parties = combatParties;
    this.combatants = {};
    this.combatantsArray = [];
    this.turnDelay = 500;

		this.phase = "pending"; // in-progress, completed

    this.combatState = {};
      this.round = 0;
      this.turn = 0;
      this.turnsMadeLastRound = 0;
      this.combatIsOver = false;

    this.attacker = {};
    this.target = {};

    this.set();
  }

  getAttacker() {
    return this.attacker;
  }

  getDefender() {
    return this.target;
  }

  set(p) {
    var order = [];
    for (var i = 0; i < this.parties.length; i++) {
      var partyMembers = this.parties[i].getMembersArray();
      order = order.concat(partyMembers);
    }    
    order.sort(function(a, b){return b.getCombatAbility().getInitiative() - a.getCombatAbility().getInitiative()});
    // this.printOrder(order);

    this.combatantsArray = order;

    // this.combatants = new Combatants(order);

    for (var i = 0; i < order.length; i++) {
      var char = order[i];
			var combatant = new Combatant(char);
      this.combatants[i] = combatant;
    }
  }

	start() {
		this.phase = "in-progress";
		this.startNextTurn();
	}

  startNextTurn() {
    var self = this;

    this.attacker = this.combatants[this.turn];

    if (this.attacker.isActive()) {
      var turn = new CombatTurn(this.attacker);
      this.target = this.attacker.chooseTarget(self.combatantsArray);

      if (this.target) {
        turn.attack(this.target);
        this.turnsMadeLastRound++;

        setTimeout( function() {self.endTurn(self);}, this.turnDelay);

      } else {
        this.endTurn(self);
      }
    } else {
      this.endTurn(self);
    }
  }


  endTurn(self) {
    // console.log("---- TURN CALLBACK HAPPENS NOW");

    if (!self) self == this;

    self.turn++;

    // Check if round is over
    if(!self.combatants[self.turn+1]) {

      console.log("-- Round is over");

      if(self.turnsMadeLastRound == 0) {
        self.combatIsOver = true;
      } 

      // Round stats reset
      self.turnsMadeLastRound = 0;
      self.turn = 0;
      self.round ++;
    } 

    // Kill switch
    // if(self.round > 30) {
    //   this.endCombat();
    // }

    // Check if combat is not over
    if(!self.combatIsOver) {
      self.startNextTurn();
    } else {
      console.log("-- Combat is over");
      logger.log("Combat is over.");
      this.target = null;
    }
  }


  printOrder(order) {
    // console.log(this.combatants);
    console.log("Combat order:");
    for (var i=0; i<order.length; i++) {
      console.log("Name: " + order[i].getPerson().getName() + 
                  ", initiative: " + order[i].getCombatAbility().getInitiative());
    }
  }


}

export default Combat;