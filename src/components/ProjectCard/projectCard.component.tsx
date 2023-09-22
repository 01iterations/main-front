import { Link } from "react-router-dom";
import { ProjectCardContainer, ProjectCardContentDetails, ProjectContent } from "./projectCard.styles";

type PropsType = {
    thumbnail: string;
    courseTitle: string;
};

export function ProjectCard({
    thumbnail,
    courseTitle,
}: PropsType) {
    return (
        <ProjectCardContainer>
            <Link to={`/projects/${courseTitle}`}>
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
