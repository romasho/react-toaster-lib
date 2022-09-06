import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: '' }
  }

  static getDerivedStateFromError(error) {
    return { hasError: error.message }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Sorry something went wrong!</h2>
          <p>{this.state.hasError}</p>
        </div>
      )
    }
    return this.props.children
  }
}
