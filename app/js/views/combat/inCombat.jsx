import React from 'react';
import {render} from 'react-dom';

import {appSettings} from 'settings.js';

export class InCombatView extends React.Component {
  render() {

		var combat = this.props.combat;
		
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
		
		
    return (
			<div>

				<div className="ui icon red message">
				  <i className="warning circle icon"></i>
				  <div className="content">
				    <div className="header">
				      The combat is in progress
				    </div>
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

