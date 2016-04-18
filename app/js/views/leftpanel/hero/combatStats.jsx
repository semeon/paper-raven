import React from 'react';
import {render} from 'react-dom';

export class CombatStats extends React.Component {

  render () {

  	var hero = this.props.hero;
  	var cmbt = hero.getCombatAbility();
  	var dmg = cmbt.getDamageRange();
  	var critChance = cmbt.getCritChance();
  	var critHit = cmbt.getCritMultipier();
  	var dodgeChance = cmbt.getDodgeChance();
  	var DT = cmbt.getDT();

    return (
	  	<table className="table table-condensed small collapse in" id="combat-stats">
	  		<tbody>
		  		<tr>
		  			<td>Damage</td>
		  			<td><span className="badge center-block">{dmg.min} - {dmg.max}</span></td>

		  			<td> </td>

		  			<td>Dodge %</td>
		  			<td><span className="badge center-block">{dodgeChance}%</span></td>
		  		</tr>

		  		<tr>
		  			<td>Crit %</td>
		  			<td><span className="badge center-block">{critChance}%</span></td>

		  			<td> </td>

		  			<td>DT</td>
		  			<td><span className="badge center-block">{DT}</span></td>
		  		</tr>

		  		<tr>
		  			<td>Crit Hit</td>
		  			<td><span className="badge center-block">x{critHit}</span></td>

		  			<td> </td>

		  			<td></td>
		  			<td></td>
		  		</tr>

	  		</tbody>
	  	</table>
    );
  }
}

