export const calculatePoints = (amount) => {
    if (amount <= 50) return 0;
    if (amount <= 100) return amount - 50;
    return (amount - 100) * 2 + 50;
  };
  
  export const calculateRewards = (transactions) => {
    const customerRewards = {};
  
    transactions.forEach((tx) => {
      const points = calculatePoints(tx.amount);
      const month = new Date(tx.date).toLocaleString('default', { month: 'long' });
  
      if (!customerRewards[tx.customerId]) {
        customerRewards[tx.customerId] = {
          name: tx.name,
          totalPoints: 0,
          monthlyPoints: {},
        };
      }
  
      customerRewards[tx.customerId].totalPoints += points;
      if (!customerRewards[tx.customerId].monthlyPoints[month]) {
        customerRewards[tx.customerId].monthlyPoints[month] = 0;
      }
      customerRewards[tx.customerId].monthlyPoints[month] += points;
    });
  
    return Object.values(customerRewards);
  };
  