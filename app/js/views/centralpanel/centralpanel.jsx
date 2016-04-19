import React from 'react';
import {render} from 'react-dom';

import {LocationPanel} from './../location/location.jsx';

export class CentralPanel extends React.Component {
  render() {

    return (

			  <div className="ui segment" id="central-panel">
			  	<LocationPanel location={this.props.location} />
			  </div>
    );
  }
}

