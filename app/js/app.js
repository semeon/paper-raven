const path = require('path');

import {logger}   		from 'js/engine/eventlogger/eventlogger.js';
import {AppState}   	from './appState.js';

import {GameEngine}		from 'js/engine/engine.js';
import {AppRenderer}  from 'js/views/renderer.jsx';



class Application {
	constructor() {
		this.state = new AppState(this);
		this.ge = new GameEngine(this);
		this.renderer = new AppRenderer(this.ge);
		logger.setRenderer(this.renderer);
	}

	start() {
		this.ge.start();
	}

	render() {
		// console.log("app.render()");
		this.renderer.renderAll(this.ge);
	}
}

export var app = new Application();