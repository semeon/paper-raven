import {logger}   from 'js/engine/eventlogger/eventlogger.js';

import {app}   from 'js/app.js';

import {CombatantList} from './combatantList.js';
import {Combatant} from './combatant.js';
import {CombatTurn} from './turn/combatTurn.js';

export class Combat {

  constructor(combatParties) {
    this.parties = combatParties;
    this.combatants;
		this.state; // start, in-progress, completed
    this.actor;
		this.safetyCounter = 0;
		this.turn;
  }

  set() {
		this.updateState("start");
    this.combatants = new CombatantList(this.parties);
  }

	// TODO: move state management to superclass
	updateState(state) {
		this.state = state;
		app.render();
	}


	start() {
		console.log("* COMBAT STARTS *");
		this.startNextTurn();
	}


	// -- FLOW: PRE-TURN -------------------
	startNextTurn() {
		this.updateState("pre-turn");
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

	// -- FLOW: TURN -------------------
	makeTurn() {
    if (this.actor.isActive()) { // Othervise should not happen!
      this.turn = new CombatTurn(this.actor, this);
			console.log("-- new Combat Turn");
			this.turn.perform();
			this.updateState("turn");

    } else {
    	this.startNextTurn();
    }
	}

	// -- FLOW: END -------------------
	end() {
		this.updateState("end");		
		console.log("* COMBAT ENDS *");
	}


	// -------------------------

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

	getActor() {
		return this.actor;
	}	
	
}	