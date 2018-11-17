import React, { Component } from 'react';
import { render } from 'react-dom';
import { GraphBar } from './bar/component/bar';
import { } from './bar/store/store_skill';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <GraphBar>
      </GraphBar>
    );
  }
}

render(<App />, document.getElementById('root'));
