import {
  AuthorAvatar,
  AuthorSection,
  FeedbackParagraph,
  FeedbackWrapper,
  LightModeRating,
  PersonalInfo,
  RatingSection,
  WhiteParagraph,
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
          <WhiteParagraph>{authorName}</WhiteParagraph>
          <WhiteParagraph>{authorJobTitle}</WhiteParagraph>
        </PersonalInfo>
      </AuthorSection>

      <RatingSection>
        <LightModeRating name="read-only" value={rating} readOnly />
        <WhiteParagraph>({rating})</WhiteParagraph>
      </RatingSection>

      <FeedbackParagraph>{feedback}</FeedbackParagraph>
    </FeedbackWrapper>
  );
};

export default Feedback;
