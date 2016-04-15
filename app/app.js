import React from 'react';

import {chars} from './js/data/chars.js';
import GameEngine from './js/engine/engine.js';

// Views
import Container from './js/views/navbar.jsx';
import LeftPanel from './js/views/leftpanel.jsx';

// import Container from './js/views/container.jsx';



var ge = new GameEngine();

ge.start({"chars":chars});

// console.log(ge.private);

// ge.log("GE Created!");

// console.log(ge);



import Stats from './js/views/stats/stats.jsx';

