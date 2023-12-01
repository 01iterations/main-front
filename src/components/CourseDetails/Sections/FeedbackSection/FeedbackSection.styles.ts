import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "styled-components";

export const FeedbackCurrentSlide = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  width: 60%;
  border: 2px dashed #f37229;
  border-radius: 10px;
  padding-bottom: 20px;
  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 20px;
`;
export const NextButton = styled(ArrowBackIosNew)`
  /* font-size: 6em; */
  /* transform: scale(2); */
  &.MuiSvgIcon-root {
    width: 40px; /* Set the width */
    height: 40px; /* Set the height */
  }
  &:active {
    opacity: 0.5; 
  }
  color: #fff;
`;

export const PrevButton = styled(ArrowForwardIosIcon)`
  &.MuiSvgIcon-root {
    width: 40px; /* Set the width */
    height: 40px; /* Set the height */
    color: #fff;
  }
  &:active {
    opacity: 0.5; 
  }
`;
