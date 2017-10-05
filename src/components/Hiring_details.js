import React from 'react';
import BodyClassName from 'react-body-classname';

//import stylesheet
import '../style/Hiring.css';

const HiringDetails = (props) => {

  let task = "The task at hand";
  let desc = "Does some of these things describe you?";
  let contact = "Still reading?";

  return (
    <BodyClassName className="hiring-background">
      <div>
        <div className="container d-flex">
          <div className="hiring">
            <p>{props.location.state.jobs.title}</p>
            <p>{task}</p>
            <p>{props.location.state.jobs.data.the_task}</p>
            <p>{desc}</p>
            <p>{props.location.state.jobs.data.description}</p>
            <p>{contact}</p>
            <p>{props.location.state.jobs.data.contact}</p>
          </div>
        </div>
      </BodyClassName>
    );

  };

  export default HiringDetails;
