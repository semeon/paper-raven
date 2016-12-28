import {Grid} from './grid.js'


export class Location {

	constructor(props) {
		this.grid = new Grid(props.settings.grid)
		this.settings = props.settings
		this.startSceneName = props.settings.startSceneName
	}

	init(props) {
		Crafty.stop(true) // Clear game data
    Crafty.init(this.grid.mapWidth, this.grid.mapHeight)
		Crafty.background(this.settings.background)
	}

	launchStartScene() {
		Crafty.scene(this.startSceneName)
	}


}