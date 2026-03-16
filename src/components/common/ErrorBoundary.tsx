import { Component, type ErrorInfo, type PropsWithChildren, type ReactNode } from 'react';

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<PropsWithChildren, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught error', { error, errorInfo });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <div className="p-6 text-red-700">Something went wrong. Please refresh the page.</div>;
    }

    return this.props.children;
  }
}
