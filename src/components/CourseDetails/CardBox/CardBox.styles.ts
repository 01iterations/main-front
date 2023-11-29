import styled from "styled-components";

export const CardBoxWrapper = styled.div`
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
