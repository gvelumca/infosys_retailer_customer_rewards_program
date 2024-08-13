/**
 * Author: Velu Guruvareddy
 * Email: gvelumca@gmail.com
 * Date: August 13, 2024
 */

import React from 'react';

const RewardsSummary = ({ summary }) => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Rewards Summary</h2>
      {summary.map((customer, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{customer.name}</h3>
          <p className="text-lg text-gray-700 mb-4">
            Total Points: <span className="font-bold text-blue-600">{customer.totalPoints}</span>
          </p>
          <ul className="list-disc list-inside pl-5 space-y-2">
            {Object.keys(customer.monthlyPoints).map((month) => (
              <li key={month} className="text-gray-600">
                <span className="font-medium text-gray-800">{month}:</span> {customer.monthlyPoints[month]} points
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RewardsSummary;
