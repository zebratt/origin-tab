import React from 'react'

class ErrorBoundary extends React.Component<{ fallback: React.ReactNode }> {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      error,
    };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary