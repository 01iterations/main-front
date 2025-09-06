import { Avatar } from "@mui/material";
import Rating from "@mui/material/Rating";
import styled, { keyframes, css } from "styled-components";

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

export const TestimonialCard = styled.div`
  width: 100%;
  max-width: 900px;
  min-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 35px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 380px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    border-color: rgba(243, 114, 41, 0.5);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #f37229, #ff6b35, #f37229);
    background-size: 200% 100%;
    ${css`
      animation: ${pulseAnimation} 3s ease-in-out infinite;
    `}
  }

  opacity: 0;
  ${css`
    animation: ${fadeInAnimation} 0.8s ease-out forwards;
  `}

  @media (max-width: 768px) {
    min-width: unset;
    max-width: 100%;
    padding: 25px;
    border-radius: 15px;
    height: 340px;
  }

  @media (max-width: 600px) {
    height: 320px;
    padding: 20px;
  }
`;

export const QuoteIcon = styled.div`
  font-size: 4rem;
  color: rgba(243, 114, 41, 0.3);
  position: absolute;
  top: 10px;
  right: 20px;
  font-family: serif;
  line-height: 1;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 3rem;
    top: 5px;
    right: 15px;
  }
`;

export const FeedbackWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px;
  border-radius: 10px;
  opacity: 0;
  ${css`
    animation: ${fadeInAnimation} 1s linear forwards;
  `}
`;

export const FeedbackParagraph = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1em;
  line-height: 1.6;
  font-style: italic;
  margin: 20px 0;
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    font-size: 1em;
    margin: 15px 0;
  }

  @media (max-width: 466px) {
    font-size: 0.9em;
  }
`;

export const WhiteParagraph = styled.p`
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-weight: 500;
`;

export const AuthorSection = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
  margin-top: 10px;
`;

export const AuthorDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  p:nth-child(1) {
    font-size: 1.1em;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.95);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p:nth-child(2) {
    font-size: 0.9em;
    opacity: 0.8;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    p:nth-child(1) {
      font-size: 1em;
    }
    p:nth-child(2) {
      font-size: 0.85em;
    }
  }

  @media (max-width: 466px) {
    p:nth-child(1) {
      font-size: 0.95em;
    }
    p:nth-child(2) {
      font-size: 0.8em;
    }
  }
`;

export const CompanyInfo = styled.span`
  font-size: 0.85em;
  color: rgba(243, 114, 41, 0.8);
  font-weight: 500;
  margin-top: 2px;
`;

export const CourseInfo = styled.span`
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
`;

export const DateInfo = styled.span`
  font-size: 0.75em;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
`;

export const VerifiedBadge = styled.span`
  color: #4caf50;
  display: inline-flex;
  align-items: center;
  margin-left: 5px;
`;

export const AuthorAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    width: 60px;
    height: 60px;
    border: 2px solid rgba(243, 114, 41, 0.3);
    transition: all 0.3s ease;
  }

  &:hover {
    border-color: rgba(243, 114, 41, 0.6);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    &.MuiAvatar-root {
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 466px) {
    &.MuiAvatar-root {
      width: 45px;
      height: 45px;
    }
  }
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  ${css`
    animation: ${slideInAnimation} 0.6s ease-out 0.3s both;
  `}
`;

export const LightModeRating = styled(Rating)({
  "& .MuiRating-iconEmpty": {
    color: "rgba(255, 255, 255, 0.3)",
  },
  "& .MuiRating-iconFilled": {
    color: "#FFD700",
    filter: "drop-shadow(0 0 3px rgba(255, 215, 0, 0.5))",
  },
  "& .MuiRating-iconHover": {
    color: "#FFD700",
  },
});
