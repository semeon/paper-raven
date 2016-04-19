import React from 'react';
import {render} from 'react-dom';

import {LeftPanel} from 		'./leftpanel/leftpanel.jsx';
import {CentralPanel} from 	'./centralpanel/centralpanel.jsx';

import './../../sass/common.scss';
import './../../sass/container.scss';
import './../../sass/charPanel.scss';

export class Container extends React.Component {

  render () {
		console.log("Container view");
    return (
			<div>
		  	<CentralPanel location={this.props.location} hero={this.props.hero} />
			</div>
    );
  }
}

