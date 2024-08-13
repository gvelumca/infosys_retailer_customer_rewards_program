/**
 * Author: Velu Guruvareddy
 * Email: gvelumca@gmail.com
 * Date: August 13, 2024
 */

import React, { useEffect, useState } from 'react';
import { fetchTransactions } from './api';
import { calculateRewards, calculatePoints } from './utils/calculatePoints';
import TransactionTable from './components/TransactionTable';
import RewardsSummary from './components/RewardsSummary';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [rewardsSummary, setRewardsSummary] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data.map(tx => ({
          ...tx,
          points: calculatePoints(tx.amount)
        })));
        setRewardsSummary(calculateRewards(data));
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    getTransactions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-6">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Retailer and Customer Rewards Program</h1>
        </header>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3 lg:w-3/4">
            <TransactionTable transactions={transactions} />
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <RewardsSummary summary={rewardsSummary} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
