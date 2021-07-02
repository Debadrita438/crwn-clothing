import styled from 'styled-components';

export const VerificationContainer = styled.div`
    display: flex;
    justify-content: center;
    line-height: 1.7;
	overflow-x: hidden;
`;

export const VerificationSection = styled.div`
    position: relative;
    width: 100%;
    display: inline-block;
    text-align: center;
`;

export const FullHeight = styled.div`
    min-height: 100vh;
`;

export const CardWrap = styled.div`
    position: relative;
    width: 440px;
    max-width: 100%;
    height: 600px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    perspective: 800px;
    margin-top: 60px;
    transform: rotateY(180deg);
`;

export const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    position:absolute;    
    top: 0;
    left: 0;  
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: all 600ms ease-out; 
    transform: rotateY(180deg);
`;

export const CardFrontContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #2a2b38;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 300%;
    position: absolute;
    border-radius: 6px;
    left: 0;
    top: 0;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
`;

export const CardBackContainer = styled(CardFrontContainer)`
    transform: rotateY(180deg);
`;

export const CenterWrap = styled.div`
    position: absolute;
    width: 100%;
    padding: 0 35px;
    top: 50%;
    left: 0;
    transform: translate3d(0, -50%, 35px) perspective(100px);
    z-index: 20;
    display: block;
`;

export const VerificationTitleStyles = styled.div`
    span {
        color: black;
        padding: 0 20px;
        text-transform: uppercase;
        font-size: 15px;
    }
`;

export const InputAndLabelStyles = styled.div`
    >input[type="checkbox"]:checked, input[type="checkbox"]:not(:checked){
        position: absolute;
        left: -9999px;
    }

    >.checkbox:checked + label, .checkbox:not(:checked) + label{
        position: relative;
        display: block;
        text-align: center;
        width: 60px;
        height: 16px;
        border-radius: 8px;
        padding: 0;
        margin: 10px auto;
        cursor: pointer;
        background-color: #c7c5c5;
    }

    >.checkbox:checked + label:before, .checkbox:not(:checked) + label:before{
        position: absolute;
        display: block;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        color: #f5f4f4;
        background-color: #37393f;
        font-family: 'unicons';
        content: '\e82b';
        z-index: 20;
        top: -10px;
        left: -10px;
        line-height: 36px;
        text-align: center;
        font-size: 24px;
        transition: all 0.5s ease;
    }

    >.checkbox:checked + label:before {
        transform: translateX(44px) rotate(-180deg);
    }

    .checkbox:checked ~ {
        transform: rotateY(180deg);
    }
`;