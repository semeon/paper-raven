const path = require('path');

import React 		from 'react';
import {render} from 'react-dom';

import './../../sass/common.scss';
import './../../sass/container.scss';
import './../../sass/charCard.scss';

// Views
import {Navbar}				from  'js/views/navbar/navbar.jsx';
import {Container}		from  'js/views/container/container.jsx';

// import {LeftPanel} 		from 	'js/views/leftpanel/leftpanel.jsx';
// import {CentralPanel} from 	'js/views/centralpanel/centralpanel.jsx';
// import {RightPanel}   from 	'js/views/rightpanel/rightpanel.jsx';

// export renderer = new AppRenderer();

export class AppRenderer {
	constructor(ge) {
		this.ge 			= ge;
		this.hero 		= ge.getHero();
		this.party 		= ge.getParty();
		this.location = ge.getLocation();
	}

	renderAll() {
		this.renderNavBar();
		this.renderContainer();
	}


	renderNavBar() {
		render(<Navbar />, document.getElementById('navbar'));
	}

	renderContainer() {
		render(<Container ge={this.ge} />, document.getElementById('container-mount'));
	}
}
