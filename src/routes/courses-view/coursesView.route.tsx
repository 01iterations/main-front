import { useNavigate } from "react-router-dom";
import {
  CourseCard,
  CourseCenterWrapper,
  CoursesViewWrapper,
} from "./coursesView.styles";
const course1_thumbnail = "https://res.cloudinary.com/dwfgm5onf/image/upload/v1757088495/01iterations/assets_courses_course_1_thumbnail.jpg";
const course2_thumbnail = "https://res.cloudinary.com/dwfgm5onf/image/upload/v1757088497/01iterations/assets_courses_course_2_thumbnail.jpg";
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
