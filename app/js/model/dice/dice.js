class Dice {

  constructor(options) {
		console.log("A Dice instance created.");
  }

	roll(min, max) {
		var diff = max - min;
		var result = min + Math.floor((Math.random() * diff) + 1);
		return result;
	}

	rollBool(prob) {
		// let's say prop is 5%
		// anything anything <=5 from 100 wil return TRUE

		var result = false;
		var random100 = Math.floor((Math.random() * 100) + 1);
		// (0.75345 * 100) + 1 = 75.345 + 1 = 76.345
		// Floor () = 76
		// 
		// (0.0153 * 100) + 1 = 1.53 + 1 = 2.53
		// Floor () = 2
		// 
		// (0.00 * 100) + 1 = 0 + 1 = 1
		// (0.01 * 100) + 1 = 1 + 1 = 2
		// (0.02 * 100) + 1 = 2 + 1 = 3
		// (0.03 * 100) + 1 = 1 + 1 = 4
		// (0.04 * 100) + 1 = 2 + 1 = 5

		if (random100 <= prob) result = true;
		return result;
	}

	d(sides, count) {
		if (!count) count = 1;

		var result = {};
		result.value = 0;
		result.details = [];

		for (var i=0; i<count; i++) {

			var diceNum = i+1;
			var diceID = "Dice#" + diceNum;
			var diceRoll = this.roll(1, sides);

			result.details.push(diceRoll);
			result.value = result.value + diceRoll;
		}

		return result;
	}

	rollD6(count) {
		return this.d(6, count);
	}

	rollD10(count) {
		return this.d(10, count);
	}

	rollD20(count) {
		return this.d(20, count);
	}
}

export var dice = new Dice();


// export default Dice;