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

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 1rem;

  @media ${devices.medium} {
    height: 200px;
  }
`;

export const ProjectCardContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-family: caslon;
    font-size: 1.2rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
    line-height: 1.3;

    @media ${devices.medium} {
      font-size: 1rem;
    }
  }

  p {
    font-family: avenir;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;

    @media ${devices.medium} {
      font-size: 0.8rem;
    }
  }
`;
