import React from 'react';
import { Form, Text, Textarea } from 'react-form'

import './GrantApplicationForm.css'

const GrantApplicationForm = ({changeComponent}) => (
  <Form
    onSubmit={(values) => {
      const url = 'http://localhost:3000/grant_applications.json'
      fetch(
        url, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then(response => {
          if (response.status >= 200 && response.status < 300) {
            return changeComponent('Thanks');
          }
          // TODO: handle errors from api
        }
      );
    }}

    validate={({ name, postcode, amount, description }) => {
      return {
        name: !name ? 'A name is required' : undefined,
        postcode: !postcode ? 'A postcode is required' : undefined,
        amount: !amount || isNaN(parseInt(amount)) ? 'A number is required' : undefined,
        description: !description || description.length > 500 ? 'A description is required and must be less than 500 characters' : undefined
      }
    }}
  >

    {({submitForm}) => {
      return (
        <form onSubmit={submitForm}>
          <label>
            <span>Name:</span>
            <Text field='name' />
          </label>
          <br />
          <label>
            <span>Postcode:</span>
            <Text field='postcode' />
          </label>
          <br />
          <label>
            <span>Amount (in £):</span>
            <Text field='amount' />
          </label>
          <br />
          <label>
            <span>Tell us about your cheese:</span>
            <Textarea rows='8' field='description' />
          </label>
          <br />

          <br />
          <button className='f6 link dim ba ph3 pv2 mb2 dib light-purple bg-transparent b--light-purple' type='submit'>Submit</button>
        </form>
      )
    }}
</Form>
);

export default GrantApplicationForm;
