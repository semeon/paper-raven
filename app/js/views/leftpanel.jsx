import React from 'react';
import {render} from 'react-dom';

import Stats from './stats/stats.jsx';

class LeftPanel extends React.Component {
  render () {
    return (
			  <div className="col-lg-3 col-md-4">

					<div className="panel panel-default">
					  <div className="panel-heading">
					    <h3 className="panel-title">Character</h3>
					  </div>
					  <div className="panel-body">
					    Panel content
			  			
			  			<Stats />

					  </div>
					</div>
			  	

			  </div>
    );
  }
}

render(<LeftPanel/>, document.getElementById('leftpanel'));