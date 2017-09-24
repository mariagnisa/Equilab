import React, { Component } from 'react';
import HiringData from '../data/hiring.json';
import Slogan from './Slogan';
import HiringDetails from './Hiring_details';
import '../style/Hiring.css';

class Hiring extends Component {
  render() {

    let pos = "Available Positions:";

    return (
      <div className="container d-flex">
        <div className="col-8">
          <Slogan />
        </div>

        <div className="">
          <div className="flex-row">
            <h4>{HiringData.title}</h4>
            <p>{HiringData.content}</p>
          </div>

          <div className="flex-column">
            <h4>{pos}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Hiring;
