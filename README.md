**Author:** Velu Guruvareddy  
**Email:** gvelumca@gmail.com  
**Date:** August 13, 2024

# Retailer Rewards Program

This application calculates and displays reward points for customers based on their transaction history. It includes utility functions for points calculation, components for displaying transaction data and rewards summary, and helper functions for date formatting.

## Table of Contents

- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Helper Functions](#helper-functions)
- [Utility Functions](#utility-functions)
- [Components and Tests](#components-and-tests)
- [Testing](#testing)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [TailwindCSS Integration](#tailwindcss-integration)

## Key Features

- **Max Reusability**: 
  - Utilized modular components and helper functions to maximize reusability across the application. Components and functions are designed to be independent and reusable, improving maintainability and reducing redundancy.

- **Exception/Error Handling**: 
  - Implemented comprehensive error handling for API calls to ensure robustness. 
  - **Error Boundaries**: Added error boundaries in React components to gracefully handle unexpected errors and display user-friendly messages. This approach ensures that the application remains functional even if some components fail.

- **Optimal Code and Performance**: 
  - Optimized application performance using memoized components to prevent unnecessary re-renders. Data processing is performed efficiently to ensure smooth user experience even with large datasets.

- **Documentation**: 
  - Included detailed comments within the code and a comprehensive README file with setup and usage instructions. The documentation helps new developers quickly understand the project's structure and functionality.

- **Test Coverage**: 
  - Implemented unit tests using Jest and React Testing Library to ensure code quality and reliability. Tests cover utility functions, components, and integration scenarios to catch issues early and verify functionality.

- **TailwindCSS Integration**: 
  - **Utility-First CSS Framework**: TailwindCSS is used for styling the application, allowing for rapid UI development with a utility-first approach. This method promotes the use of low-level utility classes to build custom designs without needing to write custom CSS.
  - **Configuration**: TailwindCSS is configured via the `tailwind.config.js` file, where custom colors, fonts, and other design tokens are defined. This ensures consistent styling across the application.
  - **Responsive Design**: TailwindCSS provides built-in responsive design utilities to make the application adaptable to various screen sizes. Media queries and responsive classes are used to ensure the application looks great on mobile, tablet, and desktop devices.
  - **Custom Styling**: Used Tailwind's `@apply` directive for creating reusable CSS classes and maintaining a consistent design system across components.
  - **Development Efficiency**: The use of TailwindCSS enhances development speed by reducing the need for custom CSS and enabling the use of pre-defined utility classes.

## Project Structure

- `src/api.js`: Simulates an API call to fetch transaction data.
- `src/components/TransactionTable.js`: Component to display transaction data.
- `src/components/RewardsSummary.js`: Component to display rewards summary.
- `src/components/ErrorBoundary.js`: Component to handle and display errors gracefully.
- `src/helpers/dateHelpers.js`: Contains helper functions for date formatting.
- `src/utils/calculatePoints.js`: Utility functions to calculate reward points.
- `src/utils/calculatePoints.test.js`: Unit tests for utility functions.
- `src/App.js`: Main application component.
- `src/App.test.js`: Unit tests for the main application component.
- `src/components/TransactionTable.test.js`: Unit tests for the TransactionTable component.

## Helper Functions

### `src/helpers/dateHelpers.js`

Contains helper functions for date formatting:

- **`getMonthName(dateStr: string): string`**
  - Converts a date string into the full month name.
  - **Parameters:**
    - `dateStr`: The date string to format.
  - **Returns:**
    - The full month name (e.g., "January", "February").

## Utility Functions

### `src/utils/calculatePoints.js`

Contains utility functions for calculating reward points:

- **`calculatePoints(amount: number): number`**
  - Calculates reward points based on the transaction amount.
  - **Parameters:**
    - `amount`: The transaction amount.
  - **Returns:**
    - The calculated points.

- **`calculateRewards(transactions: Array): Array`**
  - Calculates rewards based on an array of transaction objects.
  - **Parameters:**
    - `transactions`: An array of transaction objects, where each object includes `customerId`, `name`, `date`, and `amount`.
  - **Returns:**
    - An array of customer reward summaries, each including `name`, `totalPoints`, and `monthlyPoints`.

## Components and Tests

### `src/App.js`

The main application component.

### `src/App.test.js`

Unit tests for the main application component:

- **Tests:**
  - Verifies that the "Transactions" header is rendered.
  - Verifies that the "Rewards Summary" header is rendered.

### `src/components/TransactionTable.js`

Component to display transaction data in a table format.

### `src/components/TransactionTable.test.js`

Unit tests for the TransactionTable component:

- **Tests:**
  - Verifies that the "Transactions" header is rendered.
  - Checks that all transaction rows are rendered correctly.
  - Verifies that customer names, transaction dates, amounts, and points are displayed correctly.
  - Tests error handling for invalid data format.
  - Ensures a message is displayed when no transactions are available.

### `src/components/ErrorBoundary.js`

Component for handling and displaying errors:

- **Purpose**: Wraps application components to catch JavaScript errors anywhere in the component tree and display a fallback UI.
- **Features**: Provides a user-friendly error message when an error occurs, preventing the entire app from crashing and improving the user experience.

## Testing

Unit tests are included to verify the functionality of the utility functions and components:

- **`src/utils/calculatePoints.test.js`**
  - Tests for the `calculatePoints` and `calculateRewards` functions.
  - Uses Jest for mocking and assertions.

- **`src/App.test.js`**
  - Tests for the `App` component.

- **`src/components/TransactionTable.test.js`**
  - Tests for the `TransactionTable` component.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the application:
    ```bash
    npm start
    ```
2. Open `http://localhost:3000` in your browser to view the application.

## Running Tests

To run the unit tests, use the following command:

```bash
npm test
