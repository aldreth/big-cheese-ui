import React, { Component } from 'react';

import GrantApplication from '../GrantApplication/GrantApplication';

class GrantApplications extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const grantApplications = this.state.grantApplications;

    return (
      <article className={`ba mb4 ${this.props.active ? ' show' : ' hidden'}`}>
        <h1 className="f4 bg-light-purple white mv0 pv2 ph3">Grant applications</h1>
        <table className="f4 center w-100" cellSpacing="0">
          <thead>
            <tr className="stripe-dark">
              <th className="fw6 tl pa3 bg-white">Name</th>
              <th className="fw6 tl pa3 bg-white">Postcode</th>
              <th className="fw6 tl pa3 bg-white">Amount (£)</th>
              <th className="fw6 tl pa3 bg-white">Reasons</th>
            </tr>
          </thead>
          <tbody className="lh-copy">
            {grantApplications.map( (grantApplication, idx) => {
                return <GrantApplication grantApplication={grantApplication} key={idx} />
              }
            )}
          </tbody>
        </table>
      </article>
    );
  }
}

export default GrantApplications;
