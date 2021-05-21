import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log this to Sentry, New Relic, TrackJS
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2 style={{ textAlign: "center" }}>
          This listing has an error. <Link to="/">Click here</Link> to go back
          to the home page.
        </h2>
      );
    }

    // show content from inside the <ErrorBoundary></ErrorBoundary>
    return this.props.children;
  }
}

export default ErrorBoundary;
