import {
    ProjectContainer,
    ProjectsGrid,
    ProjectsHeader,
    ProjectsTitle,
} from "./projects.style";
import slideDataDesktop from "./projects-desktop.json";
import { useEffect, useState } from "react";
import { projectSlides } from "../../types/projects";
import { ProjectCard } from "../../components/ProjectCard/projectCard.component";


export function Projects() {
    const [slides, setSlides] = useState<projectSlides[]>([]);

    useEffect(() => {
        setSlides(slideDataDesktop);
    }, []);
    return (
        <ProjectContainer>
            <ProjectsHeader>
                <ProjectsTitle>PROJECTS</ProjectsTitle>
            </ProjectsHeader>
            <ProjectsGrid>
                {slides.map((slide: projectSlides, index: number) => (
                    <ProjectCard
                        key={index}
                        courseTitle={slide.quote ? slide.quote.title : ''}
                        thumbnail={slide.src}
                        projectNum={slide.num ? slide.num : 0}
                        location={slide.location || 'N/A'}
                    />
                ))}
            </ProjectsGrid>
        </ProjectContainer>
    );
}

export default Projects;
