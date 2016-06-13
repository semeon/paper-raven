import {logger}   from 'js/engine/eventlogger/eventlogger.js';

import {app}   from 'js/app.js';

import {CombatantList} from './combatantList.js';
import {Combatant} from './combatant.js';
import {CombatTurn} from './combatTurn.js';

export class Combat {

  constructor(combatParties) {
    this.parties = combatParties;
    this.combatants;
		this.state; // pending, in-progress, completed
    this.actor;
		this.safetyCounter = 0;
		
		this.turn;

    this.set();
  }

  set(p) {
		this.state = "start";
    this.combatants = new CombatantList(this.parties);
		console.dir(this.combatants);

  }

	// TODO: move state management to superclass
	updateState(state) {
		this.state = state;
		console.log("** combat state: " + state);
		app.render();
	}


	getActor() {
		return this.actor;
	}

	// ------------------

	start() {
		console.log("* COMBAT STARTS *");
		
		app.render();		
		this.startNextTurn();
	}


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

	makeTurn() {
    if (this.actor.isActive()) { // Othervise should not happen!

			console.log("-- new Combat Turn");

			this.updateState("turn");

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
		this.updateState("turn");		
		console.log("* COMBAT ENDS *");
	}

}	