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
						<td>S</td>
						<td><span className="badge center-block">{this.props.special.getStats("S")}</span></td>
					</tr>
					<tr>
						<td>P</td>
						<td><span className="badge center-block">{this.props.special.getStats("P")}</span></td>
					</tr>
					<tr>
						<td>E</td>
						<td><span className="badge center-block">{this.props.special.getStats("E")}</span></td>
					</tr>
					<tr>
						<td>C</td>
						<td><span className="badge center-block">{this.props.special.getStats("C")}</span></td>
					</tr>
					<tr>
						<td>I</td>
						<td><span className="badge center-block">{this.props.special.getStats("I")}</span></td>
					</tr>
					<tr>
						<td>A</td>
						<td><span className="badge center-block">{this.props.special.getStats("A")}</span></td>
					</tr>
					<tr>
						<td>L</td>
						<td><span className="badge center-block">{this.props.special.getStats("L")}</span></td>
					</tr>
				</tbody>
			</table>

    );
  }
}

export default StatsCombat;