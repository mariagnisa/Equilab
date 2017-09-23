import React, { Component } from 'react';
import Slogan from './Slogan';
import HiringDetails from './Hiring_details';
import '../style/Hiring.css';

class Hiring extends Component {
  render() {
    let headline = "We're growing! And we want to meet awesome new people.";
    let para = "If you don't feel like reading, just come by for a coffee instead, we are located at Holtermansgatan 1c, Gothenburg.";
    let pos = "Available Positions:";

    return (
      <div className="container d-flex">
        <div className="col-8">
          <Slogan />
        </div>

        <div className="">
          <div className="flex-row">
            <h4>{ headline }</h4>
            <p>{ para }</p>
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
