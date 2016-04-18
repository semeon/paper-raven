import React from 'react';
import {render} from 'react-dom';

import {HeroPanel} from './hero/hero.jsx';


import Stats from './stats/stats.jsx';
import './../../../sass/leftpanel.scss';

export class LeftPanel extends React.Component {
  render() {

    return (

			  <div className="container pull-left" id="left-panel">
			  	<HeroPanel hero={this.props.hero} />
			  </div>
    );
  }
}

