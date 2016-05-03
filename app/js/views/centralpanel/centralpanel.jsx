const path = require('path');

import React from 'react';
import {render} from 'react-dom';

import {CombatView} from 'js/views/combat/combat.jsx';
import {LocationPanel} 		from 'js/views/location/location.jsx';
import {InhabitantsView} 	from 'js/views/location/inhabitants/inhabitants.jsx';

export class CentralPanel extends React.Component {
  render() {

    return (
			<div className="ui segments attached">

				<div className="ui top attached header">
				  <h5><i className="fa fa-map-signs" aria-hidden="true"></i> Location: Hope</h5>
				</div>		

		    <CombatView hero={this.props.hero} />

			</div>
    );
  }
}

