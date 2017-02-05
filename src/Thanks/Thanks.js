import React from 'react';

const Thanks = ({active, changeComponent}) => (
  <article className={`ba mb4 ${active ? ' show' : ' hidden'}`}>
    <h1 className="f4 bg-light-purple white mv0 pv2 ph3">Thanks</h1>
    <div className="pa3 bt">
      <p className="f6 f5-ns lh-copy measure mv0">
        Thanks very much for your application.
      </p>
      <p className="f6 f5-ns lh-copy measure mv0">
        We'll be in touch soon.
      </p>
      <p className="f6 f5-ns link dim lh-copy measure mt5 pointer" onClick={() => changeComponent('GrantApplications')}>
        See all grant applications
      </p>
    </div>
  </article>
);

Thanks.propTypes = {
  active: React.PropTypes.bool.isRequired,
  changeComponent: React.PropTypes.func.isRequired,
};

export default Thanks;
