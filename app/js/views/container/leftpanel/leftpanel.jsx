import React from 'react'
import {render} from 'react-dom'
import {CharThumbnail} from 'js/views/char/charThumbnail.jsx'
import {CharCard} from 'js/views/char/charCard.jsx'

export class LeftPanel extends React.Component {
  render() {

  	let partyName = this.props.party.getName()
  	let characters = this.props.party.getMembers()
  	
  	let charThumbs = []

		for (let c in characters) {
			let char = characters[c]
 	 		charThumbs.push( <CharThumbnail key={c} char={char} />)
		}


    return (
				<div id="left-panel" className="uk-panel uk-panel-box">
					Character thumbs go here
				</div>
    )
  }
}

		  // <div className="ui segments">
		  // 				<div className="ui secondary segment header">
		  // 				  <h5>
		  // 						{partyName}  <span>	<i className="fa fa-cog" aria-hidden="true"></i></span>
		  //          	</h5>
		  // 				</div>
		  //
		  // 				<div className="ui segment">
		  // 			  	<div className="ui cards player">
		  // 			  		{charThumbs}
		  // 			  	</div>
		  // 				</div>
		  // </div>