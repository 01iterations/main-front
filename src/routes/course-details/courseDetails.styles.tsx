import styled from "styled-components";

export const CourseDetailsWrapper = styled.div`
  padding-bottom: 7vh;
  background-color: #1b1c1e;
  height: 100%;
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const CenterWrapper = styled.div`
  padding-top: 8vh;
  width: 65%;
  background-color: #1b1c1e;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* padding-top: 20px; */
  gap: 20px;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const ImgSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: relative;
  span {
    position: absolute;
    z-index: 1;
    width: calc(100vw - 20px);
    height: 10vw;
    top: 42.5%;
    background-color: #f37229;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const SquareImg = styled.img`
  width: 100%;
  z-index:10;
`;

export const Paragraph = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-family: provan-book-italic;
  font-size: 1.3em;
`;

export const Ribbon = styled.div`
  font-family: caslon;
  padding: 10px 0px;
  background-color: rgba(0, 0, 0, 0.15);
  width: 153.4%;
  display: flex;
  justify-content: center;
  h1,
  h2 {
    width: 40%;
    margin-left: -25%;
    color: white;
    strong {
      color: #f37229;
    }
  }
  @media (max-width: 768px) {
    width: 99vw;
    justify-content: flex-start;
    padding-left: 20px;
    h1,
    h2 {
      font-size: 1.5em;
      width: 75%;
      margin-left: 0;
    }
  }
`;

export const BulletPoints = styled.ul`
  color: rgba(255, 255, 255, 0.8);
  align-self: flex-start;
  font-family: provan-book;
  padding-left: 20px;
  font-size: 1.1em;
`;

export const CardsSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: relative;
  div {
    z-index: 2;
    padding: 10px;
    width: 40%;
    height: 300px;
    background-color: white;
  }
  img {
    z-index: 2;
    width: 45%;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
  span {
    position: absolute;
    z-index: 1;
    width: calc(100vw - 20px);
    height: 50%;
    top: 25%;
    background-color: #f37229;
  }
`;

export const ApplyBtn = styled.h1`
  font-family: franklin-gothic;
  font-size: 3em;
  color: #f37229;
  padding: 10px;
  background-color: transparent;
  &:hover {
    filter: brightness(0.8);
  }
`;

