import React from 'react';
import {render} from 'react-dom';

class Container extends React.Component {
  render () {
    return <p> Hello Stats!</p>;
  }
}

render(<Container/>, document.getElementById('stats'));