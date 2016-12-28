import {Grid} from './../../classes/grid.js'
import {Map} from './l01-map.js'

import {initComponents} from './l01-initComponents.js'

import {initLoadingScene} from './scenes/scLoading.js'
import {initGameScene} 		from './scenes/scGame.js'

let assetsObj = { 
	"sprites": {
		"res/player/dude.png": { tile: 32, tileh: 32,
			map: {
        player_sprite: [0, 0]
      },
		},
		
		"res/tiles/ground-32x32.png": { tile: 32, tileh: 32,
			map: {
        sprite_ground: [0, 0],
        sprite_ground_hover: [1, 0]
      }
    },

		"res/tiles/hover-32x32.png": { tile: 32, tileh: 32,
			map: {
        sprite_hover: [0, 0]
      }
    },

		"res/tiles/path.png": { tile: 32, tileh: 32,
			map: {
        sprite_path: [0, 0],
      }
    }
	}
}

let grid = new Grid(
	{
		tileWidth: 32,
		tileHeight: 32,
		gridWidth: 24,
		gridHeight: 16
	}
)

let map = new Map({grid: grid})

export let location_01 = {
	name: "location_01",
	assets: {},
	background: "rgb(249, 223, 125)",
	grid: grid,
	init: function(props) {
		initComponents({map: map})
		initLoadingScene({assets: assetsObj})
		initGameScene({map: map})
	},
	startSceneName: "Loading"
}
