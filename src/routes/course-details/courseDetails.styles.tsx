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
`;
export const CenterWrapper = styled.div`
  padding-top: 8vh;
  width: 65%;
  background-color: #1b1c1e;

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

export const SquareImg = styled.img`
  width: 100%;
`;

export const Paragraph = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-family: provan-book-italic;
`;

export const Ribbon = styled.div`
  font-family: caslon;
  padding: 10px 0px;
  background-color: rgba(0, 0, 0, 0.15);
  width: 153.4%;
  display: flex;
  justify-content: center;
  h1 {
    width: 65%;
    color: white;
    strong {
      color: #f37229;
    }
  }
  @media (max-width: 768px) {
    width: 99vw;
    h1 {
      font-size: 1.5em;
      width: 95%;
    }
  }
`;

export const BulletPoints = styled.ul`
  color: rgba(255, 255, 255, 0.8);
  align-self: flex-start;
  font-family: provan-book;
  padding-left: 20px;
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

export const ApplyBtn = styled.button`
  font-family: franklin-gothic;
  color: #f37229;
  padding: 10px;
  background-color: transparent;
  &:hover {
    filter: brightness(0.8);
  }
`;
