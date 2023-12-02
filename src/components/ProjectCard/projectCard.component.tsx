import { Link, useNavigate } from "react-router-dom";
import {
  ProjectCardContainer,
  ProjectCardContentDetails,
  ProjectContent,
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
      {/* <Link to={`/projects/${courseTitle}`}> */}
      <Link to={`/projects`}>
        <ProjectContent>
          <ProjectCardContentDetails>
            <h6> {courseTitle}</h6>
            {/* <p>{courseDescription}</p> */}
          </ProjectCardContentDetails>
        </ProjectContent>
      </Link>
      <img src={thumbnail} alt={`project thumbnail `} />
    </ProjectCardContainer>
  );
}
