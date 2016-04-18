import React from 'react';
import {render} from 'react-dom';

import {chars} from './js/data/chars.js';
import {GameEngine} from './js/engine/engine.js';

// Views
import {Navbar} from './js/views/navbar/navbar.jsx';
import {Container} from './js/views/container.jsx';
import {LeftPanel} from './js/views/leftpanel/leftpanel.jsx';




var ge = new GameEngine();
ge.start({"chars":chars});

var hero = ge.getHero();



// Render
render(<Navbar/>, document.getElementById('navbar'));
render(<Container hero={hero}/>, document.getElementById('container'));

// render(<LeftPanel hero={hero}/>, document.getElementById('leftpanel'));

