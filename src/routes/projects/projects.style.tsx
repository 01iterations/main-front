import styled from "styled-components";
import { Carousel } from "react-bootstrap";

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
  gap: 5px;
  background-color: black;
`;

export const StyledCarousel = styled(Carousel)`
  height: 100vh;
  /* object-position: center; */
  /* object-fit: cover; */
  /* margin-top: 8vh; */
  .carousel-inner {
    height: 100vh;
    object-position: center;
    object-fit: cover;
    display: flex;
    align-items: center;
  }

  & img {
    height: 100vh;
    object-fit: cover;
  }
  /* background-position: center; */
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 50%);
  /* min-height: 70vh; */
  /* cursor: url("../../../public/assets/cursor\ icons/01itersWhite.png"),auto; */
  /* gap: 5px; */
  /* margin-left: 10px; */
  padding: 0;
  overflow: auto !important;
  height: 100%;
  /* background-color: black; */

  > *:nth-child(3) {
    grid-column: span 2!important;
  }
`;
