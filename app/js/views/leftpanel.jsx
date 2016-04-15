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
			  <div className="col-lg-3 col-md-4">

					<div className="panel panel-default">
					  <div className="panel-heading">
					    <h3 className="panel-title"><strong> {this.props.hero.getName()} {genderIconNode} </strong></h3>
					  </div>
					  <div className="panel-body">
			  			<Stats hero={this.props.hero}/>
					  </div>
					</div>
			  	

			  </div>
    );
  }
}

