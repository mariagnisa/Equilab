import React from 'react';

//import components
import HiringListItem from './Hiring_list_item';

const HiringList = (props) => {
  //sending props to hiring list item
  const jobItems = props.jobs.map((job) => {
    return <HiringListItem key={job._id} job={job} />
  });

  return (
    <ul>
    {jobItems}
    </ul>
  );
}

export default HiringList;
