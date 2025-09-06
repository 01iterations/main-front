import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "styled-components";

export const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 0 15px;
  }
`;

export const FeedbackCurrentSlide = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  padding: 30px;

  @media (max-width: 1024px) {
    max-width: 900px;
    padding: 25px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 15px;
  padding: 15px;

  @media (max-width: 768px) {
    gap: 30px;
    margin-top: 12px;
    padding: 12px;
  }
`;

export const NextButton = styled(ArrowForwardIosIcon)`
  &.MuiSvgIcon-root {
    width: 48px;
    height: 48px;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(243, 114, 41, 0.1);
    border: 2px solid rgba(243, 114, 41, 0.3);
    border-radius: 50%;
    padding: 12px;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    &:hover {
      color: white;
      background: rgba(243, 114, 41, 0.8);
      border-color: rgba(243, 114, 41, 1);
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(243, 114, 41, 0.3);
    }

    &:active {
      transform: scale(0.95);
    }

    &:focus {
      outline: 2px solid rgba(243, 114, 41, 0.5);
      outline-offset: 2px;
    }
  }
`;

export const PrevButton = styled(ArrowBackIosNew)`
  &.MuiSvgIcon-root {
    width: 48px;
    height: 48px;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(243, 114, 41, 0.1);
    border: 2px solid rgba(243, 114, 41, 0.3);
    border-radius: 50%;
    padding: 12px;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    &:hover {
      color: white;
      background: rgba(243, 114, 41, 0.8);
      border-color: rgba(243, 114, 41, 1);
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(243, 114, 41, 0.3);
    }

    &:active {
      transform: scale(0.95);
    }

    &:focus {
      outline: 2px solid rgba(243, 114, 41, 0.5);
      outline-offset: 2px;
    }
  }
`;

export const NavigationDots = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid
    ${(props) =>
      props.$active ? "rgba(243, 114, 41, 1)" : "rgba(255, 255, 255, 0.4)"};
  background: ${(props) =>
    props.$active ? "rgba(243, 114, 41, 1)" : "transparent"};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: rgba(243, 114, 41, 1);
    background: ${(props) =>
      props.$active ? "rgba(243, 114, 41, 1)" : "rgba(243, 114, 41, 0.3)"};
    transform: scale(1.2);
  }

  &:focus {
    outline: 2px solid rgba(243, 114, 41, 0.5);
    outline-offset: 2px;
  }
`;
