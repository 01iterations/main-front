import styled, { keyframes } from "styled-components";

export const sizes = {
    xsmall: "320px",
    small: "480px",
    medium: "768px",
    large: "1024px",
    xlarge: "1200px",
    xxlarge: "1440px",
};

export const devices = {
    xsmall: `(max-width: ${sizes.xsmall})`,
    small: `(min-width: ${sizes.xsmall}) and (max-width: ${sizes.small})`,
    medium: `(min-width: ${sizes.small}) and (max-width: ${sizes.medium})`,
    large: `(min-width: ${sizes.medium}) and (max-width: ${sizes.large})`,
    xlarge: `(min-width: ${sizes.large}) and (max-width: ${sizes.xlarge})`,
    xxlarge: `(min-width: ${sizes.xlarge}) and (max-width: ${sizes.xxlarge})`,
};

const fadeIn = keyframes`
    from {
      background-position: 0% 100%;
    }
    to {
      background-position: 0% 0%;
    }
`;

export const ProjectCardContainer = styled.div`
    /* border-radius: 15px; */
    overflow: hidden;
    max-height: 30vh;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 0;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media ${devices.medium} {
    }
`;

export const ProjectContent = styled.div`
    position: absolute;
    /* background-color: rgba(0,0,0,0.5); */
    border-radius: 0;
    border: 1px solid black;
    bottom: 0;
    color: white;
    z-index: 1;
    margin-left: 0;
    width: 100%;
    height: 100%;
    padding-left: 10px;
    /* border: 1px solid red; */
    /* padding-top: 200px; */
    /* margin-bottom: -10px; */
    /* padding-bottom: -10px; */

    ${ProjectCardContainer}:hover & {
        display: block;
        background: linear-gradient(
            to top,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 100%
        );
        animation: ${fadeIn} 0.7s forwards;
        cursor: pointer;
    }
`;

export const ProjectCardContentDetails = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 1.1vw;

    & h6 {
        font-family: avenir;
        font-size: 1.1vw;

        @media ${devices.small} {
            font-size: 12px;
        }
    }
`;
