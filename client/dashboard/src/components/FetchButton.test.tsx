import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FetchButton from './FetchButton';

test('renders button', () => {
  render(<FetchButton title={'my button'} />);
  const buttonElement = screen.getByText(/my button/i);
  expect(buttonElement).toBeInTheDocument();
});

test('button test onclick', () => {
  const mockOnClick = jest.fn();
  const { getByTestId } = render(<FetchButton title="my button" onClick={mockOnClick()} />);

  const clickIndicator = getByTestId('btn-fetch');

  fireEvent.click(clickIndicator);

  expect(mockOnClick).toHaveBeenCalledTimes(1);
});
