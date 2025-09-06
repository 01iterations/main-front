import { FeedBackType } from "../../../../types/feedback";
import Ribbon from "../../Ribbon/Ribbon.component";
import { Feedback } from "../../FeedBack/Feedback.component";
import useSlideshow from "../../../../hooks/useSlidesow.hook";
import {
  ButtonSection,
  FeedbackCurrentSlide,
  NextButton,
  PrevButton,
  TestimonialContainer,
} from "./FeedbackSection.styles";
import { useEffect, useCallback } from "react";

export type FeedbackSectionProps = {
  feedbacks: FeedBackType[];
};

export const FeedbackSection = ({
  feedbacks
}: FeedbackSectionProps) => {

  const { getCurrentSlide, goToNext, goToPrevious } = useSlideshow(
    feedbacks.map((feedback) => (
      <Feedback
        key={`${feedback.authorName}-${feedback.date || Math.random()}`}
        authorName={feedback.authorName}
        authorImg={feedback.authorImg}
        authorJobTitle={feedback.authorJobTitle}
        rating={feedback.rating}
        feedback={feedback.feedback}
        company={feedback.company}
        courseName={feedback.courseName}
        date={feedback.date}
        verified={feedback.verified}
      />
    ))
  );

  // Keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        goToPrevious();
        break;
      case 'ArrowRight':
        event.preventDefault();
        goToNext();
        break;
    }
  }, [goToNext, goToPrevious]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <Ribbon type="AfterCourse" title="Participants' Feedback" />
      <TestimonialContainer>
        <FeedbackCurrentSlide
          role="region"
          aria-label="Testimonials carousel"
          aria-live="polite"
        >
          {getCurrentSlide()}
        </FeedbackCurrentSlide>

        <ButtonSection>
          <PrevButton
            onClick={goToPrevious}
            aria-label="Previous testimonial"
            tabIndex={0}
          />
          <NextButton
            onClick={goToNext}
            aria-label="Next testimonial"
            tabIndex={0}
          />
        </ButtonSection>
      </TestimonialContainer>
    </>
  );
};

export default FeedbackSection;
