import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    return this.props.children;
  }
}
