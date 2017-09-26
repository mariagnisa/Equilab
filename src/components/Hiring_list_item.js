import React from 'react';
import { Link } from 'react-router-dom';

//import stylesheet
import '../style/Hiring.css';

const HiringListItem = ({job}) => {
  return (
    <Link to={{
      pathname: `/hiring/${job.title.replace(/\s+/g, '')}`,
      state: { jobs: job }
    }} key={job._id} >
    <li className="hiring_links">
    {job.title}
    </li>
    </Link>
  );
};

export default HiringListItem;
