import React from 'react';
import {render} from 'react-dom';

import {appSettings} from 'settings.js';
import {CombatantList} from './combatantList.jsx';
import {PreCombatView} from './preCombat.jsx';
import {InCombatView} from './inCombat.jsx';

import {ActivityFeed} from 'js/views/feed/feed.jsx';



export class CombatView extends React.Component {
  render() {

		var combat = this.props.combat;

		var view = {};
		console.log("== view: combat.state: " + combat.state);
		if (combat.state == "start") {
			view = <PreCombatView ge={this.props.ge} combat={this.props.ge.getActivity()}/>;
			
		} else  if (combat.state == "pre-turn" || combat.state == "turn") {
			view = <InCombatView ge={this.props.ge} combat={this.props.ge.getActivity()}/>;
			
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
				
				
				<br/>
				<div className="ui divider"></div>
				<CombatantList combat={this.props.ge.getActivity()} />
				
			</div>
    );
  }
}

