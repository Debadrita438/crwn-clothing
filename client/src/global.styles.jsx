import { createGlobalStyle } from 'styled-components';

const AppGlobalStyles = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
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

export { AppGlobalStyles };