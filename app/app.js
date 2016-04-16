import React from 'react';
import {render} from 'react-dom';

import {chars} from './js/data/chars.js';
import {GameEngine} from './js/engine/engine.js';

// Views
import {Navbar} from './js/views/navbar/navbar.jsx';
import {LeftPanel} from './js/views/leftpanel/leftpanel.jsx';

// Execute
render(<Navbar/>, document.getElementById('navbar'));



var ge = new GameEngine();
ge.start({"chars":chars});

var hero = ge.getHero();

// console.log(ge.private);
// ge.log("GE Created!");
// console.log(ge);



render(<LeftPanel hero={hero}/>, document.getElementById('leftpanel'));

