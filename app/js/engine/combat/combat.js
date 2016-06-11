import {logger}   from 'js/engine/eventlogger/eventlogger.js';

import {app}   from 'js/app.js';

import {CombatantList} from './combatantList.js';
import {Combatant} from './combatant.js';
import {CombatTurn} from './combatTurn.js';

export class Combat {

  constructor(combatParties) {
    this.parties = combatParties;
    this.combatants;
		this.phase; // pending, in-progress, completed
    this.actor;
		this.safetyCounter = 0;
		
		this.turn;

    this.set();
  }

  set(p) {
    this.combatants = new CombatantList(this.parties);
		console.dir(this.combatants);
		this.phase = "pending";
  }

	getActor() {
		return this.actor;
	}

	// ------------------

	start() {
		console.log("* COMBAT STARTS *");
		this.phase = "in-progress";
		app.render();		
		this.startNextTurn();
	}


	startNextTurn() {
		var self = this;
		if (!self.isOver()) { 
			self.chooseActor();
			self.makeTurn();
		} else {
			self.end();			
		}
	}

	chooseActor() {
		if (!this.actor) {
			this.actor = this.combatants.getCurrent();
		} else {
			this.actor = this.combatants.getNextActive();
		}		
		console.log("-- Actor chosen: " + this.actor.name);
	}

	makeTurn() {
		console.log("-- makeTurn()");
    if (this.actor.isActive()) { // Othervise should not happen!

			console.log("-- new CombatTurn()");


      this.turn = new CombatTurn(this.actor, this);
			this.turn.perform();
    } else {
    	this.startNextTurn();
    }
	}

	isOver() {
		var result = true;
		var active = this.combatants.getActiveCount();
		console.log("- active: " + active);
		if (active > 1) result = false;
		// Killswitch
		this.safetyCounter++;
		if (this.safetyCounter > 100) result = true;
		return result;
	}


	end() {
		console.log("* COMBAT ENDS *");
		this.phase = "completed";		
	}

  // startNextTurn() {
  //   var self = this;
  //
  // 		if (this.attacker) {
  // 			this.attacker = this.combatants.getCurrent();
  // 		} else {
  // 			this.attacker = this.combatants.getNext();
  // 		}
  //
  //   if (this.attacker.isActive()) {
  //     var turn = new CombatTurn(this.attacker);
  //     this.target = this.attacker.chooseTarget(self.combatantsArray);
  //
  //     if (this.target) {
  //       turn.attack(this.target);
  //       this.turnsMadeLastRound++;
  //       setTimeout( function() {self.endTurn(self);}, this.turnDelay); // REFACTOR
  //     }
  //   }
  //   this.endTurn(self);
  // }
  //
  //
  // endTurn(self) {
  //   // console.log("---- TURN CALLBACK HAPPENS NOW");
  //
  //   if (!self) self == this;
  //
  //   self.turn++;
  //
  //   // Check if round is over
  //   if(!self.combatants[self.turn+1]) {
  //
  //     console.log("-- Round is over");
  //
  //     if(self.turnsMadeLastRound == 0) {
  //       self.combatIsOver = true;
  // 				self.phase = "completed";
  //     }
  //
  //     // Round stats reset
  //     self.turnsMadeLastRound = 0;
  //     self.turn = 0;
  //     self.round ++;
  //   }
  //
  //   // Kill switch
  //   // if(self.round > 30) {
  //   //   this.endCombat();
  //   // }
  //
  //   // Check if combat is not over
  //   if(self.phase == "in-progress") {
  //     self.startNextTurn();
  //
  //   } else {
  //     console.log("-- Combat is over");
  //     logger.log("Combat is over.");
  //     this.target = null;
  //   }
  // }


  // printOrder(order) {
  //   // console.log(this.combatants);
  //   console.log("Combat order:");
  //   for (var i=0; i<order.length; i++) {
  //     console.log("Name: " + order[i].getPerson().getName() +
  //                 ", initiative: " + order[i].getCombatAbility().getInitiative());
  //   }
  // }
}	