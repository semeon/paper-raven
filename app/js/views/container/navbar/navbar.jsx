import React from 'react';
import {render} from 'react-dom';

export class Navbar extends React.Component {
  render () {

		// let toggleModal = function() {
		// 	$('#combat-view').modal('show')
		// }

    return (
			<nav className="uk-navbar">
			    <ul className="uk-navbar-nav">
			        <li className="uk-active">
								<a href="">Home</a>
							</li>
			        <li>
									<a href="">More</a>
							</li>
			        <li className="uk-parent">
								<a href="">Help</a>
							</li>
			    </ul>
			</nav>
    )
  }
}

