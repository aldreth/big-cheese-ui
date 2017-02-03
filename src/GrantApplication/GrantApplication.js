import React from 'react';

const GrantApplication = ({grantApplication}) => (
  <div>
    <h1>{grantApplication.name}</h1>
    <p>{grantApplication.postcode}</p>
    <p>{grantApplication.amount}</p>
    <p>{grantApplication.description}</p>
  </div>
);

GrantApplication.propTypes = {
  grantApplication: React.PropTypes.object.isRequired
};

export default GrantApplication;
