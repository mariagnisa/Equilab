import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

//import json data
import HiringData from '../data/hiring.json';

//import components
import Slogan from './Slogan';
import HiringList from './Hiring_list';

//import HiringDetails from './Hiring_details';

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
  //check if we want this
  // renderJobs() {
  //   return HiringData.objects.map((job) => {
  //     return (
  //       //remove whitespaces in the url
  //       <Link to={{
  //         pathname: `/hiring/${job.title.replace(/\s+/g, '')}`,
  //         state: { job }
  //       }} key={job._id}>
  //         <li className="">
  //           {job.title}
  //         </li>
  //     </Link>
  //     );
  //   });
  // }

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
            <HiringList jobs={this.state.jobs} />
          </div>
        </div>
      </div>
    );
  }
}
//{this.renderJobs()}

export default Hiring;
