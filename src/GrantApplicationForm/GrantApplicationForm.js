import React from 'react';
import { Form, Text, Textarea } from 'react-form'

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
        amount: !amount ? 'A amount is required' : undefined,
        description: !description || description.length > 500 ? 'A description is required and must be less than 500 characters' : undefined
      }
    }}
  >

    {({submitForm}) => {
      return (
        <form onSubmit={submitForm}>
          <Text field='name' />
          <Text field='postcode' />
          <Text field='amount' />
          <Textarea field='description' />
          <button type='submit'>Submit</button>
        </form>
      )
    }}
</Form>
);

export default GrantApplicationForm;
