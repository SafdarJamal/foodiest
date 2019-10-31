import React, { Component } from 'react';

import ErrorBoundary from '../../components/ErrorBoundary';

class ErrorBoundaryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return <ErrorBoundary />;
    }

    return this.props.children;
  }
}

export default ErrorBoundaryContainer;
