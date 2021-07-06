import { Component } from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText, ErrorImageSmallText } from './ErrorBoundary.styles';

class ErrorBoundary extends Component {
    state = {
        hasErrored: false
    };

    static getDerivedStateFromError(error) {
        // process the error

        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png' />
                    <ErrorImageText>Oops, Looks Like This Page is Lost in Space!</ErrorImageText>
                    <ErrorImageSmallText>Dont't cry, we will bring it back for you whenever we will find it!</ErrorImageSmallText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;