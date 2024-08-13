/**
 * Author: Velu Guruvareddy
 * Email: gvelumca@gmail.com
 * Date: August 13, 2024
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Transactions header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Transactions/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders Rewards Summary header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Rewards Summary/i);
  expect(headerElement).toBeInTheDocument();
});
