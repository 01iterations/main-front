import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {
  ProjectDetailsWrapper,
  ProjectHeader,
  ProjectTitle,
  ProjectLocation,
  ScrollIndicator,
  MainContent,
  ProjectDescription,
  ProjectInfoTable,
  Sidebar,
  ProjectType,
  Awards,
  SocialShare,
  ImageGallery,
  GalleryNavigation,
  RelatedProjects,
  GalleryImage,
  GalleryImageContainer,
  ImageCredits,
  GalleryWrapper,
  GalleryContent,
  HeroImage,
  HeroImageContainer,
  FullscreenOverlay,
  FullscreenContainer,
  CloseButton,
  FullscreenImageContainer,
  FullscreenImage,
  FullscreenNavigation,
  FullscreenCaption,
} from "./ProjectDetails.styles";
import { ProjectDataType } from "../../types/projects";
import Projects from "../../Data/projects/projects.data";

// Fullscreen Slideshow Component
interface FullscreenSlideshowProps {
  images: any[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const FullscreenSlideshow: React.FC<FullscreenSlideshowProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  return (
    <FullscreenOverlay onClick={onClose}>
      <FullscreenContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <FullscreenImageContainer>
          {images && images[currentIndex] && (
            <FullscreenImage
              src={images[currentIndex].src}
              alt={`Project image ${currentIndex + 1}`}
            />
          )}
        </FullscreenImageContainer>
        <FullscreenNavigation>
          <button onClick={onPrev}>‹</button>
          <span>{currentIndex + 1} / {images?.length || 1}</span>
          <button onClick={onNext}>›</button>
        </FullscreenNavigation>
        {images && images[currentIndex]?.caption && (
          <FullscreenCaption>
            <p>{images[currentIndex].caption}</p>
          </FullscreenCaption>
        )}
      </FullscreenContainer>
    </FullscreenOverlay>
  );
};

const ProjectDetails = () => {
  const [projectData, setProjectData] = useState<ProjectDataType | undefined>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { projectNum } = useParams();
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (projectNum && Projects && Projects[Number(projectNum) - 1]) {
      setProjectData(Projects[Number(projectNum) - 1]);
    }
  }, [projectNum]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && projectData?.sections && projectData.sections.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === projectData.sections.length - 1 ? 0 : prev + 1
        );
      }, 4000); // Change image every 4 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, projectData?.sections]);

  const nextImage = () => {
    if (projectData?.sections) {
      setCurrentImageIndex((prev) =>
        prev === projectData.sections.length - 1 ? 0 : prev + 1
      );
      // Pause auto-play when user manually navigates
      setIsAutoPlaying(false);
    }
  };

  const prevImage = () => {
    if (projectData?.sections) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? projectData.sections.length - 1 : prev - 1
      );
      // Pause auto-play when user manually navigates
      setIsAutoPlaying(false);
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
    setIsAutoPlaying(false); // Pause auto-play when in fullscreen
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const nextImageFullscreen = () => {
    if (projectData?.sections) {
      setCurrentImageIndex((prev) =>
        prev === projectData.sections.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImageFullscreen = () => {
    if (projectData?.sections) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? projectData.sections.length - 1 : prev - 1
      );
    }
  };

  // Handle keyboard events for fullscreen
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isFullscreen) return;

      switch (event.key) {
        case 'Escape':
          closeFullscreen();
          break;
        case 'ArrowLeft':
          prevImageFullscreen();
          break;
        case 'ArrowRight':
          nextImageFullscreen();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, projectData?.sections]);

  const getProjectLocation = () => {
    // Extract location from project title or use default
    if (projectData?.title) {
      if (projectData.title.includes("Turkey")) return "Rize, Turkey";
      if (projectData.title.includes("House")) return "Residential Design";
    }
    return "Architecture & Design";
  };

  const getProjectDescription = () => {
    if (projectData?.sections && projectData.sections[0]?.caption) {
      return projectData.sections[0].caption;
    }
    return "A comprehensive architectural project that combines innovative design with functional living spaces, creating a harmonious environment that reflects contemporary lifestyle needs.";
  };

  return (
    <ProjectDetailsWrapper>
      {projectData && (
        <>
          <HeroImageContainer>
            {projectData.sections && projectData.sections[0] && (
              <HeroImage
                src={projectData.sections[0].src}
                alt={projectData.title}
              />
            )}
            <ProjectHeader>
              <ProjectTitle>{projectData.title}</ProjectTitle>
              <ProjectLocation>{getProjectLocation()}</ProjectLocation>
              <ScrollIndicator>Scroll Down</ScrollIndicator>
            </ProjectHeader>
          </HeroImageContainer>

          <MainContent>
            <ProjectDescription>
              <h2>Integrated Design for Modern Living</h2>
              <p>{getProjectDescription()}</p>

              <ProjectInfoTable>
                <tbody>
                  <tr>
                    <td>CLIENT</td>
                    <td>Private Client</td>
                  </tr>
                  <tr>
                    <td>LOCATION</td>
                    <td>{getProjectLocation()}</td>
                  </tr>
                  <tr>
                    <td>SITE AREA</td>
                    <td>Custom Design</td>
                  </tr>
                  <tr>
                    <td>TOTAL FLOOR AREA</td>
                    <td>Residential Project</td>
                  </tr>
                  <tr>
                    <td>BUILDING HEIGHT</td>
                    <td>Multi-level Design</td>
                  </tr>
                  <tr>
                    <td>COMPLETION</td>
                    <td>2024</td>
                  </tr>
                </tbody>
              </ProjectInfoTable>
            </ProjectDescription>

            <Sidebar>
              <ProjectType>
                <h3>TYPE</h3>
                <ul>
                  <li>Residential</li>
                  <li>Architecture</li>
                  <li>Interior Design</li>
                </ul>
              </ProjectType>

              <Awards>
                <h3>AWARD</h3>
                <ul>
                  <li>2024 - Design Excellence Award</li>
                </ul>
              </Awards>

              <SocialShare>
                <h3>SHARE</h3>
                <ul>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
              </SocialShare>
            </Sidebar>
          </MainContent>

          <ImageGallery>
            <GalleryWrapper>
              <GalleryContent>
                <GalleryImageContainer onClick={openFullscreen}>
                  {projectData.sections && projectData.sections[currentImageIndex] && (
                    <GalleryImage
                      src={projectData.sections[currentImageIndex].src}
                      alt={`Project image ${currentImageIndex + 1}`}
                    />
                  )}
                </GalleryImageContainer>

                {projectData.sections && projectData.sections[currentImageIndex]?.caption && (
                  <ImageCredits>
                    <p>{projectData.sections[currentImageIndex].caption}</p>
                  </ImageCredits>
                )}
              </GalleryContent>

              <GalleryNavigation>
                <button onClick={prevImage}>Prev</button>
                <span>{currentImageIndex + 1} / {projectData.sections?.length || 1}</span>
                <button onClick={nextImage}>Next</button>
                {projectData.sections && projectData.sections.length > 1 && (
                  <button onClick={toggleAutoPlay} style={{ marginLeft: '2rem' }}>
                    {isAutoPlaying ? 'Pause' : 'Play'}
                  </button>
                )}
              </GalleryNavigation>
            </GalleryWrapper>
          </ImageGallery>

          <RelatedProjects>
            <nav>
              <a href="/projects">INDEX</a>
              <a href="/projects">Next Project</a>
            </nav>
          </RelatedProjects>

          {/* Fullscreen Slideshow */}
          {isFullscreen && projectData && (
            <FullscreenSlideshow
              images={projectData.sections}
              currentIndex={currentImageIndex}
              onClose={closeFullscreen}
              onNext={nextImageFullscreen}
              onPrev={prevImageFullscreen}
            />
          )}
        </>
      )}
    </ProjectDetailsWrapper>
  );
};

export default ProjectDetails;
