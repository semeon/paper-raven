import React from 'react';
import {render} from 'react-dom';

class StatsSpecial extends React.Component {
  render () {

    return (
			<table className="table table-condensed">
				<thead>
					<tr>
						<th colSpan="2">Combat</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Type</td>
						<td><span className="badge center-block">Melee</span></td>
					</tr>
					<tr>
						<td>Damage</td>
						<td><span className="badge center-block">{this.props.combat.getDamageRange().min} - {this.props.combat.getDamageRange().max}</span></td>
					</tr>
					<tr>
						<td>Crit %</td>
						<td><span className="badge center-block">{this.props.combat.getCritChance()}%</span></td>
					</tr>
					<tr>
						<td>Crit Dam</td>
						<td><span className="badge center-block">x{this.props.combat.getCritMultipier()}</span></td>
					</tr>
					<tr>
						<td>Dodge %</td>
						<td><span className="badge center-block">10%</span></td>
					</tr>					
					<tr>
						<td>DT</td>
						<td><span className="badge center-block">7</span></td>
					</tr>					

				</tbody>

			</table>

    );
  }
}

export default StatsSpecial;