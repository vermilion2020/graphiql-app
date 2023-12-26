import React, { Component, ErrorInfo } from 'react';
import { LocaleContext } from '../../context/LocaleContext';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  static contextType = LocaleContext;
  declare context: React.ContextType<typeof LocaleContext>;
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    const { texts } = this.context;
    if (this.state.hasError) {
      return <h1>{texts.errorBoundary.h1}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
