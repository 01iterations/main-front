import styled from "styled-components";

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