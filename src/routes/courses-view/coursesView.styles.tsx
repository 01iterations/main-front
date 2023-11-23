import styled from "styled-components";

export const CoursesViewWrapper = styled.div`
  background-color: #1b1c1e;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8vh;
`;

export const CourseCenterWrapper = styled.div`
  background-color: #1b1c1e;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media (max-width: 425px) {
    flex-direction: column;
    padding-top: 12vh;
    padding-bottom: 2vh;
  }

`;

export const CourseCard = styled.img`
  /* background-image: url('/assets/courses/course_1/card1.png'); */
  background-color: red;
  width: 30%;
  /* object-fit: contain; */


&:hover {
  opacity: 0.8; 
}
  @media (max-width: 1440px) {
    width: 45%;
  }

  @media (max-width: 425px) {
    width: 80%;
  }
`;
