import React from 'react';
import {render} from 'react-dom';

import {appSettings} from 'settings.js';

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
    var imgFullPath = appSettings.character.imagePath + person.getImageFileName();

  	var genderIconClass = "fa fa-male";
  	if (person.getGender() == "female") {
  		genderIconClass = "fa fa-female";
  	}


  	var cmbt = char.getCombatAbility();
  	var dmg = cmbt.getDamageRange();
  	var critChance = cmbt.getCritChance();
  	var critHit = cmbt.getCritMultipier();
  	var dodgeChance = cmbt.getDodgeChance();
  	var DT = cmbt.getDT();


		var stats = [];
		
		var levelInfo = (
      <div className="content center aligned" key="lvl">
        <div className="description">
					<a className="ui tiny label">
					  <i className="star icon"></i><div className="detail">{level}</div>
					</a>

					<a className="ui tiny label">
					  XP:<div className="detail">{xp}</div>
					</a>

        </div>
      </div>			
		);

		var dmgStats = (
			<div className="extra content" key="dmg">
					<div className="ui stackable grid">
				    <div className="ten wide column">Damage:</div>
				    <div className="six wide column right aligned">{dmg.min}-{dmg.max}</div>
					</div>
			</div>
		);

		var critChanceStats = (
			<div className="extra content" key="critChance">
					<div className="ui stackable grid">
				    <div className="ten wide column">Crit. hit %:</div>
				    <div className="six wide column right aligned">{critChance}%</div>
					</div>
			</div>
		);

		var critDmgStats = (
			<div className="extra content" key="critDmg">
					<div className="ui stackable grid">
				    <div className="ten wide column">Crit. dmg:</div>
				    <div className="six wide column right aligned">x{critHit}</div>
					</div>
			</div>
		);

		var dodgeStats = (
			<div className="extra content" key="dodge">
					<div className="ui stackable grid">
				    <div className="ten wide column">Dodge %:</div>
				    <div className="six wide column right aligned">{dodgeChance}%</div>
					</div>
			</div>
		);

		var dtStats = (
			<div className="extra content"  key="dt">
					<div className="ui stackable grid">
				    <div className="ten wide column">Armour DT:</div>
				    <div className="six wide column right aligned">{DT}</div>
					</div>
			</div>
		);

		if (this.props.level) {
			stats.push(levelInfo);
		}

		if (this.props.attack) {
			stats.push(dmgStats);
			stats.push(critChanceStats);
			stats.push(critDmgStats);
		}

		if (this.props.defense) {
			stats.push(dodgeStats);
			stats.push(dtStats);
		}



    return (
      <div className="ui card char">
        <div className="image">
			  	<div className="ui overflow bottom left label">
						{person.getName()} 
					</div>
			  	<div className="ui overflow bottom right label">
						<i className="fa fa-heartbeat" aria-hidden="true"></i> {hp}
					</div>
        	<img src={imgFullPath} alt={person.getName()} />
        </div>



				{stats}



      </div>
    );
  }
}
				// <i className={genderIconClass} aria-hidden="true"></i>
      	// <CombatStats char={char} nodeId={combatStatsNodeId}/>
        // <a className="ui small label">Lvl: {level}</a> <a className="ui small label">XP: {xp}</a>
