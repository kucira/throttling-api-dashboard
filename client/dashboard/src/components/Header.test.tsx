import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header', () => {
  render(<Header title={'Header'} />);
  const headerElement = screen.getByText(/Header/i);
  expect(headerElement).toBeInTheDocument();
});
