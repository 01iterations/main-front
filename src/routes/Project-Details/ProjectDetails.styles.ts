import styled from "styled-components";

export const ProjectDetailsWrapper = styled.div`
  min-height: 100vh;
  background-color: #000000;
  color: rgba(255, 255, 255, 0.9);
  padding: 0;
  max-width: 100%;
  margin: 0;
`;

export const HeroImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const ProjectHeader = styled.div`
  padding: 0;
  text-align: center;
  border-bottom: none;
  margin-bottom: 0;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);
  padding: 4rem 2rem;
  border-radius: 2px;
`;

export const ProjectTitle = styled.h1`
  font-family: caslon;
  font-size: 4rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.95);

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const ProjectLocation = styled.p`
  font-family: avenir;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 2rem 0;
  font-weight: 400;
  letter-spacing: 0.02em;
`;

export const ScrollIndicator = styled.p`
  font-family: avenir;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 300;
  position: relative;
  animation: scrollBounce 2s ease-in-out infinite;

  &::after {
    content: "↓";
    display: block;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    animation: scrollDown 2s ease-in-out infinite;
  }

  @keyframes scrollBounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-3px);
    }
  }

  @keyframes scrollDown {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
      opacity: 0.5;
    }
    40% {
      transform: translateY(8px);
      opacity: 1;
    }
    60% {
      transform: translateY(5px);
      opacity: 0.8;
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  gap: 6rem;
  margin-bottom: 6vh;
  padding: 8vh 8% 0 8%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 3rem;
    padding: 6vh 5% 0 5%;
  }
`;

export const ProjectDescription = styled.div`
  flex: 2;

  h2 {
    font-family: caslon;
    font-size: 2rem;
    font-weight: 300;
    margin: 0 0 2rem 0;
    color: rgba(255, 255, 255, 0.95);
    line-height: 1.3;
    letter-spacing: 0.02em;

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  p {
    font-family: avenir;
    font-size: 1.05rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.75);
    margin: 0 0 3rem 0;
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const ProjectInfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody tr {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  td {
    padding: 1.5rem 0;
    font-family: avenir;
    font-size: 1rem;
    vertical-align: top;

    &:first-child {
      font-weight: 500;
      color: rgba(255, 255, 255, 0.85);
      width: 35%;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-size: 0.9rem;
    }

    &:last-child {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.5;
      font-weight: 300;
    }
  }

  @media (max-width: 768px) {
    td {
      font-size: 0.9rem;
      padding: 1.2rem 0;
    }
  }
`;

export const Sidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-left: 3rem;

  @media (max-width: 1024px) {
    padding-left: 0;
    gap: 3rem;
  }
`;

export const ProjectType = styled.div`
  h3 {
    font-family: caslon;
    font-size: 1.2rem;
    font-weight: 300;
    margin: 0 0 2rem 0;
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-family: avenir;
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 1rem;
      padding: 0.8rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.3s ease;
      font-weight: 300;

      &:hover {
        color: rgba(255, 255, 255, 0.9);
        cursor: pointer;
        padding-left: 0.5rem;
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

export const Awards = styled.div`
  h3 {
    font-family: caslon;
    font-size: 1.2rem;
    font-weight: 300;
    margin: 0 0 2rem 0;
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-family: avenir;
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 1rem;
      padding: 0.8rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      line-height: 1.5;
      font-weight: 300;

      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

export const SocialShare = styled.div`
  h3 {
    font-family: caslon;
    font-size: 1.2rem;
    font-weight: 300;
    margin: 0 0 2rem 0;
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 1rem;

      a {
        font-family: avenir;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        padding: 0.8rem 0;
        display: block;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        transition: all 0.3s ease;
        font-weight: 300;

        &:hover {
          color: rgba(255, 255, 255, 0.9);
          padding-left: 0.5rem;
        }
      }
    }
  }
`;

export const ImageGallery = styled.div`
  margin-bottom: 6vh;
  padding: 4vh 8% 0 8%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    padding: 3vh 5% 0 5%;
  }
`;

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const GalleryContent = styled.div`
  display: flex;
  gap: 4rem;
  align-items: flex-start;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const GalleryImageContainer = styled.div`
  flex: 2;
  height: 70vh;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 1024px) {
    flex: none;
    width: 100%;
    height: 50vh;
  }
`;

export const GalleryImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: all 0.6s ease;
  opacity: 0;
  animation: fadeIn 0.6s ease forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export const ImageCredits = styled.div`
  flex: 1;
  padding: 0;
  border-top: none;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    flex: none;
    width: 100%;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  p {
    font-family: avenir;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin: 0;
    font-weight: 300;
  }
`;

export const GalleryNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-top: 2rem;
  padding: 1.5rem 0;

  button {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.8);
    padding: 0;
    font-family: avenir;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 60px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-weight: 400;
    position: relative;
    padding-bottom: 0.5rem;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.8);
      transition: width 0.3s ease;
    }

    &:hover {
      color: rgba(255, 255, 255, 1);

      &::after {
        width: 100%;
      }
    }

    &:active {
      transform: translateY(1px);
    }
  }

  span {
    font-family: avenir;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.5);
    min-width: 60px;
    text-align: center;
    font-weight: 300;
    letter-spacing: 0.05em;
  }
`;

export const RelatedProjects = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 4rem 0;
  margin: 0 8%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    margin: 0 5%;
    padding: 3rem 0;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      font-family: avenir;
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 300;
      transition: all 0.3s ease;

      &:hover {
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }
`;

// Fullscreen Slideshow Styles
export const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
`;

export const FullscreenContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 3rem;
  cursor: pointer;
  z-index: 10000;
  transition: all 0.3s ease;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    color: rgba(255, 255, 255, 1);
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    font-size: 2.5rem;
    width: 50px;
    height: 50px;
  }
`;

export const FullscreenImageContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: 90vw;
  max-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const FullscreenImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
`;

export const FullscreenNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 2rem;

  button {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 3rem;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &:hover {
      color: rgba(255, 255, 255, 1);
      background: rgba(255, 255, 255, 0.1);
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
      width: 50px;
      height: 50px;
    }
  }

  span {
    font-family: avenir;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 300;
    letter-spacing: 0.05em;
  }
`;

export const FullscreenCaption = styled.div`
  max-width: 800px;
  text-align: center;
  padding: 0 2rem;

  p {
    font-family: avenir;
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin: 0;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;

    p {
      font-size: 1rem;
    }
  }
`;
