import React from 'react';
import {render} from 'react-dom';

import {LeftPanel} from './leftpanel/leftpanel.jsx';

export class Container extends React.Component {

  render () {
		console.log("Container view");
    return (
			<div className="row">
		  	<LeftPanel hero={this.props.hero} />
			</div>
    );
  }
}

