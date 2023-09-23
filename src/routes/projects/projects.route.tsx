import {
    ProjectCotainer,
    ProjectsGrid,
    StyledCarousel,
} from "./projects.style";
import Carousel from "react-bootstrap/Carousel";
import slideDataMobile from "./projects-mobile.json";
import slideDataDesktop from "./projects-desktop.json";
import { useEffect, useState } from "react";
import { projectSlides } from "../../types/projects";
import Nav from "../../components/Nav/nav.component";
import { ProjectCard } from "../../components/ProjectCard/projectCard.component";

export function Projects() {
    const [slides, setSlides] = useState<projectSlides[]>([]);
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const breakpoint = 768; // breakpoint for mobile/desktop view

    useEffect(() => {
        // function to update screen width
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        // add window resize event listener on mount
        window.addEventListener("resize", handleResize);
        // remove window resize event listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        // conditional rendering of slide data based on screen width
        console.warn({ breakpoint, screenWidth });

        if (screenWidth < breakpoint) {
            // mobile view
            setSlides(slideDataMobile);
        } else {
            // desktop view
            setSlides(slideDataDesktop);
        }
    }, [screenWidth]);
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
                                src={slide.src}
                                alt={index + "slide"}
                            />
                        </Carousel.Item>
                    ))}
                </StyledCarousel>
                <ProjectsGrid>
                    {slides.map((slide: projectSlides, index: number) => (
                        <ProjectCard
                            key={index}
                            courseTitle={slide.quote.title}
                            thumbnail={slide.src}
                        />
                    ))}
                </ProjectsGrid>
            </ProjectCotainer>
        </>
    );
}

export default Projects;
