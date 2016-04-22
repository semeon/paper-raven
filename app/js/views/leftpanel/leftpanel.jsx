import React from 'react';
import {render} from 'react-dom';

import {CharCard} from 'js/views/char/charCard.jsx';

export class LeftPanel extends React.Component {
  render() {

  	var partyName = this.props.party.getName();
  	var characters = this.props.party.getMembers();
  	var charCards = [];
		for (var c in characters) {
			var char = characters[c];
	  	charCards.push(<CharCard char={char} />);
		}


    return (
		  <div className="ui segments">
				<div className="ui secondary segment header">
				  <h5>{partyName}  <span className="right floated">
          	<i className="fa fa-cog" aria-hidden="true"></i>
          </span>
         	</h5>
				</div>		  

				<div className="ui segment">
			  	<div className="ui cards">
			  		{charCards}
			  	</div>
				</div>		  

		  </div>
    );
  }
}

