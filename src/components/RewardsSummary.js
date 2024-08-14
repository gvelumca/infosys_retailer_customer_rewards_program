/**
 * Author: Velu Guruvareddy
 * Email: gvelumca@gmail.com
 * Date: August 13, 2024
 */

import React from 'react';
import PropTypes from 'prop-types';

const RewardsSummary = ({ summary }) => (
  <div className="p-6 bg-gray-100">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Rewards Summary</h2>
    {summary.map((customer) => (
      <div key={customer.name} className="bg-white shadow-md rounded-lg p-4 mb-6 border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{customer.name}</h3>
        <p className="text-lg text-gray-700 mb-4">
          Total Points: <span className="font-bold text-blue-600">{customer.totalPoints}</span>
        </p>
        <ul className="list-disc list-inside pl-5 space-y-2">
          {Object.entries(customer.monthlyPoints).map(([month, points]) => (
            <li key={month} className="text-gray-600">
              <span className="font-medium text-gray-800">{month}:</span> {points} points
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

RewardsSummary.propTypes = {
  summary: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      totalPoints: PropTypes.number.isRequired,
      monthlyPoints: PropTypes.objectOf(PropTypes.number).isRequired,
    })
  ).isRequired,
};

export default RewardsSummary;
