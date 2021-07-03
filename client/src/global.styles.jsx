import { createGlobalStyle } from 'styled-components';

const AppGlobalStyles = createGlobalStyle`
    @font-face { 
        font-family: 'OpenSans Condensed';
        src: url('./assets/OpenSansCondensed-Light.ttf');
    }
    
    body {
        font-family: 'OpenSans Condensed', sans-serif !important;
        padding: 20px 60px;

        @media screen and (max-width: 800px) {
            padding: 0;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`;

const IndexGlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0,0,0,.5);
        box-shadow: 0 0 1px rgba(255,255,255,.5);
    }
`;

export { AppGlobalStyles, IndexGlobalStyles };