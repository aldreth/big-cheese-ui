import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import GrantApplication from './GrantApplication';

const setQuestionsMock = jest.fn();

const grantApplication = {
  amount: '200',
  description: 'The cheese is amazing I make it with love and care. And I publicise it in the Daily Prophet.',
  name: 'Rita Skeeta',
  postcode: 'RS1 4RS',
};


const grantApplicationWrapper = shallow(<GrantApplication grantApplication={grantApplication} />);

it('renders amount', () => {
  expect(grantApplicationWrapper.text()).toContain('200');
});


it('renders description', () => {
  expect(grantApplicationWrapper.text()).toContain('The cheese is amazing I make it with love and care. And I publicise it in the Daily Prophet.');
});

it('renders name', () => {
  expect(grantApplicationWrapper.text()).toContain('Rita Skeeta');
});

it('renders postcode', () => {
  expect(grantApplicationWrapper.text()).toContain('RS1 4RS');
});

it('renders correctly', () => {
  const tree = renderer.create(
    <GrantApplication grantApplication={grantApplication} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
