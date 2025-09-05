import { useNavigate } from "react-router-dom";
import {
  CourseCard,
  CourseCenterWrapper,
  CoursesViewWrapper,
} from "./coursesView.styles";
import course1_thumbnail from "/assets/courses/course_1/thumbnail.webp";
import course2_thumbnail from "/assets/courses/course_2/thumbnail.webp";
function CoursesView() {
  const navigate = useNavigate();
  return (
    <CoursesViewWrapper>
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
