import React from 'react';
import {render} from 'react-dom';

import {LocationPanel} from './../location/location.jsx';

export class CentralPanel extends React.Component {
  render() {

    return (

			  <div className="pull-left" id="central-panel">
			  	<LocationPanel location={this.props.location} />
			  </div>
    );
  }
}

