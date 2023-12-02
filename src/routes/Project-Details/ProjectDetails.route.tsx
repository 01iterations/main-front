import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav/nav.component";
import ProjectDetailsSection from "../../components/ProjectDetails/Sections/ProjectDetailsSection.components";
import {
  CenterContentWrapper,
  ProjectDetailsWrapper,
  ProjectTitle,
  RecommendationTitle,
  SideContentWrapper,
} from "./ProjectDetails.styles";
import { ProjectDataType } from "../../types/projects";
import Projects from "../../Data/projects/projects.data";

const ProjectDetails = () => {
  const [projectData, setProjectData] = useState<ProjectDataType | undefined>();
  const { projectNum } = useParams();
  useEffect(() => {
    if (projectNum && Projects && Projects[Number(projectNum) - 1]) {
      setProjectData(Projects[Number(projectNum) - 1]);
    }
  }, []);
  return (
    <ProjectDetailsWrapper>
      <Nav />
      <CenterContentWrapper>
        {projectData && (
          <>
            <ProjectTitle>{projectData.title}</ProjectTitle>
            {projectData.sections &&
              projectData.sections.map((section, index) => (
                <ProjectDetailsSection
                  key={index}
                  imgSrc={section.src}
                  caption={section.caption}
                />
              ))}
          </>
        )}
      </CenterContentWrapper>
      <SideContentWrapper>
        <RecommendationTitle>More Projects</RecommendationTitle>
        <img src="/assets/slides/01.png" alt="" />
        <img src="/assets/slides/07.png" alt="" />
        <img src="/assets/slides/slide1.jpg" alt="" />
      </SideContentWrapper>
    </ProjectDetailsWrapper>
  );
};

export default ProjectDetails;
