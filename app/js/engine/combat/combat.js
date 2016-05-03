import {logger}   from 'js/engine/eventlogger/eventlogger.js';

import Combatants from './combatants.js';
import CombatTurn from './combatturn.js';

class Combat {

  constructor(combatParties) {

    this.parties = combatParties;
    this.combatants = {};
    this.combatantsArray = [];
    this.turnDelay = 500;


    this.combatState = {};
      this.round = 0;
      this.turn = 0;
      this.turnsMadeLastRound = 0;
      this.combatIsOver = false;

    this.set();
    // this.startNextTurn();

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
      this.combatants[i] = char;
    }
  }

  startNextTurn() {
    var self = this;

    // New Round
    if (self.turn == 0) {
      console.log("--------------------------------");
      console.log("-- Combat Round: " + this.round);
      console.log("--------------------------------");
    }

    self.makeTurn(self);
    // setTimeout( function() {
    //               self.makeTurn(self);
    //             }
    //             , 
    //             self.turnDelay);
  }

  makeTurn(self) {
    // console.log("");
    // console.log("-- Turn: " + self.turn +   " (" + char.getPerson().getName()  + ")");

    var char = self.combatants[self.turn];
    var delay = 0;

    var turn = new CombatTurn(char, self.combatantsArray);
    var turnResult = turn.make();

    if(turnResult) {
      self.turnsMadeLastRound++;
      delay = self.turnDelay;
    }

    setTimeout( function() {
                  self.endTurn(self);
                }
                , 
                delay);
  }

  endTurn(self) {
    // console.log("---- TURN CALLBACK HAPPENS NOW");

    self.turn++;

    // Check if round is over
    if(!self.combatants[self.turn+1]) {

      console.log("-- Round is over");
      console.log("--------------------------------");
      console.log("");

      if(self.turnsMadeLastRound == 0) {
        self.combatIsOver = true;
      } 

      // Round stat reset
      self.turnsMadeLastRound = 0;
      self.turn = 0;
      self.round ++;
    } 


    // Kill switch
    if(self.round > 30) {
      self.combatIsOver = true;
      console.log("-- Combat is over");
      console.log("--------------------------------");
    }


    // Check if combat is not over
    if(!self.combatIsOver) {
      self.startNextTurn();
    } else {
      this.endCombat();
    }


  }

  endCombat() {
    console.log("-- Combat is over");
    console.log("--------------------------------");

    logger.log("Combat is over.");

    console.dir(logger.getFeed());
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