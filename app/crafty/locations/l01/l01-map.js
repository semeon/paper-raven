import {EntityController} from './../../classes/entityController.js'

export class Map {
	
	constructor(props) {
		this.grid = props.grid
		this.ec = new EntityController()
		
	  this.occupied = new Array(this.grid.gridWidth)

		// Init
	  for (let x = 0; x < this.grid.gridWidth; x++) {
	    this.occupied[x] = new Array(this.grid.gridHeight)
	    for (let y = 0; y < this.grid.gridHeight; y++) {
	      this.occupied[x][y] = false;
	    }
	  }	
		this.cells = {}
		this.selector
		this.player
	}


	generate(props) {
		console.log('GENERATE')
    for (let x = 0; x < this.grid.gridWidth; x++) {
      for (let y = 0; y < this.grid.gridHeight; y++) {
				Crafty.e('Cell').at(x, y)
      }
    }
		this.player = Crafty.e('PlayerCharacter').at(0, 0)
	}

	placePlayer(props) {
		if (props.x>=0 && 
			  props.x<this.grid.gridWidth && 
			  props.y>=0 && 
				props.y<this.grid.gridHeight) {
			this.player.at(props.x, props.y)
		}
	}

	placeSelector(props) {
		if (!this.selector) {
			this.selector = Crafty.e('CellSelector').at(-1, -1)
		}		
		this.selector.at(props.x, props.y)
	}

	calculateDistance(props) {
		// a.x, a.y, b.x, b.y 
		// a: {x: 2, y: 4}, b: {x:5, y:7}
		let h = a.x - b.x  // 2-5 = -3
		let v = a.y - b.y  // 4-7 = -3
		let distance = Math.sqrt( Math.pow(h, 2) + Math.pow(v, 2)  )  // SQRT(9 + 9) = SQRT(18) = 4.24
		return distance
	}




	addEntity(props) {
		let cellKey = "cell-" + props.x + "@" +  props.y
		
		let entity 
		
		// check if the cell is initialized
		if (!this.cells[cellKey]) {
			this.cells[cellKey] = {}
		} 
		
		// check if there is an object of the same type in the cell
		if (!this.cells[cellKey][props.name]) {
			console.log("adding " + props.name + " entity to " + cellKey)
			entity = Crafty.e(props.name).at(props.x, props.y)
			
			this.cells[cellKey][props.name] = entity
		} else {
			console.log("There is already an entity of the same type there!")
		}
		
		return entity
	}

	removeEntity(props) {
		let cellKey = "cell-" + props.x + "@" +  props.y
		console.log("removing a " + props.name + " entity from " + cellKey)

		console.log("this.cells[cellKey]")
		console.dir(this.cells[cellKey])

		console.log("this.cells[cellKey][props.name]")
		console.dir(this.cells[cellKey][props.name])


		if (this.cells[cellKey] && this.cells[cellKey][props.name]) {
			this.cells[cellKey][props.name].destroy()
			delete this.cells[cellKey][props.name]
			console.log("removed")
		} 
	}





	



}

    // Place a tree at every edge square on our grid of 16x16 tiles
    // for (let x = 0; x < this.grid.gridWidth; x++) {
    //   for (let y = 0; y < this.grid.gridHeight; y++) {
    //
    // 				if (!this.occupied[x][y]) {
    // 		      let atEdge = 	x == 0 ||
    // 												x == this.grid.gridWidth - 1 ||
    // 												y == 0 ||
    // 												y == this.grid.gridHeight - 1
    //
    // 		      if (atEdge) {
    // 		        // Place a tree entity at the current tile
    // 								Crafty.e('Tree').at(x, y)
    // 				        this.occupied[x][y] = true;
    //
    // 		      } else if (Math.random() < 0.04) {
    // 		        // Place a bush entity at the current tile
    // 		         Crafty.e('Bush').at(x, y)
    // 				        this.occupied[x][y] = true;
    // 		      }
    // 				}
    //   }
    // }

	  // // Generate up to five villages on the map in random locations
	  // var maxVillages = 5;
	  // for (var x = 0; x < this.grid.width; x++) {
	  //   for (var y = 0; y < this.grid.height; y++) {
	  //     if (Math.random() < 0.02) {
	  //       if (Crafty('Village').length < maxVillages && !this.occupied[x][y]) {
	  //         Crafty.e('Village').at(x, y);
	  //       }
	  //     }
	  //   }
	  // }	
