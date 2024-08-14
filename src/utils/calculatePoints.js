/**
 * Author: Velu Guruvareddy
 * Email: gvelumca@gmail.com
 * Date: August 13, 2024
 */

export const calculatePoints = (amount) => {
  if (amount <= 50) return 0;
  if (amount <= 100) return amount - 50;
  return (amount - 100) * 2 + 50;
};

export const calculateRewards = (transactions) => {
  const customerRewards = transactions.reduce((acc, tx) => {
    const points = calculatePoints(tx.amount);
    const month = new Date(tx.date).toLocaleString('default', { month: 'long' });

    if (!acc[tx.customerId]) {
      acc[tx.customerId] = {
        name: tx.name,
        totalPoints: 0,
        monthlyPoints: {},
      };
    }

    acc[tx.customerId].totalPoints += points;
    acc[tx.customerId].monthlyPoints[month] = (acc[tx.customerId].monthlyPoints[month] || 0) + points;

    return acc;
  }, {});

  return Object.values(customerRewards).map((customer) => ({
    ...customer,
    monthlyPoints: Object.fromEntries(
      Object.entries(customer.monthlyPoints).sort((a, b) => 
        new Date(`01 ${b[0]} 2000`) - new Date(`01 ${a[0]} 2000`)
      )
    ),
  }));
};
