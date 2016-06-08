import React from 'react';
import {render} from 'react-dom';
import {appSettings} from 'settings.js';

export class CharLabel extends React.Component {

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
			<div>
				<a className="ui image label">
				  <img className="ui image" src={imgFullPath} alt={person.getName()} />
				  {person.getName()} 
				  <div className="detail"><i className="star icon"></i>{level}</div>
				</a>
			</div>
    );
  }
}