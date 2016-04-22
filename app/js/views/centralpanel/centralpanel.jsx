import React from 'react';
import {render} from 'react-dom';

import {LocationPanel} from './../location/location.jsx';
import {InhabitantsView} from './../location/inhabitants/inhabitants.jsx';

export class CentralPanel extends React.Component {
  render() {

    return (

			  <div className="ui segments">
					<div className="ui secondary segment header">
					  <h5><i className="fa fa-map-signs" aria-hidden="true"></i> Location: Hope</h5>
					</div>		

					<div className="ui segment">
						<div className="ui secondary pointing menu">
						  <a className="active item">
						    Inhabitants
						  </a>
						  <a className="item">
						    Loot
						  </a>
						  <a className="item">
						    Trader
						  </a>
						  <a className="item">
						    Doctor
						  </a>
						  <div className="right menu">
						    <a className="ui item">
						      Notes
						    </a>
						  </div>
						</div>
					</div>

			  	<InhabitantsView location={this.props.location} />

			  </div>
    );
  }
}

//				  	<LocationPanel location={this.props.location} />
