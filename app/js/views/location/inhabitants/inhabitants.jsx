import React from 'react';
import {render} from 'react-dom';

import {CharCard} from 'js/views/char/charCard.jsx';


export class InhabitantsView extends React.Component {
  render() {

  	var location = this.props.location;
  	var locationName = location.getName();
  	var parties = location.getParties();


  	var partyRows = [];


		for (var p in parties) {
			var party = parties[p];

			var pr = (
				<div key={"name_"+p} className="ui secondary segment header">
					<h5>{party.getName()}</h5>
				</div>		  
			);

			var charRows = [];
			for (var m in party.getMembers()) {
				var member = party.getMembers()[m];
		  	charRows.push(<CharCard key={m} char={member} />);
			}

	  	var cGroup = (
				<div key={"group_"+p} className="ui segment red">
					<div className="ui attached cards npc">
					  	{charRows}
					</div>
				</div>
	  	);

			partyRows.push(pr);
			partyRows.push(cGroup);
		}

    return (
			<div className="ui segments">
				{partyRows}
			</div>	
    );
  }
}

