const path = require('path');

import React 		from 'react';
import {render} from 'react-dom';

// Views
import {Navbar}				from  'js/views/navbar/navbar.jsx';
import {LeftPanel} 		from 	'js/views/leftpanel/leftpanel.jsx';
import {CentralPanel} from 	'js/views/centralpanel/centralpanel.jsx';
import {RightPanel}   from 	'js/views/rightpanel/rightpanel.jsx';

// export renderer = new AppRenderer();

export class AppRenderer {
	constructor(ge) {
		// this.nb = Navbar;
		// this.lp = LeftPanel;
		// this.cp = CentralPanel;
		// this.rp = RightPanel;
		this.hero 		= ge.getHero();
		this.party 		= ge.getParty();
		this.location = ge.getLocation();

	}

	render() {
		this.renderNavBar();
		this.renderLeftPanel();
		this.renderCentralPanel();
		this.renderRightPanel();
	}

	renderNavBar() {
		render(<Navbar />, document.getElementById('navbar'));
	}

	renderLeftPanel() {
		render(<LeftPanel party={this.party} location={this.location} />, document.getElementById('left-panel'));
	}
	renderCentralPanel() {
		render(<CentralPanel hero={this.hero} location={this.location} />, document.getElementById('central-panel'));
	}
	renderRightPanel() {
		render(<RightPanel party={this.party} location={this.location}  />, document.getElementById('right-panel'));
	}
}