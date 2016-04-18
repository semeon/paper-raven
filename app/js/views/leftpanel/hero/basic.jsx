import React from 'react';
import {render} from 'react-dom';

export class BasicInfo extends React.Component {

  render () {

  	var hero = this.props.hero;
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
					<div className="row container-fluid" id="hero-basic">
					  <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
					  	<img src="res/hero.png" alt={person.getName()} className="img-circle" width="100%" height="100%"/>
					  </div>
					  <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
					  	<table className="table table-condensed">
					  		<tbody>
						  		<tr>
						  			<th>HP</th><td>{hp}</td>
						  		</tr>
						  		<tr>
						  			<th>Level</th><td>{level}</td>
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

