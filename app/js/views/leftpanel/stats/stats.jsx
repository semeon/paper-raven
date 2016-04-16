import React from 'react';
import {render} from 'react-dom';
import StatsSpecial from './statsspecial.jsx';
import StatsCombat from './statscombat.jsx';



class Stats extends React.Component {
  render () {



    return (
    	<div  id="statsBody" className="panel-body collapse in clearfix">

				<div className="row">
				  <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 stats-group">
				  	<StatsSpecial special={this.props.hero.getSpecial()}/>
					</div>

				  <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 stats-group">
				  	<StatsCombat derived={this.props.hero.getDerived()}/>
					</div>
				</div>

    	</div>
    );
  }
}

export default Stats;