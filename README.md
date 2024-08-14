# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Retailer Rewards Program

This application calculates and displays reward points for customers based on their transaction history. It includes utility functions for points calculation, components for displaying transaction data and rewards summary, and helper functions for date formatting.

## Project Structure

- `src/api.js`: Simulates an API call to fetch transaction data.
- `src/components/TransactionTable.js`: Component to display transaction data.
- `src/components/RewardsSummary.js`: Component to display rewards summary.
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
