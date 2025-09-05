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

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1b1c1d;
  color: rgba(255, 255, 255, 0.8);
  padding: 0 5%;
`;

export const ProjectsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12vh 0 4vh 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 4vh;
`;

export const ProjectsTitle = styled.h1`
  font-family: caslon;
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;


export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4vh;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ProjectsSubtitle = styled.p`
  font-family: provan-book-italic;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 2vh 0;
  padding-bottom: 4vh;
`;
