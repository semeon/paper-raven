export class Map {
	
	constructor(props) {
		this.grid = props.grid

	  this.occupied = new Array(this.grid.width);
	  for (var i = 0; i < this.grid.width; i++) {
	    this.occupied[i] = new Array(this.grid.height);
	    for (var y = 0; y < this.grid.height; y++) {
	      this.occupied[i][y] = false;
	    }
	  }	
	}

	generate(props) {

		console.log('GENERATE')

	  // Player character, placed at 5, 5 on our grid
	  this.player = Crafty.e('PlayerCharacter').at(5, 5);
	  this.occupied[this.player.at().x][this.player.at().y] = true;



    // Place a tree at every edge square on our grid of 16x16 tiles
    for (let x = 0; x < this.grid.width; x++) {
      for (let y = 0; y < this.grid.height; y++) {

    				if (!this.occupied[x][y]) {
    		      let atEdge = 	x == 0 ||
    												x == this.grid.width - 1 ||
    												y == 0 ||
    												y == this.grid.height - 1

    		      if (atEdge) {
    		        // Place a tree entity at the current tile
    								Crafty.e('Tree').at(x, y)
    				        this.occupied[x][y] = true;

    		      } else if (Math.random() < 0.04) {
    		        // Place a bush entity at the current tile
    		         Crafty.e('Bush').at(x, y)
    				        this.occupied[x][y] = true;
    		      }
    				}
      }
    }

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
	}
	
}