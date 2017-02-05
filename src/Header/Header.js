import React from 'react';

import './Header.css'

const Header = ({changeComponent}) => (
  <header className="bg-light-purple fixed ph3 pv3 pv4-ns ph4-m ph5-l">
    <nav className="f6 fw6 ttu tracked">
      <a className="link dim white dib mr3" href="#" title="Big Cheese" onClick={() => changeComponent('Home')}>Big Cheese</a>
    </nav>
</header>
);

Header.propTypes = {
  changeComponent: React.PropTypes.func.isRequired,
};

export default Header;
