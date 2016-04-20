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

			<div className="ui segments combat-stats">
			  <div className="ui segment secondary header">
			    <h5>Combat Stats</h5>
			  </div>
			  <div className="ui  segment">
					<div className="ui column grid">
						<div className="row">
						  <div className="four wide column">Damage</div>
						  <div className="three wide column">
								<div className="ui wide label">{dmg.min} - {dmg.max}</div>
						  </div>

						  <div className="one wide column"></div>

						  <div className="four wide column">Dodge %</div>
						  <div className="three wide column">
						  	<div className="ui wide label">{dodgeChance}%</div>
						  </div>
						</div>

						<div className="row">
						  <div className="four wide column">Crit %</div>
						  <div className="three wide column">
								<div className="ui wide label">{critChance}%</div>
						  </div>

						  <div className="one wide column"></div>

						  <div className="four wide column">DT</div>
						  <div className="three wide column">
						  	<div className="ui wide label">{DT}%</div>
						  </div>
						</div>

						<div className="row">
						  <div className="four wide column">Crit Hit</div>
						  <div className="three wide column">
								<div className="ui wide label">x{critHit}</div>
						  </div>

						  <div className="one wide column"></div>


						</div>

					</div>
			  </div>
			</div>    	
    );
  }
}

					  // <div className="column">Damage <div className="ui float right  label">{dmg.min} - {dmg.max}</div></div>
					  // <div className="column">Crit % <div className="ui float right  label">{critChance}%</div></div>
					  // <div className="column">Crit Hit <div className="ui float right  label">x{critHit}</div></div>
					  // <div className="column">Dodge %<div className="ui float right  label">{dodgeChance}%</div></div>
					  // <div className="column">DT <div className="ui float right label">{DT}</div></div>

	  	// <table className="ui very compact small table combat-stats" id={this.props.nodeId}>
			 //  <thead>
			 //    <tr>
			 //      <th colSpan="5">Combat Stats</th>
			 //    </tr>
			 //  </thead>
	  	// 	<tbody>
		  // 		<tr>
		  // 			<td>Damage</td>
		  // 			<td><div className="ui small label">{dmg.min} - {dmg.max}</div></td>

		  // 			<td> </td>

		  // 			<td>Dodge %</td>
		  // 			<td><div className="ui small label">{dodgeChance}%</div></td>
		  // 		</tr>

		  // 		<tr>
		  // 			<td>Crit %</td>
		  // 			<td><div className="ui small label">{critChance}%</div></td>

		  // 			<td> </td>

		  // 			<td>DT</td>
		  // 			<td><div className="ui small label">{DT}</div></td>
		  // 		</tr>

		  // 		<tr>
		  // 			<td>Crit Hit</td>
		  // 			<td><div className="ui small label">x{critHit}</div></td>

		  // 			<td> </td>

		  // 			<td></td>
		  // 			<td></td>
		  // 		</tr>

	  	// 	</tbody>
	  	// </table>
