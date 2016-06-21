import React from 'react';
import {render} from 'react-dom';

import {appSettings} from 'settings.js';

import {CharThumbnail} from 'js/views/char/charThumbnail.jsx';
import {CharCard} from 'js/views/char/charCard.jsx';

import {ActivityFeed} from 'js/views/feed/feed.jsx';

export class InCombatView extends React.Component {
  render() {

		var combat = this.props.combat;
		var actor = combat.getActor();

		var turn = combat.turn;
		var turnState = turn.getState();
		var target = turn.target;
		
		// console.log("== view: turn.state: " + turn.state);

		var targetCard;
		if ( !target ) {
	    var defImgFullPath = appSettings.character.imagePath + appSettings.character.defImage;
			targetCard = (
				<div className="ui card">
				  <div className="image">
				    <img src={defImgFullPath} />
				  </div>
				  <div className="content fixed-height-7em">
				    <div className="description">
				      Please pick a target for the attack.
				    </div>
				  </div>
				</div>
			);
			
		} else {
			targetCard = (
					<CharCard char={turn.target.char} defense="true" />
			);
		}

		var actorCard = (
			<div className="eight wide column">
				<CharCard char={actor.char}  attack="true"/>
			</div>			
		);
	
		var targetCard = (
			<div className="eight wide column right floated">
				{targetCard}
			</div>			
		);	
		
		function onAttackClick() {
			console.log("== view: onAttackClick()");
			turn.performActon();
		}


		var attackButtonClass = "ui blue huge button fluid";
		if (turn.getState() === "TURN-PERFORM-ACTION") {
			attackButtonClass += " disabled";
		}


		var combatLogRow = (
				<div key="attackLog" className="row">
					<div className="twelve wide column top aligned">
						<div className="ui segment" id="attackLog">
							<ActivityFeed data={turn.attackLog}/>
						</div>
					</div>

					<div className="four wide column top aligned">
						<button className={attackButtonClass} onClick={onAttackClick}>Attack</button>
					</div>
			
				</div>
		);		
	
    return (
			<div className="ui grid">
				<div className="row">
					{actorCard}
					{targetCard}
				</div>
				{combatLogRow}
					
			</div>	
    );
  }
}

