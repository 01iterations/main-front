import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HomeContainer = styled.div`
  overflow: hidden;
  display: flex;
`;
export const AnimationSection = styled.div`
  width: 60%;
  height: 100vh;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const HomeNav = styled.div`
  width: 40%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 2rem;
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    gap: 3rem;
    padding: 1.5rem;
  }
`;

export const Logo = styled.img`
  width: 50%;
  max-width: 200px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    width: 60%;
    max-width: 150px;
  }
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  
  h3 {
    font-family: 'Avenir', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
    color: #ffffff;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    padding: 0.5rem 0;
    
    &:hover {
      color: #ffffff;
      opacity: 0.7;
      transform: translateX(4px);
    }
    
    &:active {
      transform: translateX(2px);
    }
    
    @media (max-width: 768px) {
      font-size: 1rem;
      gap: 1.2rem;
    }
  }
`;
