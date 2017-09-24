import React, { Component } from 'react';

import '../style/Slogan.css';

class Slogan extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-5"><strong>EQUILAB</strong></h1>
        <h2 className="display-5">MORE <span>RIDING</span></h2>
        <h2 className="display-5">LESS WORRY</h2>
      </div>
    );
  }
}

export default Slogan;
