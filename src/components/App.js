import React, { Component } from 'react';
import Routes from './Routes';

import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <p>Nu lär vi oss React! </p>
        <Routes />
      </div>
    );
  }
}

export default App;
