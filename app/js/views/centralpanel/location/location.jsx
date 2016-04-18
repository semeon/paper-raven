import React from 'react';
import {render} from 'react-dom';

import {HeroPanel} from './../../leftpanel/hero/hero.jsx';


export class LocationPanel extends React.Component {
  render() {

  	var locationName = this.props.location.getName();

    return (
			<div className="panel panel-default">
			  <div className="panel-heading">
			  	<h5><i className="fa fa-map-signs" aria-hidden="true"></i> {locationName}</h5>
			  </div>
			  <div className="panel-body" id="pbody">
			  	BODY
			  </div>
			  <div className="panel-heading sub-heading text-lowercase" >
			  	PEOPLE
			  </div>
			  <div className="panel-body" id="pbody">
			  	<HeroPanel hero={this.props.hero} />
			  	<HeroPanel hero={this.props.hero} />
			  </div>
			  <div className="panel-footer">
			  	Panel footer
			  </div>
			</div>
    );
  }
}

