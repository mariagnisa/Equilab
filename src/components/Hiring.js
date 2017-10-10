import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';

//import json data
import HiringData from '../data/hiring.json';

//import components
// import Slogan from './Slogan';
import HiringList from './Hiring_list';

//import stylesheet
import '../style/Hiring.css';

class Hiring extends Component {
  constructor(props) {
    super(props);

    const data = HiringData.objects.map((jobs) => {
      return jobs;
    });
    //Set state to json data
    this.state = { jobs: data };

  }

  render() {
    let title = "We're growing!";
    let title2 = "And we want to meet awesome new people.";
    let pos = "Available Positions:";

    return (
      <BodyClassName className="hiring-background">
        <div className="container d-flex">
          <div className="hiring">
            <div className="flex-row">
              <div className="hiring-text">
                <p className="headline">HIRING</p>
                <p className="bold">
                  {title}
                  <br/>
                  {title2}
                </p>
              </div>
              <p className="reg">{HiringData.content}</p>

            </div>

            <div className="flex-column">
              <div className="margin-top">
                <p className="bold">{pos}</p>
                <HiringList jobs={this.state.jobs} />
              </div>
            </div>
          </div>
        </div>
      </BodyClassName>
    );
  }
}

export default Hiring;
