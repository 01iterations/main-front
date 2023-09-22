import styled from "styled-components";

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

export const Navbar = styled.div`
    position: absolute;
    top: 0;
    z-index: 9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    opacity: 1;
    /* background-color: #1b1c1d; */

    width: 100%;
    height: 7%;
    position: Fixed;

    &:hover {
        background-color: #282930;
    }
`;

export const LinkGroup = styled.div`
    display: flex;
    gap: 3vw;
    margin-right: 3vw;
    & a {
        font-family: avenir;
        text-decoration: none;
        font-size: 1.1vw;
        color: white;
        opacity: 0.7;
        @media ${devices.xlarge} {
            font-size: 1em;
        }
        @media ${devices.large} {
            font-size: 0.8em;
        }
    }
`;

export const OraganizationLogoImg = styled.img`
    z-index: 20;
    object-fit: contain;
    padding: 0;
    margin-right: -10px;
    @media ${devices.small} {
        margin-right: -15px;
        transform: scale(0.8);
    }
    /* width: 100px; */
`;
export const OrganizationGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -5px;

    /* gap: -10px; */
`;

export const OrganizationLogo = styled.h3`
    /* font-family: Lato; */
    color: white;
    opacity: 0.9;

    /* margin-left: 2vw; */
    font-family: Lato;
    font-weight: lighter;
    font-size: 1.5em;
    padding: 0;
    margin: 0;

    @media ${devices.large} {
        font-size: 0.9em;
        /* transform: scale(0.8) */
    }
    @media ${devices.small} {
        font-size: 0.9em;
    }
    /* font-size: 1.5vw; */
    /* margin-top: 10px; */
`;
