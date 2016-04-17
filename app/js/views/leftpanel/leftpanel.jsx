import React from 'react';
import {render} from 'react-dom';

import Stats from './stats/stats.jsx';
import './../../../sass/leftpanel.scss';

export class LeftPanel extends React.Component {
  render () {

  	var genderIconClass = "fa fa-male";
  	if (this.props.hero.getPerson().getGender() == "female") {
  		genderIconClass = "fa fa-female";
  	}

  	var health = this.props.hero.getHealth().getHP() + "/" + this.props.hero.getHealth().getMaxHP();
  	var level = this.props.hero.getExp().getLevel();
  	var exp = this.props.hero.getExp().getXP();

    return (
			  <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2" id="left-panel">

					<div className="panel panel-default">
					  <div className="panel-heading">
					    <h5><strong> {this.props.hero.getPerson().getName()} <i className={genderIconClass} aria-hidden="true"></i></strong></h5>
					  	<div className="row">
					  		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					    		<h6 className="pull-left">HP: {health} | LVL: {level} | XP: 2500/3000</h6>
						    	<button 
						    			type="button" 
						    			className="btn btn-default btn-xs pull-right" 
						    			data-toggle="collapse"
						    			data-target="#statsBody"
						    			aria-expanded="false"
						    			aria-controls="statsBody"
						    			autocomplete="off">
									  Stats
									</button>
					  		</div>
					  	</div>

					  </div>
					  <div className="panel-body" >
			  			<Stats hero={this.props.hero}/>
					  </div>
					</div>

					<div className="panel panel-default">
					  <div className="panel-heading">
					    <h5><strong>Log</strong></h5>
					  	<div className="row">
					  		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

					  		</div>
					  	</div>					    
					  </div>
					  <div className="panel-body">
			  			
					  </div>
					</div>

			  </div>
    );
  }
}

