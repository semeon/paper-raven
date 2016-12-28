const path = require('path')

import React from 'react'
import {render} from 'react-dom'

import {LeftPanel} 		from 	'./leftpanel/leftpanel.jsx'
import {CentralPanel} from 	'./centralpanel/centralpanel.jsx'
import {RightPanel}   from 	'./rightpanel/rightpanel.jsx'

export class Container extends React.Component {

  constructor(props) {
    super(props);
  }

	componentDidUpdate() {
	}

  render() {

		console.log("sdfsdfsd")

		let hero 			= this.props.ge.getHero()
		let party 		= this.props.ge.getParty()
		let location 	= this.props.ge.getLocation()

    return (
			<div className="uk-flex" id="container">
				<LeftPanel party={party} location={location} />
			
				<CentralPanel ge={this.props.ge} hero={hero} location={location} />
			
			
			</div>
    )
  }
}

				// <div id="central-panel" className="uk-panel uk-panel-box">
				// 	<h3 className="uk-panel-title">Map</h3>
				// </div>



				// <div id="left-panel" className="uk-panel uk-panel-box">
				// 	<h3 className="uk-panel-title">Squad</h3>
				// 	Content
				// </div>



				// <div className="three wide column">
				// 	<LeftPanel party={party} location={location} />
				// </div>
				//
				// <div className="nine wide column">
				// 	<CentralPanel ge={this.props.ge} hero={hero} location={location} />
				// </div>
				//
				// <div className="four wide column">
				// 	<RightPanel />
				// </div>



			// <div className="ui segment" id="container">
			//   <div className="ui left rail very close" id="left-panel">
			// 		<LeftPanel party={party} location={location} />
			//   </div>
			//
			//   <div className="ui right rail  very close" id="right-panel">
			// 		<RightPanel	feed={this.props.ge.getLogger().getFeed()}/>
			//   </div>
			//
			// 	<CentralPanel ge={this.props.ge} hero={hero} location={location} />
			//
			//
			// </div>

		  	// <InhabitantsView location={location} />

