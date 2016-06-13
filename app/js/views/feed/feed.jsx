import React from 'react';
import {render} from 'react-dom';

import {logger} from 'js/engine/eventlogger/eventlogger.js';


export class ActivityFeed extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
  	var activityFeedRecords = [];
		
		var logs = logger.getFeed();
		
  	for (var i = 0; i < logs.length; i++) {
  		var message = logs[i];
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




