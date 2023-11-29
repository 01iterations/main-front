import styled from "styled-components";

export const RibbonWrapper = styled.div`
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
