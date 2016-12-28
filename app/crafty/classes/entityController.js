const shortid = require('shortid')
 
export class EntityController {
	
	constructor(props) {
		this.registry = {}
		this.positions = []
	}
	
	addEntity(props) {
		// props = {entity, name, x, y}
		let entityRecord = {}
		entityRecord.id = props.name + shortid.generate()
		entityRecord.obj = props.entity
		entityRecord.x = props.x
		entityRecord.y = props.y
		
		this.registry[this.registry] = entityRecord
	
		return entityRecord.id
	}
	
	
	getEntity(props) {
		return this.registry[props.id]
	}
	
}