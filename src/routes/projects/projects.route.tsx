import {
    ProjectCotainer,
    ProjectsGrid,
    StyledCarousel,
} from "./projects.style";
import Carousel from "react-bootstrap/Carousel";
import slideData from "./projects.json";
import { useEffect, useState } from "react";
import { projectSlides } from "../../types/projects";
import Nav from "../../components/Nav/nav.component";
import { ProjectCard } from "../../components/ProjectCard/projectCard.component";

export function Projects() {
    const [slides, setSlides] = useState<projectSlides[]>([]);
    useEffect(() => {
        setSlides(slideData);
    }, []);
    return (
        <>
            <Nav />
            <ProjectCotainer>
                <StyledCarousel fade>
                    {slides.map((slide, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100 cut"
                                // id={slide.id !== undefined ? slide.id : undefined}
                                src={`src/${slide.src}`}
                                alt={index + "slide"}
                            />
                        </Carousel.Item>
                    ))}
                </StyledCarousel>
                <ProjectsGrid>
                    {slideData.map((slide: projectSlides, index: number) => (
                        <ProjectCard
                            key={index}
                            courseTitle={slide.quote.title}
                            thumbnail={`src/${slide.src}`}
                        />
                    ))}
                </ProjectsGrid>
            </ProjectCotainer>
        </>
    );
}

export default Projects;
