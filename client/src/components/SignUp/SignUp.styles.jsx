import styled from 'styled-components';

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

export const SignUpTitle = styled.h2`
    color: #c4c3ca;
    margin: 10px 0;
`;