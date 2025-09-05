import { useNavigate } from "react-router-dom";
import {
  ProjectCardContainer,
  ProjectCardContentDetails,
  ProjectImage,
} from "./projectCard.styles";

type PropsType = {
  thumbnail: string;
  courseTitle: string;
  projectNum: number;
};

export function ProjectCard({ thumbnail, courseTitle, projectNum }: PropsType) {
  const navigate = useNavigate();
  return (
    <ProjectCardContainer
      onClick={() => navigate(`/projects/${projectNum}`)}
    >
      <ProjectImage src={thumbnail} alt={`project thumbnail`} />
      <ProjectCardContentDetails>
        <h3>{courseTitle}</h3>
        <p>Architecture & Design</p>
      </ProjectCardContentDetails>
    </ProjectCardContainer>
  );
}
