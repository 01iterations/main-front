import { useEffect, useState } from "react";
import Nav from "../../components/Nav/nav.component";
import { CourseType } from "../../types/courseDetails";
import {
  ApplyBtn,
  CenterWrapper,
  CourseDetailsWrapper,
} from "./courseDetails.styles";
import { useParams } from "react-router-dom";
import { courseData as courseDataArr } from "../../Data/Courses/courses";
import IntroSection from "../../components/CourseDetails/Sections/IntroSection/IntroSection.Component";
import ModuleSection from "../../components/CourseDetails/Sections/ModuleSection/ModuleSection.component";
import PrerequisiteSection from "../../components/CourseDetails/Sections/PrequisiteSection/PrerequisiteSection.component";
import FeedbackSection from "../../components/CourseDetails/Sections/FeedbackSection/FeedbackSection.component";
import ParticipantWorkSection from "../../components/CourseDetails/Sections/ParticipantWorkSection/ParticipantWorkSection.component";
// import CourseCard from "../../components/CourseDetails/courseCard/CourseCard.component";
function CourseDetails() {
  const [courseData, setCourseData] = useState<CourseType | undefined>();
  const { courseNum } = useParams();

  useEffect(() => {
    if (courseNum && courseDataArr && courseDataArr[Number(courseNum) - 1]) {
      setCourseData(courseDataArr[Number(courseNum) - 1]);
    }
  }, []);

  return (
    <CourseDetailsWrapper>
      <Nav />
      <CenterWrapper>
        {courseData && (
          <>
            <IntroSection
              src={courseData.Intro.src}
              intro={courseData.Intro.intro}
            />
            {courseData.modules && (
              <>
                {courseData.modules.map((module, index) => (
                  <ModuleSection
                    moduleType={module.moduleType}
                    moduleName={module.moduleName}
                    moduleNumber={module.moduleNumber}
                    sources={module.sources}
                    moduleItems={module.moduleItems}
                    lastModule={module.lastModule}
                    key={index}
                  />
                ))}
              </>
            )}
            <PrerequisiteSection
              prerequisites={courseData.prerequisites}
              deliverable={courseData.deliverable}
            />
          </>
        )}
        {/* <FeedbackSection
          feedbacks={[
            {
              authorName: "John Doe",
              authorImg: "https://via.placeholder.com/150",
              authorJobTitle: "Architect",
              rating: 3.5,
              feedback:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              authorName: "Mary Jane Doe",
              authorImg: "https://via.placeholder.com/150",
              authorJobTitle: "Software Developer",
              rating: 3.5,
              feedback:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
          ]}
        /> */}

        {courseData?.feedback && (
          <>
            <FeedbackSection feedbacks={courseData.feedback} />
          </>
        )}

        {courseData?.participantsWork && (
          <ParticipantWorkSection sources={courseData.participantsWork} />
        )}

        <ApplyBtn
          onClick={() =>
            window.open(courseData?.link ? courseData.link : "", "_blank")
          }
        >
          Enroll Now
        </ApplyBtn>
      </CenterWrapper>
    </CourseDetailsWrapper>
  );
}

export default CourseDetails;
