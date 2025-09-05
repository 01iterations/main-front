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
  location: string;
};

export function ProjectCard({ thumbnail, courseTitle, projectNum, location }: PropsType) {
  const navigate = useNavigate();
  return (
    <ProjectCardContainer
      onClick={() => navigate(`/projects/${projectNum}`)}
    >
      <ProjectImage src={thumbnail} alt={`project thumbnail`} />
      <ProjectCardContentDetails>
        <h3>{courseTitle}</h3>
        <p>{location}</p>
      </ProjectCardContentDetails>
    </ProjectCardContainer>
  );
}
