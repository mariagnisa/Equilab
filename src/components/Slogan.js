import React, { Component } from 'react';

import '../style/Slogan.css';

class Slogan extends Component {
  render() {
    return (
      <div className="slogan container">
        <h1><strong>EQUILAB</strong></h1>
        <h2>MORE <em>RIDING</em></h2>
        <h2>LESS WORRY</h2>
      </div>
    );
  }
}

export default Slogan;
