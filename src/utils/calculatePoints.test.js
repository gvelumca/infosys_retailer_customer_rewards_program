/**
 * Author: Velu Guruvareddy
 * Email: gvelumca@gmail.com
 * Date: August 13, 2024
 */

import { calculatePoints, calculateRewards } from './calculatePoints';

// Test suite for calculatePoints function
describe('calculatePoints', () => {
  test('calculates points correctly for amounts under $50', () => {
    expect(calculatePoints(30)).toBe(0);
  });

  test('calculates points correctly for amounts between $50 and $100', () => {
    expect(calculatePoints(75)).toBe(25);
  });

  test('calculates points correctly for amounts over $100', () => {
    expect(calculatePoints(120)).toBe(90);
  });

  // Additional test cases to ensure robustness
  test('calculates points correctly for amount exactly $50', () => {
    expect(calculatePoints(50)).toBe(0);
  });

  test('calculates points correctly for amount exactly $100', () => {
    expect(calculatePoints(100)).toBe(50);
  });

  test('calculates points correctly for boundary value $101', () => {
    expect(calculatePoints(101)).toBe(52);
  });
});

// Test suite for calculateRewards function
describe('calculateRewards', () => {
  test('calculates rewards summary correctly for a single customer', () => {
    const transactions = [
      { customerId: 1, name: 'Alice', date: '2024-05-01', amount: 120 },
      { customerId: 1, name: 'Alice', date: '2024-05-15', amount: 75 },
    ];
    const summary = calculateRewards(transactions);
    expect(summary.length).toBe(1);
    expect(summary[0].totalPoints).toBe(115);
    expect(summary[0].monthlyPoints['May']).toBe(115);
  });

  // Additional test cases to ensure robustness
  test('calculates rewards summary correctly for multiple customers', () => {
    const transactions = [
      { customerId: 1, name: 'Alice', date: '2024-05-01', amount: 120 },
      { customerId: 2, name: 'Bob', date: '2024-06-15', amount: 200 },
    ];
    const summary = calculateRewards(transactions);
    expect(summary.length).toBe(2);

    const aliceSummary = summary.find(c => c.name === 'Alice');
    const bobSummary = summary.find(c => c.name === 'Bob');

    expect(aliceSummary.totalPoints).toBe(90);
    expect(aliceSummary.monthlyPoints['May']).toBe(90);

    expect(bobSummary.totalPoints).toBe(250);
    expect(bobSummary.monthlyPoints['June']).toBe(250);
  });

  test('calculates rewards summary correctly when no transactions are provided', () => {
    const summary = calculateRewards([]);
    expect(summary.length).toBe(0);
  });

  test('calculates rewards summary correctly for transactions in different months', () => {
    const transactions = [
      { customerId: 1, name: 'Alice', date: '2024-05-01', amount: 120 },
      { customerId: 1, name: 'Alice', date: '2024-06-15', amount: 75 },
    ];
    const summary = calculateRewards(transactions);
    expect(summary.length).toBe(1);

    const aliceSummary = summary[0];
    expect(aliceSummary.totalPoints).toBe(115);
    expect(aliceSummary.monthlyPoints['May']).toBe(90);
    expect(aliceSummary.monthlyPoints['June']).toBe(25);
  });
});
