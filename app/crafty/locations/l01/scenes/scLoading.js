export let initLoadingScene = function(props) {


	Crafty.defineScene('Loading', 
	
		function() {
			
			console.log('Scene start: Loading')

		  // Crafty.e('2D, DOM, Text')
		  //   .attr({ x: 275, y: 150 })
		  // 				.textFont({ size: '24px', weight: 'bold', family: 'Arial' })
		  //   .text('PLEASE STAND BY')
		  // 				.textColor('#666666')

			// console.dir(props.assets)
		
			Crafty.load(props.assets, function() {
				
				setTimeout(function(){ Crafty.scene('Game')}, 
									 5000);
				
		  })
		}
	)
	
}

