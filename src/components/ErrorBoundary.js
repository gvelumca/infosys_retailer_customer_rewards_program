/**
 * Author: Velu Guruvareddy
 * Email: gvelumca@gmail.com
 * Date: August 13, 2024
 */

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Something went wrong!</strong>
          <span className="block sm:inline"> Please try again later.</span>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
