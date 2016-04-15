import React from 'react';

import {chars} from './js/data/chars.js';
import GameEngine from './js/engine/engine.js';

var ge = new GameEngine();

ge.start({"chars":chars});

// console.log(ge.private);

// ge.log("GE Created!");

// console.log(ge);



import View from './js/views/view.jsx';

// render(<View/>, document.getElementById('app'));

// class App extends React.Component {
//   render () {
//     return <p> Hello React!</p>;
//   }
// }

//render(<App/>, document.getElementById('app'));