import React, { Component } from 'react';

class ErrorBoundary extends Component {
    construtor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
}

export default ErrorBoundary;