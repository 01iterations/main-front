import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/nav.component";
import {
  CourseCard,
  CourseCenterWrapper,
  CoursesViewWrapper,
} from "./coursesView.styles";
import course1_thumbnail from "/assets/courses/course_1/thumbnail.jpg";
import course2_thumbnail from "/assets/courses/course_2/thumbnail.jpg";
import LoadingData from "../../components/LoadingData/LoadingData.component";
import useLoading from "../../hooks/useLoading.hook";
function CoursesView() {
  const navigate = useNavigate();
  const Loading = useLoading(2000);
  if(Loading){
    return <LoadingData isLoading={Loading} />
  }
  return (
    <CoursesViewWrapper>
      <Nav />
      <CourseCenterWrapper>
        <CourseCard
          src={course1_thumbnail}
          alt="Workflow with Corona"
          onClick={() => navigate("/courses/1")}
        />
        <CourseCard
          src={course2_thumbnail}
          alt="Volumetrix expert with corona"
          onClick={() => navigate("/courses/2")}
        />
      </CourseCenterWrapper>
    </CoursesViewWrapper>
  );
}

export default CoursesView;
