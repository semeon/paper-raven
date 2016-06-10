const path = require('path');

import React from 'react';
import {render} from 'react-dom';

import {LeftPanel} 		from 	'js/views/leftpanel/leftpanel.jsx';
import {CentralPanel} from 	'js/views/centralpanel/centralpanel.jsx';
import {RightPanel}   from 	'js/views/rightpanel/rightpanel.jsx';

export class Container extends React.Component {

  constructor(props) {
    super(props);
  }

	componentDidUpdate() {
	}

  render() {

		var hero 			= this.props.ge.getHero();
		var party 		= this.props.ge.getParty();
		var location 	= this.props.ge.getLocation();

    return (
			<div className="ui grid" id="container">
				<div className="three wide column">
					<LeftPanel party={party} location={location} />
				</div>

				<div className="twelve wide column">
					<CentralPanel ge={this.props.ge} hero={hero} location={location} />
				</div>
			
			</div>
    );
  }
}

			// <div className="ui segment" id="container">
			//   <div className="ui left rail very close" id="left-panel">
			// 		<LeftPanel party={party} location={location} />
			//   </div>
			//
			//   <div className="ui right rail  very close" id="right-panel">
			// 		<RightPanel	feed={this.props.ge.getLogger().getFeed()}/>
			//   </div>
			//
			// 	<CentralPanel ge={this.props.ge} hero={hero} location={location} />
			//
			//
			// </div>

		  	// <InhabitantsView location={location} />

