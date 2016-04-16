import React from 'react';
import {render} from 'react-dom';

import Stats from './stats/stats.jsx';

export class LeftPanel extends React.Component {
  render () {

  	var genderIconNode = <i className="fa fa-male" aria-hidden="true"></i>;
  	if (this.props.hero.getGender() == "female") {
  		genderIconNode = <i className="fa fa-female" aria-hidden="true"></i>;
  	}


    return (
			  <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3">

					<div className="panel panel-default">
					  <div className="panel-heading">
					    <h5><strong> {this.props.hero.getName()} {genderIconNode}</strong></h5>
					    <p className="panel-title">	HP: 100 | Level: 3 | XP: 2500/3000</p>
					  </div>
					  <div className="panel-body">
			  			<Stats hero={this.props.hero}/>
					  </div>
					</div>
			  	

			  </div>
    );
  }
}

