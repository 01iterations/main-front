import {
    ProjectContainer,
    ProjectsGrid,
    ProjectsHeader,
    ProjectsTitle,
    ProjectsSubtitle,
    FilterButton,
} from "./projects.style";
import slideDataDesktop from "./projects-desktop.json";
import { useEffect, useState } from "react";
import { projectSlides } from "../../types/projects";
import { ProjectCard } from "../../components/ProjectCard/projectCard.component";
import LoadingData from "../../components/LoadingData/LoadingData.component";
import useLoading from "../../hooks/useLoading.hook";


export function Projects() {
    const [slides, setSlides] = useState<projectSlides[]>([]);
    const Loading = useLoading(3500);

    useEffect(() => {
        setSlides(slideDataDesktop);
    }, []);

    if (Loading) {
        return <LoadingData isLoading={Loading} />
    }
    return (
        <ProjectContainer>
            <ProjectsHeader>
                <ProjectsTitle>PROJECTS</ProjectsTitle>
                <FilterButton>Filter</FilterButton>
            </ProjectsHeader>
            <ProjectsGrid>
                {slides.map((slide: projectSlides, index: number) => (
                    <ProjectCard
                        key={index}
                        courseTitle={slide.quote ? slide.quote.title : ''}
                        thumbnail={slide.src}
                        projectNum={slide.num ? slide.num : 0}
                    />
                ))}
            </ProjectsGrid>
            <ProjectsSubtitle>Selected Projects</ProjectsSubtitle>
        </ProjectContainer>
    );
}

export default Projects;
