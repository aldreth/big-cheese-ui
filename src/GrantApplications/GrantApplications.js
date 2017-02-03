import React from 'react';

const GrantApplications = ({active, changeComponent}) => (
  <div>
    <h1>GrantApplications</h1>
    <br />
    {active ? 'active' : 'hidden'}
    <p onClick={() => changeComponent('Home')}>
      Move to Home
    </p>
  </div>
);

GrantApplications.propTypes = {
  active: React.PropTypes.bool.isRequired,
  changeComponent: React.PropTypes.func.isRequired,
};

export default GrantApplications;
