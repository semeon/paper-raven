import React from 'react';
import {render} from 'react-dom';

import {PreCombatView} from './preCombat.jsx';


import {CharCard} from 'js/views/char/charCard.jsx';

import {CharLabel} from 'js/views/char/charLabel.jsx';
import {appSettings} from 'settings.js';

export class CombatView extends React.Component {
  render() {

		//     var img = "default.png";
		//     var imgFullPath = appSettings.character.imagePath + img;
		//
		//   	var attacker = {};
		//   	var defender = {};
		// attacker = this.props.hero;
		// defender = this.props.hero;

		// var deffenderCard = {};
  	// if(this.props.combat && this.props.combat.getDefender()) {
  	// 	  // 	attacker = this.props.combat.getAttacker();
  	// 	  	defender = this.props.combat.getDefender();
  	// 	  	deffenderCard = (
  	// 	  		<CharCard char={defender} />
  	// 	  	);
  	// } else {
  	// 	  	deffenderCard = (
  	// 	      <div className="ui card char">
  	// 	        <div className="image">
  	// 	        	<img src={imgFullPath} />
  	// 	        </div>
  	//
  	// 	        <div className="content">
  	// 	          <div className="header center aligned">
  	// 	    		  	<h3>No target selected</h3>
  	// 	          </div>
  	// 	        </div>
  	// 	      </div>
  	// 	  	);
  	//
  	// }
		
		var combat = this.props.combat;

		var partyColumns = [];
		combat.parties.forEach(function(party){
			
			var members = party.getMembers();
			var memberNodes = [];

			for (var i in members) {
				var member = members[i];
				var memberNode = (
					<div key={member._id} className="item">
						<CharLabel  char={member} />
					</div>
				);
				memberNodes.push(memberNode);
			}
			
			
			var column = (
				<div key={party._id} className="column">
					<h5>{party.name}</h5>
					<div className="ui list">
					{memberNodes}
					</div>
				</div>
			);
			
			partyColumns.push(column);
		});


		var view = {};
		
		if (combat.phase == "pending") {
			view = <PreCombatView ge={this.props.ge} combat={this.props.ge.getActivity()}/>;
		} else {
			view = (
				<div className="ui icon message">
				  <div className="content">
				    <p>Combat phase: {combat.phase}</p>
				  </div>
				</div>
			);
		}
		

    return (
			<div className="ui attached segment">

				{view}
				
				<br/>
				<div className="ui divider"></div>
				<div className="ui equal width grid">
					{partyColumns}
				</div>					
			</div>
    );
  }
}

