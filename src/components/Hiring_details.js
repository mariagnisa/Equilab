import React from 'react';
import BodyClassName from 'react-body-classname';

//import stylesheet
import '../style/Hiring.css';

const HiringDetails = (props) => {

  let task = "The task at hand";
  let desc = "Does some of these things describe you?";
  let contact = "Still reading?";
  //let email = <span> "team@equilab.horse" </span>;
  let contact_info = `Contact us at team@equilab.horse and let us talk it over! We are based in Gothenburg.`;

  return (
    <BodyClassName className="hiring-background">
        <div className="container d-flex">
          <div className="hiring_details">
            <div className="flex-row">
              <p className="headline">{props.location.state.jobs.title}</p>
              <p className="bold_details">{task}</p>
              <p className="reg">{props.location.state.jobs.data.the_task}</p>
              <p className="bold_details">{desc}</p>
              <p className="reg">{props.location.state.jobs.data.description}</p>
              <p className="bold_details">{contact}</p>
              <p className="reg">{contact_info}</p>
            </div>
          </div>
        </div>
      </BodyClassName>
    );

  };

  export default HiringDetails;
