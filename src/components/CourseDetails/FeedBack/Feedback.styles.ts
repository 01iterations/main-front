import { Avatar } from "@mui/material";
import Rating from "@mui/material/Rating";
import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }

`;

export const FeedbackWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* background-color: rgba(255, 255, 255, 0.05); */
  padding: 25px;
  border-radius: 10px;

  opacity: 0;
  animation: ${fadeInAnimation} 1s linear forwards;
`;
export const FeedbackParagraph = styled.p`
  color: rgba(255, 255, 255, 0.8);
`;

export const AuthorSection = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  /* border: 1px solid blue; */
`;

export const PersonalInfo = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* border: 1px solid red; */
  flex-grow: 1;
  /* justify-content: center; */
  /* align-items: center; */
  padding-top: 10px;
  /* gap: -10px; */

  p:nth-child(1) {
    font-size: 1.2em;
    margin-top: 5px;
    margin-bottom: 0px;
  }
  p:nth-child(2) {
    /* font-weight: bold; */
    opacity: 0.7;
  }
`;

export const AuthorAvatar = styled(Avatar)`
&.MuiAvatar-root{
  width: 70px;
  height: 70px;
}

`;

export const RatingSection = styled.div`
  display: flex;
`;

export const LightModeRating = styled(Rating)({
  "& .MuiRating-iconEmpty": {
    color: "#fff", // Change the color of the empty/star outline to a light color
  },
  "& .MuiRating-iconFilled": {
    color: "#FFD700", // Change the color of the filled stars if needed
  },
  // Add more customizations for different states if needed
});
