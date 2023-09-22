import styled, { keyframes } from "styled-components";

export const fadeInAnimation = keyframes`
     0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

export const ImageSliderContainer = styled.div`
    cursor: url('../../../public/icons/01itersWhite.png'), auto;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    & img {
        /* animation: ${fadeInAnimation} 2s linear infinite; */
        /* transition: ${fadeInAnimation} 3s ease-in-out infinite */
    }
`;
