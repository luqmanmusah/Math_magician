import React from 'react';
import renderer from 'react-test-renderer';
import Result from '../components/result';

it('renders correctly', () => {
  const tree = renderer
    .create(<Result result="5" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
