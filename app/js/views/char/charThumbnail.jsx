import React from 'react';
import {render} from 'react-dom';


import {appSettings} from 'settings.js';
export class CharThumbnail extends React.Component {

  render () {

  	var char = this.props.char;
  	var person = char.getPerson();

  	var health = char.getHealth();
  	var exp = char.getExp();
  	var hp = health.getHP() + "/" + health.getMaxHP();
  	var level = exp.getLevel();
  	var xp = exp.getXP() + "/" + exp.getNextLevelXP();

    var img = person.getImageFileName();
    var imgFullPath = appSettings.character.imagePath + person.getImageFileName();


  	var genderIconClass = "fa fa-male";
  	if (person.getGender() == "female") {
  		genderIconClass = "fa fa-female";
  	}


  	var combatStatsNodeId = char.getID() + "-combat-stats-node";
  	var href = "#" + combatStatsNodeId;

    return (

      <div className="ui fluid card char thumb">
        <div className="image">
        	<div className="ui overflow bottom left teal label">
						{person.getName()} 
					</div>
        	<div className="ui overflow bottom right teal label">
						<i className="fa fa-heartbeat" aria-hidden="true"></i> {hp}
					</div>

        	<img src={imgFullPath} alt={person.getName()} />
        </div>
      </div>


    );
  }
}