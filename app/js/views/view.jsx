import React from 'react';
import {render} from 'react-dom';

class View extends React.Component {
  render () {
    return <p> Hello React!!!!</p>;
  }
}

render(<View/>, document.getElementById('app'));