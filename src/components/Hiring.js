import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';
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
    let title = "We're growing!";
    let title2 = "And we want to meet awesome new people.";
    let pos = "Available Positions:";

    return (
      <BodyClassName className="hiring-background">
        <div className="container d-flex">
            <div className="hiring">
              <div className="flex-row">
                <div className="text">
                  <div className="bold">
                    {title}
                    <br/>
                    {title2}
                  </div>
                  <p className="reg">{HiringData.content}</p>
                </div>
              </div>

              <div className="flex-column">
                <div className="margin_top">
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
//{this.renderJobs()}

export default Hiring;
