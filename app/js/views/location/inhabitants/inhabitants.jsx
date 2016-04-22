import React from 'react';
import {render} from 'react-dom';

import {CharCard} from 'js/views/char/charCard.jsx';


export class InhabitantsView extends React.Component {
  render() {

  	var location = this.props.location;
  	var locationName = location.getName();
  	var parties = location.getParties();


  	var partyRows = [];


		for (var party in parties) {
			var p = parties[party];

			var pr = (
				<div className="ui secondary segment header">
					<h5>{p.getName()}</h5>
				</div>		  
			);

			var charRows = [];
			for (var m in p.getMembers()) {
				var member = p.getMembers()[m];
		  	charRows.push(<CharCard charId={m} char={member} />);
			}

	  	var cGroup = (
				<div className="ui segment red">
					<div className="ui attached cards">
					  	{charRows}
					</div>
				</div>
	  	);

			partyRows.push(pr);
			partyRows.push(cGroup);
		}


		console.dir(charRows);

    return (
			<div className="ui segments">
				{partyRows}
			</div>	
    );
  }
}

