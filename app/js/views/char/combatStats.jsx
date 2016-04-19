import React from 'react';
import {render} from 'react-dom';

export class CombatStats extends React.Component {

  render () {

  	var char = this.props.char;
  	var cmbt = char.getCombatAbility();
  	var dmg = cmbt.getDamageRange();
  	var critChance = cmbt.getCritChance();
  	var critHit = cmbt.getCritMultipier();
  	var dodgeChance = cmbt.getDodgeChance();
  	var DT = cmbt.getDT();

    return (
	  	<table className="ui very compact small table combat-stats" id={this.props.nodeId}>
			  <thead>
			    <tr>
			      <th colSpan="5">Combat Stats</th>
			    </tr>
			  </thead>
	  		<tbody>
		  		<tr>
		  			<td>Damage</td>
		  			<td><div className="ui small label">{dmg.min} - {dmg.max}</div></td>

		  			<td> </td>

		  			<td>Dodge %</td>
		  			<td><div className="ui small label">{dodgeChance}%</div></td>
		  		</tr>

		  		<tr>
		  			<td>Crit %</td>
		  			<td><div className="ui small label">{critChance}%</div></td>

		  			<td> </td>

		  			<td>DT</td>
		  			<td><div className="ui small label">{DT}</div></td>
		  		</tr>

		  		<tr>
		  			<td>Crit Hit</td>
		  			<td><div className="ui small label">x{critHit}</div></td>

		  			<td> </td>

		  			<td></td>
		  			<td></td>
		  		</tr>

	  		</tbody>
	  	</table>
    );
  }
}

