import React, { Component } from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error-boundary.styles";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("error: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorImageOverlay>
          <ErrorImageText>Sorry 😔 Something went wrong... </ErrorImageText>
          <ErrorImageContainer imageUrl="https://i.imgur.com/Q2BAOd2.png" />
          <ErrorImageText>This Page is Not on the Map</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}
