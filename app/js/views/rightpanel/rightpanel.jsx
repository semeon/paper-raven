import React from 'react';
import {render} from 'react-dom';

import {ActivityFeed} from 	'js/views/feed/feed.jsx';

export class RightPanel extends React.Component {

  constructor(props) {
    super(props);
  }

	componentDidUpdate() {
		var element = document.getElementById("activity-feed");
		element.scrollTop = element.scrollHeight;
	}

  render() {

    return (
		  <div className="ui segments">
				<div className="ui secondary segment header">
				  <h5>Activity Log  <span className="right floated">
          	<i className="fa fa-cog" aria-hidden="true"></i>
          </span>
         	</h5>
				</div>		  

				<div className="ui segment" id="activity-feed">
					<ActivityFeed feed={this.props.feed}/>
				</div>		  

		  </div>
    );
  }
}

