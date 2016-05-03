import React from 'react';
import {render} from 'react-dom';

import {CharCard} from 'js/views/char/charCard.jsx';

export class CombatView extends React.Component {
  render() {
    return (
			<div className="ui attached segment">
				<div className="ui grid">
				  <div className="three column row">
				    <div className="left floated column">
				    	<CharCard char={this.props.hero} />
				    </div>
				    <div className="column center aligned">CENTRE</div>
				    <div className="right floated column right aligned">
				    	<CharCard char={this.props.hero} />
				    </div>
				  </div>
				</div>
			</div>
    );
  }
}

