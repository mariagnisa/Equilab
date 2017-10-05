import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';

import Slogan from './Slogan';

import '../style/Faq.css';

class FAQ extends Component {
  render() {
    return (
      <BodyClassName className="body-faq">

        <div className="container d-flex">
          <div className="col-6">
            <Slogan />
          </div>

          <div className="col-6">
            <p>FAQ</p>
          </div>
        </div>

      </BodyClassName>
      );
    }
}

export default FAQ;
