const path = require('path');

import {logger}   		from 'js/engine/eventlogger/eventlogger.js';
import {GameEngine}		from 'js/engine/engine.js';
import {AppRenderer}  from 'js/views/renderer.jsx';

export class Application {
	constructor() {
		this.ge = new GameEngine();
		this.renderer = new AppRenderer(this.ge);
		logger.setRenderer(this.renderer);

	}

	start() {
		this.ge.start();
	}

	render() {
		this.renderer.renderAll(this.ge);
	}
}