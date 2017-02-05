import React from 'react';

import GrantApplicationForm from '../GrantApplicationForm/GrantApplicationForm';

const Home = ({active, changeComponent}) => (
  <article className={`ba mb4 ${active ? ' show' : ' hidden'}`}>
    <h1 className="f4 bg-light-purple white mv0 pv2 ph3">Get cash for your new cheese!</h1>
    <div className="pa3 bt">
      <p className="f6 f5-ns lh-copy measure mv0">
        The mouse queen is looking for exciting new cheeses to enchant and delight us all.
      </p>
      <p className="f6 f5-ns lh-copy measure mv0">
        If you've got a great idea, tell us about for a chance to get a grant to help you develop it.
      </p>
      <p className="f6 f5-ns lh-copy measure mv0">
        All you need to tell us is your name, postcode, the amount of money you'd like to apply for, and, the tricky bit, why you should get the cash in 500 characters or less!
      </p>
      <p className="f6 f5-ns lh-copy measure mv0">
        Fill in the form below to be part of a new generation of cheesemakers.
      </p>
    </div>
    <div className="pa3">
      <GrantApplicationForm hello='hello' changeComponent={changeComponent} />
    </div>
  </article>
);

Home.propTypes = {
  active: React.PropTypes.bool.isRequired,
  changeComponent: React.PropTypes.func.isRequired,
};

export default Home;
