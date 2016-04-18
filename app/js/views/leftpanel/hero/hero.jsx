import React from 'react';
import {render} from 'react-dom';
import {BasicInfo} from './basic.jsx';
import {CombatStats} from './combatStats.jsx';

export class HeroPanel extends React.Component {

  render () {

  	var hero = this.props.hero;
  	var person = hero.getPerson();

  	var genderIconClass = "fa fa-male";
  	if (person.getGender() == "female") {
  		genderIconClass = "fa fa-female";
  	}

    return (

			<div className="panel panel-default panel-hero">
			  <div className="panel-heading">
			  	<h5>{person.getName()} &nbsp; <i className={genderIconClass} aria-hidden="true"></i></h5>
			  </div>
			  <div className="panel-body">
			  	<BasicInfo hero={hero} />
			  </div>
			  <div className="panel-heading sub-heading text-lowercase" >
			  	Combat Stats [<a className="text-capitalize" 
							data-toggle="collapse" 
							href="#combat-stats" 
							aria-expanded="false" 
							aria-controls="combat-stats">
					  show/hide
					</a>]
			  </div>
			  <CombatStats hero={hero} />
			  <div className="panel-footer">
			  	Panel footer
			  </div>
			</div>

    );
  }
}

