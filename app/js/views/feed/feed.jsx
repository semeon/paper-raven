import React from 'react';
import {render} from 'react-dom';


export class ActivityFeed extends React.Component {


  render() {
		var logs = this.props.data;
  	var activityFeedRecords = [];
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




