//import axios from 'axios';

const transactions = [
    { customerId: 1, name: "Alice", date: "2024-05-01", amount: 120 },
    { customerId: 1, name: "Alice", date: "2024-05-15", amount: 75 },
    { customerId: 2, name: "Bob", date: "2024-06-01", amount: 60 },
    { customerId: 2, name: "Bob", date: "2024-06-10", amount: 200 },
    { customerId: 3, name: "Charlie", date: "2024-07-01", amount: 110 },
    { customerId: 3, name: "Charlie", date: "2024-07-12", amount: 90 },
    { customerId: 1, name: "Alice", date: "2024-06-01", amount: 130 },
    { customerId: 1, name: "Alice", date: "2024-06-25", amount: 50 },
    { customerId: 2, name: "Bob", date: "2024-07-02", amount: 40 },
    { customerId: 2, name: "Bob", date: "2024-07-20", amount: 120 },
    { customerId: 3, name: "Charlie", date: "2024-05-10", amount: 75 },
    { customerId: 3, name: "Charlie", date: "2024-06-30", amount: 150 },
    { customerId: 1, name: "Alice", date: "2024-07-15", amount: 90 },
    { customerId: 1, name: "Alice", date: "2024-07-20", amount: 100 },
    { customerId: 2, name: "Bob", date: "2024-05-05", amount: 110 },
    { customerId: 2, name: "Bob", date: "2024-05-25", amount: 90 },
    { customerId: 3, name: "Charlie", date: "2024-06-05", amount: 200 },
    { customerId: 3, name: "Charlie", date: "2024-06-25", amount: 80 },
    { customerId: 1, name: "Alice", date: "2024-05-18", amount: 60 },
    { customerId: 1, name: "Alice", date: "2024-06-08", amount: 140 },
    { customerId: 2, name: "Bob", date: "2024-07-12", amount: 130 },
    { customerId: 3, name: "Charlie", date: "2024-05-22", amount: 95 }
  ];
  
  export const fetchTransactions = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(transactions);
      }, 1000);
    });
  };
  
