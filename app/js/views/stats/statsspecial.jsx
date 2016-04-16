import React from 'react';
import {render} from 'react-dom';

class StatsCombat extends React.Component {
  render () {
    return (
			<table className="table table-condensed">
				<thead>
					<tr>
						<th colSpan="2">SPECIAL</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Strength</td>
						<td><span className="badge center-block">{this.props.special.getStats("S")}</span></td>
					</tr>
					<tr>
						<td>Perception</td>
						<td><span className="badge center-block">{this.props.special.getStats("P")}</span></td>
					</tr>
					<tr>
						<td>Endurance</td>
						<td><span className="badge center-block">{this.props.special.getStats("E")}</span></td>
					</tr>
					<tr>
						<td>Charisma</td>
						<td><span className="badge center-block">{this.props.special.getStats("C")}</span></td>
					</tr>
					<tr>
						<td>Intelligence</td>
						<td><span className="badge center-block">{this.props.special.getStats("I")}</span></td>
					</tr>
					<tr>
						<td>Agility</td>
						<td><span className="badge center-block">{this.props.special.getStats("A")}</span></td>
					</tr>
					<tr>
						<td>Luck</td>
						<td><span className="badge center-block">{this.props.special.getStats("L")}</span></td>
					</tr>
				</tbody>
			</table>

    );
  }
}

export default StatsCombat;