/**
 * Author: Velu Guruvareddy
 * Email: gvelumca@gmail.com
 * Date: August 13, 2024
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TransactionTable from './TransactionTable';
import * as api from '../api';

// Mock the fetchTransactions function
jest.mock('../api');

const mockTransactions = [
  { customerId: 1, name: 'Alice', date: '2024-05-01', amount: 120, points: 90 },
  { customerId: 2, name: 'Bob', date: '2024-06-15', amount: 75, points: 25 },
  { customerId: 3, name: 'Charlie', date: '2024-07-20', amount: 60, points: 10 },
];

describe('TransactionTable', () => {
  beforeEach(() => {
    api.fetchTransactions.mockResolvedValue(mockTransactions);
  });

  test('renders Transactions header', () => {
    render(<TransactionTable transactions={mockTransactions} />);
    const headerElement = screen.getByText(/Transactions/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders all transaction rows', async () => {
    render(<TransactionTable transactions={mockTransactions} />);
    await waitFor(() => {
      const rows = screen.getAllByRole('row');
      expect(rows).toHaveLength(mockTransactions.length + 1); // Including header row
    });
  });

  test('renders customer names', async () => {
    render(<TransactionTable transactions={mockTransactions} />);
    await waitFor(() => {
      mockTransactions.forEach(transaction => {
        const nameElement = screen.getByText(transaction.name);
        expect(nameElement).toBeInTheDocument();
      });
    });
  });

  test('renders transaction dates', async () => {
    render(<TransactionTable transactions={mockTransactions} />);
    await waitFor(() => {
      mockTransactions.forEach(transaction => {
        const dateElement = screen.getByText(transaction.date);
        expect(dateElement).toBeInTheDocument();
      });
    });
  });

  test('renders transaction amounts', async () => {
    render(<TransactionTable transactions={mockTransactions} />);
    await waitFor(() => {
      mockTransactions.forEach(transaction => {
        const amountElement = screen.getByText(`$${transaction.amount}`);
        expect(amountElement).toBeInTheDocument();
      });
    });
  });

  test('renders transaction points', async () => {
    render(<TransactionTable transactions={mockTransactions} />);
    await waitFor(() => {
      mockTransactions.forEach(transaction => {
        const pointsElement = screen.getByText(transaction.points);
        expect(pointsElement).toBeInTheDocument();
      });
    });
  });

  test('displays error message for invalid data format', () => {
    console.error = jest.fn(); // Mock console.error
    render(<TransactionTable transactions={{}} />); // Passing invalid data format
    const errorMessage = screen.getByText(/Error: Invalid data format./i);
    expect(errorMessage).toBeInTheDocument();
    expect(console.error).toHaveBeenCalledWith('Expected transactions to be an array.');
  });

  test('displays no transactions message when list is empty', () => {
    render(<TransactionTable transactions={[]} />);
    const noTransactionsMessage = screen.getByText(/No transactions available./i);
    expect(noTransactionsMessage).toBeInTheDocument();
  });
});
