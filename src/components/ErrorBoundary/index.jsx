import React, { Component } from 'react';
import SomethingWentWrong from '../SomethingWentWrong';

class ErrorBoundary extends Component {
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
      // Render any custom fallback UI
      return <SomethingWentWrong />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
