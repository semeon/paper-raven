import React from 'react';
import {render} from 'react-dom';

import {appSettings} from 'settings.js';

import {CharThumbnail} from 'js/views/char/charThumbnail.jsx';
import {CharCard} from 'js/views/char/charCard.jsx';



export class InCombatView extends React.Component {
  render() {

		var combat = this.props.combat;
		var actor = combat.getActor();

		var turn = combat.turn;
		var target = turn.getTarget();
		
		// console.log("== view: turn.state: " + turn.state);

		var targetThumb;
		var attackButtonClass = "ui blue button";
		if ( !target ) {
	    var defImgFullPath = appSettings.character.imagePath + appSettings.character.defImage;
			targetThumb = (
				<div className="ui card">
				  <div className="image">
				    <img src={defImgFullPath} />
				  </div>
				  <div className="content">
				    <div className="description">
				      Please pick a target for the attack.
				    </div>
				  </div>
				</div>
			);
			attackButtonClass = attackButtonClass + " disabled";
			
		} else {
			targetThumb = (
					<CharCard char={turn.target.char} defense="true" />
			);
		}

		var actorCard = (
			<div className="seven wide column">
				<CharCard char={actor.char}  attack="true"/>
			</div>			
		);
	
		var targetCard = (
			<div className="seven wide column right floated">
				{targetThumb}
			</div>			
		);	
		
		function onAttackClick() {
			console.log("== view: onAttackClick()");
			turn.performActon();
		}
		
	
    return (
			<div className="ui grid">
				<div className="row">
					{actorCard}

					{targetCard}
				</div>

				<div className="row">
					<div className="sixteen wide column center aligned bottom aligned">
						<button className={attackButtonClass} onClick={onAttackClick}>Attack</button>
						<button className="ui button" onClick={onAttackClick}>Skip</button>
					</div>
				</div>
			</div>	
    );
  }
}

