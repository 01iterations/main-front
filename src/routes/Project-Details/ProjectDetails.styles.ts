import styled from "styled-components";

export const ProjectDetailsWrapper = styled.div`
  /* width: 100%; */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  gap: 100px;
  padding-top: 20vh;
  background-color: #1b1c1d;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    padding-top: 10vh;

  }

`;

export const CenterContentWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 1024px) {
    width: 85%;
  }
`;

export const ProjectTitle = styled.h2`
  font-family: caslon;
`;

export const SideContentWrapper = styled.div`
  width: 15%;
  /* height: 200px; */
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  img {
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const RecommendationTitle = styled.h3`
  font-family: provan-book-italic;
  margin-bottom: -10px;
  margin-top: 24px;
`;
