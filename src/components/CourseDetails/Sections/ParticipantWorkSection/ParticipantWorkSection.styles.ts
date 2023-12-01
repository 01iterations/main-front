import styled from "styled-components";

export const ParticipantWorkWrapper = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  img{
    &:hover{
      opacity: 0.8;
    }
  }
`;

export const LeftSideImgs = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;
  img {
    height: 50%;
    width: 100%;
    object-fit: cover;
  }

  img:nth-child(1) {
      height: 55%;
  }
  img:nth-child(2) {
    height: 45%;

    }
`;

export const RightSideImgs = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 50%);
  row-gap: 5px;
  img {
    width: 98%;
    /* border: 1px solid cyan; */
  }
`;
