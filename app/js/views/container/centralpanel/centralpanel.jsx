const path = require('path')


import React from 'react'
import {render} from 'react-dom'

import {app}       from 'js/app.js'

import {CombatView} from 'js/views/combat/combat.jsx'
import {LocationPanel} 		from 'js/views/location/location.jsx'
import {InhabitantsView} 	from 'js/views/location/inhabitants/inhabitants.jsx'

export class CentralPanel extends React.Component {
  constructor(props) {
    super(props)
  }

	componentDidMount(prevProps, prevState){
		console.log(">> componentDidMount")
		app.crafty.init()
		app.crafty.start()
	}

  render() {
		
		
		// let mainView = <CombatView ge={this.props.ge} combat={this.props.ge.getActivity()} hero={this.props.ge.getHero()} party={this.props.ge.getParty()}/>

    return (
			<div id="central-panel" className="uk-panel uk-panel-box">
				<h3 className="uk-panel-title">Mapzz</h3>
				<div id="game"/>
			</div>
    )
  }
}



// <div className="ui segments">
//
// 	<div className="ui secondary segment header">
// 	  <h5><i className="fa fa-map-signs" aria-hidden="true"></i> Location: Hope</h5>
// 	</div>
//
// 	{mainView}
//
// </div>