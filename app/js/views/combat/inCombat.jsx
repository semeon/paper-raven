import React from 'react';
import {render} from 'react-dom';

import {appSettings} from 'settings.js';

import {CharThumbnail} from 'js/views/char/charThumbnail.jsx';



export class InCombatView extends React.Component {
  render() {

		var combat = this.props.combat;
		var turn = combat.turn;
		var actor = combat.getActor();
		
		console.log("== view: turn.state: " + turn.state);
		
		var view = {};
		
		
		var actorCard = (
			<div className="six wide column center aligned">
				<h5>Actor</h5>
				<CharThumbnail char={actor.char} />
			</div>			
		);
	

		
		
		if ( turn.state == "action-pending" ) {
			var targetCard = (
				<div className="six wide right floated column center aligned">
					<h5>Target</h5>
					<CharThumbnail char={turn.target.char} />
				</div>
			);

			view = (
				<div className="ui grid">
					<div className="row">
						{actorCard}
						{targetCard}
					</div>
					<div className="row">
						<div className="sixteen wide column center aligned bottom aligned">
							<button className="ui blue button" onClick={onAttackClick}>Attack</button>				
						</div>
					</div>
				</div>				
			);
			
		} else {
			view = (
				<div className="ui icon red message">
				  <i className="warning circle icon"></i>
				  <div className="content">
				    <div className="header">
				      The combat is in progress
				    </div>
				  </div>
				</div>					
			);
		}
		
		function onAttackClick() {
			console.log("== view: onAttackClick()");
			turn.performActon();
		}
		
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
		

				{view}

			
			</div>
    );
  }
}

