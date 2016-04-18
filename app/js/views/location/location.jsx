import React from 'react';
import {render} from 'react-dom';

import {CharPanel} from './../char/charPanel.jsx';


export class LocationPanel extends React.Component {
  render() {

  	var location = this.props.location;
  	var locationName = location.getName();
  	var parties = location.getParties();

  	var charRows = [];

		console.dir(parties);

		for (var party in parties) {
			var p = parties[party];
			for (var mem in p.getMembers()) {
				var m = p.getMembers()[mem];
		  	charRows.push(<CharPanel charId={mem} char={m} />);
			}
		}


		console.dir(charRows);

    return (
			<div className="panel panel-default">
			  <div className="panel-heading">
			  	<h5><i className="fa fa-map-signs" aria-hidden="true"></i> {locationName}</h5>
			  </div>
			  <div className="panel-body">
			  	BODY
			  </div>
			  <div className="panel-heading sub-heading text-lowercase" >
			  	PEOPLE
			  </div>
			  <div className="panel-body">
			  	{charRows}
			  </div>
			  <div className="panel-footer">
			  	Panel footer
			  </div>
			</div>
    );
  }
}

