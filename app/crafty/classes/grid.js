export class Grid {
	
	constructor(props) {

		this.tileWidth 	= props.tileWidth
		this.tileHeight = props.tileHeight
		this.gridWidth 	= props.gridWidth
		this.gridHeight = props.gridHeight

		this.mapWidth 	= this.tileWidth * this.gridWidth
		this.mapHeight 	= this.tileHeight * this.gridHeight
	}

}
