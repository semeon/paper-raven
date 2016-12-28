const path = require('path');

import {logger}   		from 'js/engine/eventlogger/eventlogger.js';
import {AppState}   	from './appState.js';

import {GameEngine}		from 'js/engine/engine.js';
import {AppRenderer}  from 'js/views/renderer.jsx';

import {craftyApp}    from 'crafty/craftyApp.js'


class Application {
	constructor() {
		this.state = new AppState(this)
		this.ge = new GameEngine(this)
		this.renderer = new AppRenderer(this.ge)
		this.crafty = craftyApp
		logger.setRenderer(this.renderer)
	}

	start(props) {
		// this.crafty.init()
		this.ge.start()
	}

	render() {
		// console.log("app.render()")
		this.renderer.renderAll(this.e)
	}
}

export var app = new Application()