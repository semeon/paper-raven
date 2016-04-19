import React from 'react';
import {render} from 'react-dom';
import {BasicInfo} from './basic.jsx';
import {CombatStats} from './combatStats.jsx';

export class CharPanel extends React.Component {

  render () {

  	var char = this.props.char;
  	var person = char.getPerson();

  	var genderIconClass = "fa fa-male";
  	if (person.getGender() == "female") {
  		genderIconClass = "fa fa-female";
  	}

  	var combatStatsNodeId = char.getID() + "-combat-stats-node";
  	var href = "#" + combatStatsNodeId;

  	console.log(combatStatsNodeId);

    return (

			<div className="panel panel-default panel-char pull-left">
			  <div className="panel-heading">
			  	<h5>{person.getName()} &nbsp; <i className={genderIconClass} aria-hidden="true"></i></h5>
			  </div>
			  <div className="panel-body">
			  	<BasicInfo char={char} />
			  </div>
			  <div className="panel-heading sub-heading text-capitalize" >
			  	Combat Stats [<a className="text-capitalize" 
							data-toggle="collapse" 
							href={href} 
							aria-expanded="false" 
							aria-controls="combat-stats">
					  show/hide
					</a>]
			  </div>
			  <CombatStats char={char} nodeId={combatStatsNodeId}/>
			  <div className="panel-footer">
			  	Panel footer
			  </div>
			</div>

    );
  }
}

