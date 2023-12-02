import {
    ProjectContainer,
    ProjectsGrid,
    StyledCarousel,
} from "./projects.style";
import Carousel from "react-bootstrap/Carousel";
import slideDataDesktop from "./projects-desktop.json";
import { useEffect, useState } from "react";
import { projectSlides } from "../../types/projects";
import Nav from "../../components/Nav/nav.component";
import { ProjectCard } from "../../components/ProjectCard/projectCard.component";
import LoadingData from "../../components/LoadingData/LoadingData.component";
import useLoading from "../../hooks/useLoading.hook";
import SlideShowArr from './slideshow.json';


export function Projects() {
    const [slides, setSlides] = useState<projectSlides[]>([]);
    const [slideShow, setSlideShow] = useState<projectSlides[]>([]);
    const Loading = useLoading(3500);
    
    function shuffleArray(arr: projectSlides[]) {
        const shuffled = arr.map((value) => ({ value, sort: Math.random() }));
        const shuffledIndexes = shuffled.sort(() => Math.random() - 0.5);
        return shuffledIndexes.map(({ value }) => value);
      }


    useEffect(() => {
        // conditional rendering of slide data based on screen width

            setSlides(slideDataDesktop);
            setSlideShow(shuffleArray(SlideShowArr));

        
    }, []);
    if(Loading){
        return <LoadingData isLoading={Loading} />
    }
    return (
        <>
            <Nav />
            <ProjectContainer>
                <StyledCarousel fade>
                    {slideShow.map((slide, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100 cut"
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
                            courseTitle={slide.quote ? slide.quote.title : ''}
                            thumbnail={slide.src}
                            projectNum={slide.num ? slide.num: 0}
                        />
                    ))}
                </ProjectsGrid>
            </ProjectContainer>
        </>
    );
}

export default Projects;
