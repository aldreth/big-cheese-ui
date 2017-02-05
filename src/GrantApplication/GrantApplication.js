import React from 'react';

const GrantApplication = ({grantApplication}) => (
  <tr className="stripe-dark">
    <td className="pa3">{grantApplication.name}</td>
    <td className="pa3">{grantApplication.postcode}</td>
    <td className="pa3">{grantApplication.amount}</td>
    <td className="pa3">{grantApplication.description}</td>
  </tr>
);

GrantApplication.propTypes = {
  grantApplication: React.PropTypes.object.isRequired
};

export default GrantApplication;
