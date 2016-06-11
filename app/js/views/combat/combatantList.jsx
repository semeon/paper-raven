import React from 'react';
import {render} from 'react-dom';

import {PreCombatView} from './preCombat.jsx';


import {CharCard} from 'js/views/char/charCard.jsx';

import {CharLabel} from 'js/views/char/charLabel.jsx';
import {appSettings} from 'settings.js';

export class CombatantList extends React.Component {
  render() {

		var combat = this.props.combat;

		var partyColumns = [];
		combat.parties.forEach(function(party){
			
			var members = party.getMembers();
			var memberNodes = [];

			for (var i in members) {
				var member = members[i];
				var memberNode = (
					<div key={member._id} className="item">
						<CharLabel char={member} />
					</div>
				);
				memberNodes.push(memberNode);
			}
			
			
			var column = (
				<div key={party._id} className="sixteen wide mobile eight wide tablet five wide computer column">
					<h5>{party.name}</h5>
					<div className="ui list">
					{memberNodes}
					</div>
				</div>
			);
			
			partyColumns.push(column);
		});

    return (
			<div className="ui equal width stackable grid">
				{partyColumns}
			</div>					
    );
  }
}

