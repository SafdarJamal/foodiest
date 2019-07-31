import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CustomButton from '../UI/CustomButton';

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

  reload() {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      // Render any custom fallback UI
      return (
        <Typography variant="overline" style={{ fontSize: 18 }}>
          Something went wrong.
          <CustomButton
            disableRipple={true}
            type="primary"
            text="Reload the page"
            clickMethod={this.reload}
          />
        </Typography>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
