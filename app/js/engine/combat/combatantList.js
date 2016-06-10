import Combatant from './combatant.js';


export class CombatantList {

  constructor(parties) {
    this.parties = parties;		
		this.list = []; // List of items
		this.combatants	= []; // Plain array of combatants 
		
    this.current = {};
		this.set();
  }


  set(p) {
    var order = [];
    for (var i = 0; i < this.parties.length; i++) {
      var partyMembers = this.parties[i].getMembersArray();
      order = order.concat(partyMembers);
    }    
    order.sort(function(a, b){return b.getCombatAbility().getInitiative() - a.getCombatAbility().getInitiative()});

		var firstItem = {};
		var prevItem = {};

    for (var i = 0; i < order.length; i++) {
			var member = order[i];
			var combatant = new Combatant(member);

			
			var listItem = {};
			listItem.combatant = combatant;
			listItem.order = i;
			listItem.name = combatant.name;

			if (i==0) { 
				firstItem = listItem;

			} else if (i == order.length-1) { 
				prevItem.next = listItem;
				listItem.next = firstItem;

			} else {
				prevItem.next = listItem;
			}

			prevItem = listItem;

			this.list.push(listItem);
			this.combatants.push(combatant);

    }    
		this.current = firstItem;


    for (var i = 0; i < this.combatants.length; i++) {
			var c = this.combatants[i];
			c.addEnemies(this.combatants);
		}
  }


  getCurrent() {
    return this.current.combatant;
  }

  getNext() {
		var next = this.current.next;
		this.current = next;
    return this.current.combatant;
  }

	getActiveCount() {
		var count = 0;
		
		for (var i=0; i<this.list.length; i++) {
			if (this.list[i].combatant.isActive()) count++;
		}
		return count;
	}

	getAllCombatants() {
		return this.combatants;
	}

  // getNextActive(n) {
  // }

}