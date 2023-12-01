import styled from "styled-components";

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
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-top: 60px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`;

export const Logo = styled.img`
  color: white;
  width: 45%;
  object-fit: cover;
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  h3 {
    font-family: caslon;
    color: rgba(255, 255, 255, 0.8);
    &:hover {
      opacity: 0.8;
    }
  }
`;
