export let initComponents = function(props) {

	let map = props.map
	let grid = props.map.grid



	// The Grid component allows an element to be located on a grid of tiles
	Crafty.c('Grid', {
		init: function() {
			this.attr({
				w: grid.tileWidth,
				h: grid.tileHeight
			});
		},

		// Locate this entity at the given position on the grid
		at: function(x, y) {
			if (x === undefined && y === undefined) {
				return { x: this.x/grid.tileWidth, y: this.y/grid.tileHeight }
			} else {
				this.attr({ x: x * grid.tileWidth, y: y * grid.tileHeight })
				return this;
			}
		}
	})

	// Cell Selector
	Crafty.c('CellSelector', {
	  init: function() {
	    this.requires('2D, Canvas, Grid, Mouse, sprite_hover')
					.bind('DoubleClick', function(MouseEvent){
						map.placePlayer({x: this.at().x, y: this.at().y})
					})
			this.attr({z: 1000})
	  }
	})



	// Grid cell
	Crafty.c('Cell', {
	  init: function() {
	    this.requires('2D, Canvas, Grid, Mouse, sprite_ground')
					.bind('Click', function(MouseEvent){
						map.placeSelector({x: this.at().x, y: this.at().y})
					})
			this.attr({z: 1000})
			
	  }
	})
	

	Crafty.c('Path', {
	  init: function() {
	    this.requires('2D, Canvas, Grid, Mouse, sprite_path')
	  }
	})


	// An "Actor" is an entity that is drawn in 2D on canvas via our logical coordinate grid
	Crafty.c('Actor', {
	  init: function() {
	    this.requires('2D, Canvas, Grid')
	  }
	})

	Crafty.c('Tree', {
	  init: function() {
	    this.requires('Actor, Color, Solid')
	    this.color('rgb(20, 125, 40)')
	  }
	})

	Crafty.c('Bush', {
	  init: function() {
	    this.requires('Actor, Color, Solid')
	    this.color('rgb(20, 185, 40)')
	  }
	})

	Crafty.c('PlayerCharacter', {
	  init: function() {
	    this.requires('Actor, Keyboard, player_sprite, SpriteAnimation' )
			.attr('z', 100000000)
			.bind('KeyDown', 
				function () { 
					if (this.isDown('RIGHT_ARROW')) {
						map.placePlayer({x: this.at().x+1, y: this.at().y})
					} else if (this.isDown('LEFT_ARROW')) {
						map.placePlayer({x: this.at().x-1, y: this.at().y})
					} else if (this.isDown('UP_ARROW')) {
						map.placePlayer({x: this.at().x, y: this.at().y-1})
					} else if (this.isDown('DOWN_ARROW')) {
						map.placePlayer({x: this.at().x, y: this.at().y+1})
					}
				})
	  }
	})

}