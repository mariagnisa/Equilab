import React, { Component } from 'react';
import HiringData from '../data/hiring.json';
import '../style/Hiring.css';

class Hiring extends Component {
  render() {

    let pos = "Available Positions:";

    return (
      <div className="container">
        <div>
          <h4>{HiringData.title}</h4>
          <p>{HiringData.content}</p>
        </div>

        <div>
          <h4>{pos}</h4>
          <p>{}</p>
        </div>
      </div>
    );
  }
}

export default Hiring;
