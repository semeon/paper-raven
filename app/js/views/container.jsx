import React from 'react';
import {render} from 'react-dom';

import Stats from './stats/stats.jsx';

class Container extends React.Component {
  render () {
    return (
			<nav className="navbar navbar-default navbar-static-top">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" 
			      			className="navbar-toggle collapsed" 
			      			data-toggle="collapse" 
			      			data-target="#bs-example-navbar-collapse-1" 
			      			aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#">Paper Raven</a>
			    </div>

			    <div className="collapse navbar-collapse" 
			    			id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			        <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
			        <li><a href="#">Link</a></li>
			      </ul>
			    </div>

			  </div>
			</nav>
    );
  }
}

render(<Container/>, document.getElementById('container'));