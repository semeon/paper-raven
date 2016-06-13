import {dice} 		from 'js/model/dice/dice.js';
import Party 			from 'js/model/party/party.js';
import Character 	from 'js/model/char/character.js';

export var charGen = {};

charGen.GenerateParty = function(pid, n, title, image) {

	var name = title;
	if (!name) name = chance.radio();

	var party = new Party(pid, name, "aggressive");
	// var party = new Party(pid, chance.street(), "aggressive");

	var mems = [];

	for (var i = 0; i < n; i++) {
		var id = "random" + pid + i;
		var char = charGen.GenerateChar(id, chance.first(), image);
		mems.push(char);
	}
	party.addMembers(mems);
	return party;
}


charGen.GenerateChar = function(id, name, image, isPlayer) {
	var char = {};
	char.id = id;
	char.isPlayer = false;
	if (isPlayer) char.isPlayer = true;
	if (isPlayer) char.isGodMode = true;
	char.person = {};
	char.person.name = name;
	char.person.gender = "male";
	if(dice.rollBool(50)) char.person.gender = "female";

	if(image) char.person.image = image;

	char.special = {};
	char.special["S"] = dice.rollD10().value;
	char.special["P"] = dice.rollD10().value;
	char.special["E"] = dice.rollD10().value;
	char.special["C"] = dice.rollD10().value;
	char.special["I"] = dice.rollD10().value;
	char.special["A"] = dice.rollD10().value;
	char.special["L"] = dice.rollD10().value;

	var res = new Character(char);

	return res;
}
