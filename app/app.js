const path = require('path');

import React 		from 'react';
import {render} from 'react-dom';

import {logger}   	from 'js/engine/eventlogger/eventlogger.js';
import {GameEngine}	from 'js/engine/engine.js';

// Renderer
import {AppRenderer}   from 'js/views/renderer.jsx';



class Application {
	constructor(p) {
		this.ge = new GameEngine();
		this.renderer = new AppRenderer(this.ge);
		logger.setRenderer(this.renderer);

		this.start();
	}

	start() {
		this.ge.start();
	}

	render() {
		this.renderer.renderAll(this.ge);
	}



}

var app = new Application(); 
app.render();







