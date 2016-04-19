import React from 'react';
import {render} from 'react-dom';

import {CharPanel} from './../char/charPanel.jsx';

export class LeftPanel extends React.Component {
  render() {

    return (
		  <div className="ui segment">
		  	<div className="ui cards">
		  		<CharPanel char={this.props.hero} />
		  	</div>
		  </div>
    );
  }
}

