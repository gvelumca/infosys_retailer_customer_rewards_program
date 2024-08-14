/**
 * Author: Velu Guruvareddy
 * Email: gvelumca@gmail.com
 * Date: August 13, 2024
 */

/**
 * Format a date string into the full month name.
 * @param {string} dateStr - The date string to format.
 * @returns {string} - The full month name.
 */
export const getMonthName = (dateStr) => {
    return new Date(dateStr).toLocaleString('default', { month: 'long' });
  };
  