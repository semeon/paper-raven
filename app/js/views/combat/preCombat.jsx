import React from 'react';
import {render} from 'react-dom';

import {appSettings} from 'settings.js';

export class PreCombatView extends React.Component {
  render() {

		var combat = this.props.combat;
		
		function onStartClick() {
			combat.start();
		}
		
		
    return (
			<div>

				<div className="ui icon red message">
				  <i className="warning circle icon"></i>
				  <div className="content">
				    <div className="header">
				      A combat is about to start
				    </div>
				    <p>You are not able to retreat from this location.</p>
				    <p>Prepare for the combat and start when ready.</p>
				  </div>
				</div>			

				<div className="ui equal width grid">
					<div className="column center aligned">
			    	<button className="ui blue button" onClick={onStartClick}>Start Combat</button>
					</div>
					<div className="column center aligned">
			    	<button className="ui button disabled">Retreat</button>
					</div>
				</div>	
			
			</div>
    );
  }
}

