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
 	 		charCards.push(<CharCard key={c} char={char} />);
		}

		// var cahrCards = characters.map(function(char) {
		// 				return <CharCard key={char.id} char={char} />
		// 			});




		// TODO
		// http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
    // {this.props.results.map(function(result) {
    //    return <ListItemWrapper key={result.id} data={result}/>;



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

