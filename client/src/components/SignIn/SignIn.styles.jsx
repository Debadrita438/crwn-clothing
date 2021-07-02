import styled from 'styled-components';

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

export const TitleStyles = styled.h2`
    color: #c4c3ca;
    margin: 10px 0;
`;

export const SignInButton = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        display: grid;
        gap: 10px;
    }
`;