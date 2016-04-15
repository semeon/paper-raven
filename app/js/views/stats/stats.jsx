import React from 'react';
import {render} from 'react-dom';

class Stats extends React.Component {
  render () {


  	var genderIconNode = <i className="fa fa-male" aria-hidden="true"></i>;
  	if (this.props.hero.getGender() == "female") {
  		genderIconNode = <i className="fa fa-female" aria-hidden="true"></i>;
  	}
    return (
    	<div>
				<div className="row">
				  <div className="col-md-6 col-lg-6">
						<table className="table table-condensed">
							<thead>
								<tr>
									<th colSpan="2">SPECIAL</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>S</td><td>8</td>
								</tr>
								<tr>
									<td>P</td><td>8</td>
								</tr>
								<tr>
									<td>E</td><td>8</td>
								</tr>
								<tr>
									<td>C</td><td>8</td>
								</tr>
								<tr>
									<td>I</td><td>8</td>
								</tr>
								<tr>
									<td>A</td>
									<td><span className="badge center-block">8</span></td>
								</tr>
								<tr>
									<td>L</td>
									<td><span className="badge">8</span></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

    	</div>
    );
  }
}

export default Stats;