var Chance = require('chance');
var chance = new Chance();

import {charGen} 	from 'js/utils/charGen.js';
import {dice} 		from 'js/model/dice/dice.js';
import Location 	from 'js/model/location/location.js';

export var locGen = {};

locGen.GenerateLocation = function () {

	var loc = new Location("loc01", chance.city());
	var raiders = charGen.GenerateParty("raiders", 2, "Raiders", "hockey-mask.png");
	var junkies = charGen.GenerateParty("p1", 2, "Junkies", "sticky_max.png");
	var merchants = charGen.GenerateParty("p2", 2, "Caravan", "robo/robocop.png");

	loc.addParties([raiders, junkies, merchants]);

	return loc;

}