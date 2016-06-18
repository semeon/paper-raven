import {logger}   from 'js/engine/eventlogger/eventlogger.js';

import {StatedSequencePhase}   from 'js/_abstract/statedSequencePhase.js';

export class PerformActionState extends StatedSequencePhase {
	
	constructor(context, delayBefore, delayAfter) {
		super("TURN-PERFORM-ACTION", context, delayBefore, delayAfter);
	}

	act() {
		console.log("PerformActionState.act() CALLED");

		this.attack();
		this.printAttack();
	}

  attack() {
    this.context.result.attackAttempt = this.context.char.getCombatAbility().attackRoll();
    this.context.result.attackResult = this.context.target.char.getCombatAbility().defenseRoll(this.context.result.attackAttempt);
  }

  applyAttack() {
		this.context.target.char.receiveAttack(this.context.result.attackResult);
  }


	printAttack() {
		var self = this;
		
		var actorName = this.context.actor.char.getPerson().getName();
		var targetName = this.context.target.char.getPerson().getName();

		var attackAttempt = this.context.result.attackAttempt;
		var attackResult = this.context.result.attackResult;

		// Base Damage Roll message
		var baseDmgMsg = actorName + " makes base damage roll: " + attackAttempt.baseDamage;

		// Crit Hit Roll message
		var critHitMsg = actorName + " makes critical hit roll: ";
		if (attackAttempt.isCritical) {
			critHitMsg += "Success!";
		} else{
			critHitMsg += "Failed";
		}
		critHitMsg += " Damage multiplier: x" + attackAttempt.damMultipier;

		// Dodge Roll message
		var dodgeRollMsg = targetName + " makes dodge attempt roll: ";
		if (attackResult.dodged) {
			dodgeRollMsg += "Success!";
		} else{
			dodgeRollMsg += "Failed.";
		}

		// Result Damage message
		var resDmsMsg = "Result damage: " + attackResult.damage;
		if (attackResult.isCritical) resDmsMsg += ", critical hit"

		// Print summary message to global log 
		var summaryMsg = actorName;
		if (attackResult.isCritical) summaryMsg += " critically "
		summaryMsg += " hits " + targetName + " for " + attackResult.damage + " HP";


		function sleep(time) {
		    return new Promise(function(resolve) {
					setTimeout(resolve, time);
		    })
		}	

		sleep(500).then(() => {
			console.log(baseDmgMsg);
			self.context.printAttackLog(baseDmgMsg);
	    return sleep(500);

		}).then(() => {
			console.log(critHitMsg);
			self.context.printAttackLog(critHitMsg);
	    return sleep(500);

		}).then(() => {
			console.log(dodgeRollMsg);
			self.context.printAttackLog(dodgeRollMsg);
	    return sleep(500);
			
		}).then(() => {
			console.log(resDmsMsg);
			self.context.printAttackLog(resDmsMsg);
	    return sleep(500);
			
		}).then(() => {
			self.applyAttack();
			console.log(summaryMsg);
			logger.log(summaryMsg);

			self.callSuccessor();
		});
	}	
}