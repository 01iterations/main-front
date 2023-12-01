import {
  AuthorAvatar,
  AuthorSection,
  FeedbackParagraph,
  FeedbackWrapper,
  LightModeRating,
  PersonalInfo,
  RatingSection,
} from "./Feedback.styles";
// import Typography from "@mui/material/Typography";
import { FeedBackType } from "../../../types/feedback";

export type FeedbackProps = FeedBackType;

export const Feedback = ({
  authorName,
  authorImg,
  authorJobTitle,
  rating,
  feedback,
}: FeedbackProps) => {
  return (
    <FeedbackWrapper>
      <AuthorSection>
        <AuthorAvatar alt="author img"  src={authorImg} />
        <PersonalInfo>
          <FeedbackParagraph>{authorName}</FeedbackParagraph>
          <FeedbackParagraph>{authorJobTitle}</FeedbackParagraph>
        </PersonalInfo>
      </AuthorSection>

      <RatingSection>
        <LightModeRating name="read-only" value={rating} readOnly />
        <FeedbackParagraph>({rating})</FeedbackParagraph>
      </RatingSection>

      <FeedbackParagraph>{feedback}</FeedbackParagraph>
    </FeedbackWrapper>
  );
};

export default Feedback;
