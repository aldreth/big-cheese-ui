import React, { Component } from 'react';

import Header from './Header/Header';
import Home from './Home/Home';
import GrantApplications from './GrantApplications/GrantApplications';
import Thanks from './Thanks/Thanks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: 'Home',
    };

    this.setActiveComponent = this.setActiveComponent.bind(this);
  }


  setActiveComponent(componentName) {
    this.setState({
      activeComponent: componentName
    });
  }

  render() {
    return (
      <section className='main'>
        <Header changeComponent={this.setActiveComponent} />
        <main className='pt6'>
          <Home active={this.state.activeComponent === 'Home'} changeComponent={this.setActiveComponent} />
          <Thanks active={this.state.activeComponent === 'Thanks' } changeComponent={this.setActiveComponent} />
          <GrantApplications active={this.state.activeComponent === 'GrantApplications' } changeComponent={this.setActiveComponent} />
        </main>
      </section>
    );
  }
}

export default App;
