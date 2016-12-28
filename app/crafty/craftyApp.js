import {GameController} from './classes/gameController.js'

import {location_01} from './locations/l01/l01.js'


class CraftyApp {

	constructor(props) {
		console.log("Creating Crafty application.")
		this.gameController = new GameController()
		this.location
	}

	init() {
		console.log("Initializing Crafty application.")
		this.location = location_01
		this.gameController.init({location: this.location})
	}

	start() {
		console.log("Launching Crafty application.")
		this.gameController.start()
	}


}


export let craftyApp = new CraftyApp()

// let gc = new GameController()
//
// gc.init()
// gc.start()