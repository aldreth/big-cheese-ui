import React from 'react';

const Thanks = ({active, changeComponent}) => (
  <div>
    <h1>Thanks</h1>
    <br />
    {active ? 'active' : 'hidden'}
    <p onClick={() => changeComponent('GrantApplications')}>
      Move to GrantApplications
    </p>
  </div>
);

Thanks.propTypes = {
  active: React.PropTypes.bool.isRequired,
  changeComponent: React.PropTypes.func.isRequired,
};

export default Thanks;
