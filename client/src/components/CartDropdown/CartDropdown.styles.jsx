import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton'

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`;

export const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;
`;

export const CartDropdownButtonDisabled = styled(CustomButton)`
    margin-top: auto;
    cursor: not-allowed;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const CartItemsStyles = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const EmptyMessageStyles = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const MobileViewMessage = styled.div`
    display: none;

    @media screen and (max-width: 800px) {
        display: inline;
        font-size: 18px;
        text-align: center;
    }
`;