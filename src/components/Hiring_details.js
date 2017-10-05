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
          <h3>{props.location.state.jobs.title}</h3>
          <p>{task}</p>
          <p>{props.location.state.jobs.data.the_task}</p>
          <p>{desc}</p>
          <p>{props.location.state.jobs.data.description}</p>
          <p>{contact}</p>
          <p>{props.location.state.jobs.data.contact}</p>
        </div>
      </BodyClassName>
    );

};

export default HiringDetails;
