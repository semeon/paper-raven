import React from 'react';
import {render} from 'react-dom';

import {CharPanel} from './../char/charPanel.jsx';

export class LeftPanel extends React.Component {
  render() {

    return (

			  <div className="pull-left" id="left-panel">
			  	<CharPanel char={this.props.hero} />
			  </div>
    );
  }
}

