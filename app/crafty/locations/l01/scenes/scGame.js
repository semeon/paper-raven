export let initGameScene = function(props)  {

	Crafty.defineScene(
		
		'Game', 
	
		function() {
			console.log('Scene start: Game')
			Crafty.background('rgb(249, 223, 125)')

			props.map.generate()
			
		}, 
	
		function() {
		  this.unbind('VillageVisited', this.show_victory);
		}
	)

	
}

