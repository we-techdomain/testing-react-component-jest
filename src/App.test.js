import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

jest.mock('./Warning', () => {
  return jest.fn().mockImplementation(() => 
    <div data-testid="warning-text">Mock Warning Component</div>);
})

test('do not show warning by default', () => {
  const wrapper = render(<App />);
  expect(wrapper.queryAllByTestId('warning-text')).toHaveLength(0);
})

test('show warning on click of button', () => {
  const wrapper = render(<App />);
  wrapper.getByTestId('warning-button').click();
  expect(wrapper.queryAllByTestId('warning-text')).toHaveLength(1);
})