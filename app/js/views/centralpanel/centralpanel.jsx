import React from 'react';
import {render} from 'react-dom';

import {LocationPanel} from './../location/location.jsx';

export class CentralPanel extends React.Component {
  render() {

    return (

			  <div className="ui segments">
					<div className="ui secondary segment header">
					  <h5>Location</h5>
					</div>		

					<div className="ui segment">
				  	<LocationPanel location={this.props.location} />
					</div>	

			  </div>
    );
  }
}

