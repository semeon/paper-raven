import React from 'react';
import {render} from 'react-dom';

import {CharCard} from 'js/views/char/charCard.jsx';

export class ActivityFeed extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
  	var activityFeedRecords = [];
  	for (var i = 0; i < this.props.feed.length; i++) {
  		var message = this.props.feed[i];
  		var record = (
					  <div key={i} className="event">
					    <div className="content">
					      <div className="summary">
					        - {message}
					      </div>
					    </div>
					  </div>
  		);
  		activityFeedRecords.push(record);
  	}

    return (

			<div className="ui small feed">
				{activityFeedRecords}
			</div>

		);
  }
}




