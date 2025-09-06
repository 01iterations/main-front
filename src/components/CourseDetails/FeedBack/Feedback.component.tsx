import {
  AuthorAvatar,
  AuthorSection,
  FeedbackParagraph,
  LightModeRating,
  PersonalInfo,
  RatingSection,
  WhiteParagraph,
  TestimonialCard,
  QuoteIcon,
  AuthorDetails,
  CompanyInfo,
  VerifiedBadge,
  DateInfo,
  CourseInfo,
} from "./Feedback.styles";
import { FeedBackType } from "../../../types/feedback";
import { Verified } from "@mui/icons-material";

export type FeedbackProps = FeedBackType;

export const Feedback = ({
  authorName,
  authorImg,
  authorJobTitle,
  rating,
  feedback,
  company,
  courseName,
  date,
  verified = false,
}: FeedbackProps) => {
  return (
    <TestimonialCard data-testid="testimonial-card">
      <QuoteIcon>❝</QuoteIcon>

      <FeedbackParagraph>
        {feedback}
      </FeedbackParagraph>

      <RatingSection>
        <LightModeRating
          name="read-only"
          value={rating}
          readOnly
          aria-label={`${rating} out of 5 stars`}
        />
        <WhiteParagraph>({rating}/5)</WhiteParagraph>
      </RatingSection>

      <AuthorSection>
        <AuthorAvatar alt={`${authorName} profile`} src={authorImg} />
        <AuthorDetails>
          <PersonalInfo>
            <WhiteParagraph>
              {authorName}
              {verified && (
                <VerifiedBadge data-testid="verified-badge">
                  <Verified fontSize="small" />
                </VerifiedBadge>
              )}
            </WhiteParagraph>
            <WhiteParagraph>{authorJobTitle}</WhiteParagraph>
            {company && <CompanyInfo data-testid="company-info">{company}</CompanyInfo>}
            {courseName && <CourseInfo data-testid="course-info">Course: {courseName}</CourseInfo>}
            {date && <DateInfo data-testid="date-info">{date}</DateInfo>}
          </PersonalInfo>
        </AuthorDetails>
      </AuthorSection>
    </TestimonialCard>
  );
};

export default Feedback;
