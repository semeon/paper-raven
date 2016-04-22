const path = require('path');

import React from 'react';
import {render} from 'react-dom';

import {chars} from './js/data/chars.js';
import {GameEngine} from './js/engine/engine.js';

// Views
import {Navbar} from './js/views/navbar/navbar.jsx';
import {Container} from './js/views/container.jsx';

import {LeftPanel} from 		'./js/views/leftpanel/leftpanel.jsx';
import {CentralPanel} from 	'./js/views/centralpanel/centralpanel.jsx';

var ge = new GameEngine();
ge.start({"chars":chars});

var hero = ge.getHero();
var party = ge.getParty();
var location = ge.getLocation();



// Render
render(<Navbar/>, document.getElementById('navbar'));

render(<LeftPanel party={party} hero={hero} location={location}  />, document.getElementById('left-panel'));
render(<CentralPanel hero={hero} location={location}  />, document.getElementById('central-panel'));



