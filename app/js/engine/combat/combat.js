import {logger}   from 'js/engine/eventlogger/eventlogger.js';

// import CombatRound from './combatRound.js'; // Not sure if I need it
import {CombatantList} from './combatantList.js';
import {Combatant} from './combatant.js';
import {CombatTurn} from './combatTurn.js';

export class Combat {

  constructor(combatParties) {
    this.parties = combatParties;
    this.combatants;
		this.phase; // pending, in-progress, completed
    this.actor;;
		this.safetyCounter = 0;

    this.set();
  }

  set(p) {
    this.combatants = new CombatantList(this.parties);
		console.dir(this.combatants);
		this.phase = "pending";
  }

	start() {
		console.log("* COMBAT STARTS *");
		this.phase = "in-progress";
		this.combat();
	}


	combat() {
		do {
			this.chooseActor();
			this.makeTurn();
		}
		while(!this.isOver());
		
		this.end();
	}


	chooseActor() {
		console.log("-- Choosing actor...");
		if (this.actor) {
			this.actor = this.combatants.getCurrent();
		} else {
			this.actor = this.combatants.getNext();
		}		

		// console.log("-- Actor: ");
		// console.dir(this.actor);
	}

	makeTurn() {
		console.log("-- Starting turn. Actor: " + this.actor.char.getPerson().getName());
		
    if (this.actor.isActive()) { // Othervise should not happen!
      var turn = new CombatTurn(this.actor);
			turn.perform();
    }
		console.log("-- Turn is over.");
	}

	isOver() {
		console.log("-- Checking if combat is over.");
		var result = true;

		var active = this.combatants.getActiveCount();
		console.log("--- Active count: " + active);

		if (active > 1) result = false;
		// Killswitch
		this.safetyCounter++;
		if (this.safetyCounter > 50) result = true;

		console.log("--- isOver(): " + result);

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