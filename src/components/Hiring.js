import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import json data
import HiringData from '../data/hiring.json';

//import components
import Slogan from './Slogan';
import HiringDetails from './Hiring_details';

//import stylesheet
import '../style/Hiring.css';

class Hiring extends Component {

  renderJobs() {
    return HiringData.objects.map((job) => {
      //remove whitespaces
      job.title = job.title.replace(/\s+/g, '');
      return (
        <Link to={`/hiring/${job.title}`} key={job._id}>
          <li className="">
            {job.title}
          </li>
      </Link>
      );
    });
  }

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
            <ul className="">
              {this.renderJobs()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Hiring;
