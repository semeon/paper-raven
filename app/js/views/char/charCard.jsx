import React from 'react';
import {render} from 'react-dom';

import {appSettings} from './../../../settings.js';

import {CombatStats} from './combatStats.jsx';

export class CharCard extends React.Component {

  render () {

  	var char = this.props.char;
  	var person = char.getPerson();

  	var health = char.getHealth();
  	var exp = char.getExp();
  	var hp = health.getHP() + "/" + health.getMaxHP();
  	var level = exp.getLevel();
  	var xp = exp.getXP() + "/" + exp.getNextLevelXP();

    var img = person.getImageFileName();
    var imgFullPath = appSettings.charImagePath + person.getImageFileName();


  	var genderIconClass = "fa fa-male";
  	if (person.getGender() == "female") {
  		genderIconClass = "fa fa-female";
  	}


  	var combatStatsNodeId = char.getID() + "-combat-stats-node";
  	var href = "#" + combatStatsNodeId;

    return (
      <div className="card char">
        <div className="image">
        	<div className="ui overflow bottom right label"><i className="fa fa-heartbeat" aria-hidden="true"></i> {hp}</div>
        	<img src={imgFullPath} alt={person.getName()} />
        </div>

        <div className="content">
          <div className="header">
    		  	<h3> <i className={genderIconClass} aria-hidden="true"></i> {person.getName()}</h3>
          </div>
          <div className="meta">
            <a className="ui small label">Lvl: {level}</a> <a className="ui small label">XP: {xp}</a>
          </div>
        </div>

      	<CombatStats char={char} nodeId={combatStatsNodeId}/>

        <div className="extra content">
          <span className="right floated">
          	<i className="fa fa-cog" aria-hidden="true"></i> Settings
          </span>
          <span>
            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Warning!
          </span>
        </div>
      </div>
    );
  }
}
