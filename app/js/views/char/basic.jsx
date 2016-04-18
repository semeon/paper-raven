import React from 'react';
import {render} from 'react-dom';

export class BasicInfo extends React.Component {

  render () {

  	var hero = this.props.char;
  	var person = hero.getPerson();
  	var health = hero.getHealth();
  	var exp = hero.getExp();

  	var genderIconClass = "fa fa-male";
  	if (person.getGender() == "female") {
  		genderIconClass = "fa fa-female";
  	}

  	var hp = health.getHP() + "/" + health.getMaxHP();
  	var level = exp.getLevel();
  	var xp = exp.getXP() + "/" + exp.getNextLevelXP();

    return (
					<div className="row container-fluid hero-basic">
					  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 no-padding">
					  	<img src="res/graham.png" alt={person.getName()} className="img-rounded" width="100%" height="100%"/>
					  </div>
					  <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
					  	<table className="table table-condensed small table-borderless">
					  		<tbody>
						  		<tr>
						  			<th>HP</th><td>{hp}</td>
						  		</tr>
						  		<tr>
						  			<th>Lvl</th><td>{level}</td>
						  		</tr>
						  		<tr>
						  			<th>XP</th><td>{xp}</td>
						  		</tr>
					  		</tbody>
					  	</table>
					  </div>
					</div>
    );
  }
}

