import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer', () => {
  render(<Footer content={'Footer'} />);
  const FooterElement = screen.getByText(/Footer/i);
  expect(FooterElement).toBeInTheDocument();
});
