import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getAllByRole } = render(<App />);
  const [header] = getAllByRole('heading')
  expect(header).toHaveTextContent('My Good Reads');
});
