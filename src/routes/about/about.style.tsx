import styled from "styled-components";

export const AboutContainer = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: center;
  /* justify-content: center; */
  align-items: center;
  background-color: black;
`;

export const SideImg = styled.img`
  /* z-index: 1000; */
  width: 20%;
  height: 100%;
  object-fit: cover;
  padding: 0;
  margin: 0;

  @media (max-width: 1440px) {
    transform: scale(0.6);
  }
  @media (max-width: 1024px) {
    display: none;
    /* transform: scale(3); */
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const CenterImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

// export const AboutText = styled.div`
//   color: rgba(0, 0, 0, 0.8);
//   display: flex;
//   flex-direction: column;

//   justify-content: flex-start;
//   align-items: center;
//   width: 60%;
//   max-width: 100vh;
//   overflow-y: auto;
//   gap: 20px;
//   padding: 50px 0px;

//   /* border: 1px solid white; */
//   background-color: #bec9cb;
//   @media (max-width: 1024px) {
//     width: 100%;
//     border: 5px solid black
//   }
//   @media (max-width: 768px) {
//     width: 100%;
//     border: 5px solid black;
//     /* margin-top: 1500px; */
//   }

// `;
export const AboutText = styled.div`
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Start content from the top */
  align-items: center;
  width: 60%;
  max-height: 100vh; /* Set a maximum height relative to the viewport */
  overflow-y: auto; /* Enable vertical scrolling when content overflows */
  gap: 20px;
  padding: 50px 0; /* Adjust padding as needed */
  box-sizing: border-box; /* Include padding in the total width/height */
  background-color: #bec9cb;
  @media (max-width: 1024px) {
    width: 100%;
    border: 5px solid black;
  }
  @media (max-width: 768px) {
    width: 100%;
    border: 5px solid black;
  }
`;


export const AboutParagraph = styled.div`
  /* text-align: justify; */
  width: 50%;
  @media (max-width: 1440px) {
    width: 80%;
  }
  /* display: flex; */
  p {
    text-align: justify;

    font-family: provan-regular;
    strong {
      font-family: caslon;
      font-size: 1.1em;
    }
  }
  h1 {
    font-family: caslon;
    font-size: 4em;
    float: left;
    /* border: 1px solid red; */
    margin: -5px 5px 0 0;
    padding: 0;

    /* height: 10px; */
  }
  span {
    font-family: caslon;
  }
`;
