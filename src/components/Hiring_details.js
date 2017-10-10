import React from 'react';
import BodyClassName from 'react-body-classname';

//import stylesheet
import '../style/Hiring.css';

const HiringDetails = (props) => {

  let task = "The task at hand";
  let desc = "Does some of these things describe you?";
  let contact = "Still reading?";
  let contact_info = "Contact us at ";
  let email = "team@equilab.horse";
  let contact_info2 = " and let us talk it over! We are based in Gothenburg.";

  return (
    <BodyClassName className="hiring-background">
        <div className="container d-flex">
          <div className="hiring-details">
            <div className="flex-row">
              <p className="headline">{props.location.state.jobs.title}</p>
              <p className="bold-details">{task}</p>
              <p className="reg">{props.location.state.jobs.data.the_task}</p>
              <p className="bold-details">{desc}</p>
              <p className="reg">{props.location.state.jobs.data.description}</p>
              <p className="bold-details">{contact}</p>
              <p className="reg">{contact_info}<span>{email}</span>{contact_info2}</p>
            </div>
          </div>
        </div>
      </BodyClassName>
    );

  };

  export default HiringDetails;
