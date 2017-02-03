import React from 'react';

const Home = ({active, changeComponent}) => (
  <div>
    <h1>HOME</h1>
    <br />
    {active ? 'active' : 'hidden'}
    <p onClick={() => changeComponent('Thanks')}>
      Move to thanks
    </p>
  </div>
);

Home.propTypes = {
  active: React.PropTypes.bool.isRequired,
  changeComponent: React.PropTypes.func.isRequired,
};

export default Home;
