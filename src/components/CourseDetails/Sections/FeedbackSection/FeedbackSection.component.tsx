import { FeedBackType } from "../../../../types/feedback";
import Ribbon from "../../Ribbon/Ribbon.component";
import { Feedback } from "../../FeedBack/Feedback.component";
import useSlideshow from "../../../../hooks/useSlidesow.hook";
import {
  ButtonSection,
  FeedbackCurrentSlide,
  NextButton,
  PrevButton,
} from "./FeedbackSection.styles";

export type FeedbackSectionProps = {
  feedbacks: FeedBackType[];
};
export const FeedbackSection = ({ feedbacks }: FeedbackSectionProps) => {
  const { getCurrentSlide, goToNext, goToPrevious } = useSlideshow(
    feedbacks.map((feedback) => (
      <Feedback
        key={feedback.authorName}
        authorName={feedback.authorName}
        authorImg={feedback.authorImg}
        authorJobTitle={feedback.authorJobTitle}
        rating={feedback.rating}
        feedback={feedback.feedback}
      />
    ))
  );
  return (
    <>
      <Ribbon type="AfterCourse" title="Participants' Feedback" />
      {/* <input type="text" /> */}
      <FeedbackCurrentSlide>{getCurrentSlide()}
      <ButtonSection>
        <NextButton onClick={goToPrevious} />
        <PrevButton onClick={goToNext} />
      </ButtonSection>
      </FeedbackCurrentSlide>
    </>
  );
};

export default FeedbackSection;
