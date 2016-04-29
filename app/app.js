const path = require('path');

import React 		from 'react';
import {render} from 'react-dom';

import {chars} 			from './js/data/chars.js';
import {GameEngine}	from './js/engine/engine.js';

// Renderer
import {AppRenderer}   from 	'./js/views/renderer.jsx';

// Views
// import {Navbar}			from './js/views/navbar/navbar.jsx';
// import {LeftPanel} 		from 		'./js/views/leftpanel/leftpanel.jsx';
// import {CentralPanel} from 	'./js/views/centralpanel/centralpanel.jsx';
// import {RightPanel}   from 	'./js/views/rightpanel/rightpanel.jsx';


class Application {
	constructor(p) {
		this.ge = new GameEngine();
		this.ge.start();

		this.renderer = new AppRenderer(this.ge);
	}

	render() {
		this.renderer.render(this.ge);
	}
}

var app = new Application(); 
app.render();

// var ge = new GameEngine();
// ge.start({"chars":chars});

// var hero = ge.getHero();
// var party = ge.getParty();
// var location = ge.getLocation();


// Render
// render(<Navbar/>, document.getElementById('navbar'));
// render(<LeftPanel party={party} location={location} />, document.getElementById('left-panel'));
// render(<CentralPanel hero={hero} location={location} />, document.getElementById('central-panel'));
// render(<RightPanel party={party} location={location}  />, document.getElementById('right-panel'));






