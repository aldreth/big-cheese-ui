import React, { Component } from 'react';

import GrantApplication from '../GrantApplication/GrantApplication'
// import Spinner from '../Spinner/Spinner'

class GrantApplications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySpinner: true,
      grantApplications: []
    };
  }

  componentDidUpdate() {
    if (this.props.active) {
      this.loadGrantApplications();
    }
  }

  loadGrantApplications() {
    const grantApplicationsUrl = 'http://localhost:3000/admin/grant_applications.json'
    fetch(grantApplicationsUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          displaySpinner: false,
          grantApplications: data
        })
      })
      .catch(function(reason) {
         console.log('something wrong with getting data');
      });
  }

  render() {
    const displaySpinner = this.state.displaySpinner;
    const grantApplications = this.state.grantApplications;
    return (
      <div>
        <p onClick={() => this.props.changeComponent('Home')} >Home</p>
        <h1>GrantApplications</h1>
        {this.props.active ? 'active' : 'hidden'}

        <div className={`grant-applications ${displaySpinner ? 'hide' : 'show'}`} >
          {grantApplications.map( (grantApplication, idx) => {
              return <GrantApplication grantApplication={grantApplication} key={idx} />
            }
          )}
        </div>
      </div>
    );
  }
}

export default GrantApplications;
