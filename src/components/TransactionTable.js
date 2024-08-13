/**
 * Author: Velu Guruvareddy
 * Email: gvelumca@gmail.com
 * Date: August 13, 2024
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * TransactionTable Component
 * 
 * Displays a table of transactions with columns for customer, date, amount, and points.
 * 
 * Props:
 * - transactions: Array of transaction objects containing customerId, name, date, amount, and points.
 * 
 * Example usage:
 * <TransactionTable transactions={transactions} />
 */
const TransactionTable = ({ transactions }) => {
  // Error handling: check if transactions is an array
  if (!Array.isArray(transactions)) {
    console.error('Expected transactions to be an array.');
    return <div>Error: Invalid data format.</div>;
  }

  // Error handling: check if transactions array is empty
  if (transactions.length === 0) {
    return <div>No transactions available.</div>;
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      <table className="min-w-full border-separate border-spacing-0 border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Customer</th>
            <th className="border border-gray-300 px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date</th>
            <th className="border border-gray-300 px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Amount</th>
            <th className="border border-gray-300 px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Points</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {transactions.map((tx) => (
            <TransactionTableRow key={`${tx.customerId}-${tx.date}`} tx={tx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

// PropTypes validation
TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    customerId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
  })).isRequired,
};

// Memoized table row component for performance optimization
const TransactionTableRow = React.memo(({ tx }) => (
  <tr>
    <td className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900">{tx.name}</td>
    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-500">{tx.date}</td>
    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-500">${tx.amount}</td>
    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-500">{tx.points}</td>
  </tr>
));

TransactionTableRow.propTypes = {
  tx: PropTypes.shape({
    customerId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
  }).isRequired,
};

export default TransactionTable;
