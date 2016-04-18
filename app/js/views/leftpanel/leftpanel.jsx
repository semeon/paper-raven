import React from 'react';
import {render} from 'react-dom';

import {HeroPanel} from './hero/hero.jsx';

export class LeftPanel extends React.Component {
  render() {

    return (

			  <div className="pull-left" id="left-panel">
			  	<HeroPanel hero={this.props.hero} />
			  </div>
    );
  }
}

