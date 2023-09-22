import styled from "styled-components";

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
    }
`;

export const OraganizationLogoImg = styled.img`
    z-index: 20;
    object-fit: contain;
    /* width: 100px; */
`;
export const OrganizationGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1vw;
`;

export const OrganizationLogo = styled.h3`
    font-family: Lato;
    color: white;
    /* margin-left: 2vw; */
    font-family: Lato;
    font-weight: lighter;
    font-size:1.5em;
    /* font-size: 1.5vw; */
    /* margin-top: 10px; */
`;
