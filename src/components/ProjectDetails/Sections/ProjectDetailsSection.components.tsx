import ImgBox from "../../CourseDetails/ImgBox/ImgBox.component";
import { ImageCaption, ProjectDetailsSectionWrapper } from "./ProjectDetailsSection.styles";

export type ProjectDetailsSectionProps = {
  imgSrc: string;
  caption: string;
};

const ProjectDetailsSection = ({
  imgSrc,
  caption,
}: ProjectDetailsSectionProps) => {
  return (
    <ProjectDetailsSectionWrapper>
      <ImgBox src={imgSrc}/>
      <ImageCaption>{caption}</ImageCaption>
    </ProjectDetailsSectionWrapper>
  );
};

export default ProjectDetailsSection;
