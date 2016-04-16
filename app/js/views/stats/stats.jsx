import React from 'react';
import {render} from 'react-dom';
import StatsSpecial from './statsspecial.jsx';
import StatsCombat from './statscombat.jsx';

class Stats extends React.Component {
  render () {

    return (
    	<div>

				<div className="row">
				  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 stats-group">
				  	<StatsSpecial hero={this.props.hero.getSpecial().getStats()}/>
					</div>

				  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 stats-group">
				  	<StatsCombat hero={this.props.hero.getSpecial().getStats()}/>
					</div>
				</div>

    	</div>
    );
  }
}

export default Stats;