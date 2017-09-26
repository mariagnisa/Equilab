import React, { Component } from 'react';
import Slogan from './Slogan';

import '../style/FAQ.css';

class FAQ extends Component {
  render() {
    return (
        <div className="container d-flex">
          <div className="col-6">
            <Slogan />
          </div>

          <div className="col-6">
            <p>FAQ</p>
          </div>
        </div>
    );
  }
}

export default FAQ;
