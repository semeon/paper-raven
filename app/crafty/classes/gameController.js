// const Crafty = require('craftyjs')

export class GameController {

	constructor(props) {
	}

	init(props) {
		this.location = props.location
		this.location.init()

    // Crafty.init(this.grid.mapWidth, this.grid.mapHeight)
		// Crafty.background('rgb(249, 223, 125)')

    Crafty.init(this.location.grid.mapWidth, this.location.grid.mapHeight, document.getElementById('game'))
		Crafty.background('#000000 url(res/bg/stand_by_01.gif)no-repeat center center')

		// stand_by_01.gif
	}

	start() {
		console.log("GameController is starting the scene: " + this.location.startSceneName)
		
		Crafty.scene(this.location.startSceneName)
	}


}