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
						<td><span className="badge center-block">8</span></td>
					</tr>
					<tr>
						<td>Perception</td>
						<td><span className="badge center-block">8</span></td>
					</tr>
					<tr>
						<td>Endurance</td>
						<td><span className="badge center-block">8</span></td>
					</tr>
					<tr>
						<td>Charisma</td>
						<td><span className="badge center-block">8</span></td>
					</tr>
					<tr>
						<td>Intelligence</td>
						<td><span className="badge center-block">8</span></td>
					</tr>
					<tr>
						<td>Agility</td>
						<td><span className="badge center-block">8</span></td>
					</tr>
					<tr>
						<td>Luck</td>
						<td><span className="badge center-block">8</span></td>
					</tr>
				</tbody>
			</table>

    );
  }
}

export default StatsCombat;