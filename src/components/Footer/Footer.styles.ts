import styled from "styled-components";
import whitecursor from "../../../public/assets/icons/01itersWhite-1.png";

export const FooterContainer = styled.footer`
  display: flex;
  padding: 2.5rem 4rem 1rem 5rem;
  flex: 1;
  align-items: start;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  position: relative;
  /* * {
    border: 1px solid blue;
  } */
  @media (max-width: 768px) {
    padding: 2rem 2rem 1rem 0rem;
    /* flex-direction: column;
    align-items: center; */
  }
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const LeftSection = styled.section`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* justify-content: space-between; */
  /* align-items: flex-start; */

  @media (max-width: 1280px) {
    /* display: none; */
    align-items: center;
    width: 30%;
  }

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

export const LogoContainer = styled.img`
  width: 40%;

  margin-bottom: 2rem;
  @media (max-width: 1280px) {
    margin-bottom: 0;
    /* width: 80%; */
  }
`;

export const MiddleSection = styled.section`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  gap: 4rem;
  @media (max-width: 1280px) {
    div:not(:last-child) {
      display: none;
    }

    /* display: none; */
  }
  @media (max-width: 786px) {
    width: 100%;
    font-size: 0.8rem;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

export const FooterLinksListContainer = styled.div`
  p:nth-child(1) {
    font-weight: bold;
    font-size: 1.2rem;
    color: white;
    &:hover {
      color: white;
    }
  }
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;

    cursor: url(${whitecursor}), auto;
    &:hover {
      color: #8ea3a8;
    }
  }
  p {
    &:hover {
      color: #8ea3a8;
    }
  }
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
`;

export const RightSection = styled.section`
  width: 25%;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1280px) {
    width: 50%;
  }
`;

export const SocialMediaContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  display: flex;
  svg {
    cursor: url(${whitecursor}), auto;
    filter: grayscale(100%);
    &:hover {
      filter: grayscale(0%);
    }
  }
`;

export const PartnershipContainer = styled.img`
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
