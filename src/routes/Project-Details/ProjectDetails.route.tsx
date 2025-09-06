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
  GalleryWrapper,
  GalleryContent,
  HeroImage,
  HeroImageContainer,
  FullscreenOverlay,
  FullscreenContainer,
  CloseButton,
  FullscreenImageContainer,
  FullscreenImage,
  FullscreenSidebar,
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
  isAnimating?: boolean;
}

const FullscreenSlideshow: React.FC<FullscreenSlideshowProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  isAnimating = false,
}) => {
  return (
    <FullscreenOverlay onClick={onClose} isAnimating={isAnimating}>
      <FullscreenContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} title="Close Gallery (ESC)">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </CloseButton>

        {/* Modal Header */}
                <div style={{
          position: 'fixed',
          top: '2rem',
          left: '2rem',
          zIndex: 10000,
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          padding: '0.8rem 1.5rem',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <p style={{
            fontFamily: 'avenir',
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.8)',
            margin: 0,
            fontWeight: 400,
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            Gallery View
          </p>
        </div>

        {/* Image Section */}
        <FullscreenImageContainer>
          {images && images[currentIndex] && (
            <FullscreenImage
              src={images[currentIndex].src}
              alt={`Project image ${currentIndex + 1}`}
            />
          )}
        </FullscreenImageContainer>

        {/* Sidebar Section */}
        <FullscreenSidebar>
          <FullscreenNavigation>
            <button onClick={onPrev} title="Previous Image (←)">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
            <span>{currentIndex + 1} / {images?.length || 1}</span>
            <button onClick={onNext} title="Next Image (→)">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </FullscreenNavigation>

          <FullscreenCaption>
            <h3>Image {currentIndex + 1}</h3>
            {images && images[currentIndex]?.caption ? (
              <p>{images[currentIndex].caption}</p>
            ) : (
              <p>Explore the architectural details and design elements captured in this image. Each photograph showcases the intricate craftsmanship and thoughtful design that defines this project.</p>
            )}
          </FullscreenCaption>
        </FullscreenSidebar>

        {/* Keyboard shortcuts hint - hidden on mobile */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          zIndex: 10000,
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          padding: '0.6rem 1rem',
          borderRadius: '6px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: window.innerWidth <= 768 ? 'none' : 'block'
        }}>
          <p style={{
            fontFamily: 'avenir',
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.6)',
            margin: 0,
            fontWeight: 300,
            letterSpacing: '0.02em'
          }}>
            ESC to close • ← → to navigate
          </p>
        </div>
      </FullscreenContainer>
    </FullscreenOverlay>
  );
};

const ProjectDetails = () => {
  const [projectData, setProjectData] = useState<ProjectDataType | undefined>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);
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
    setIsModalAnimating(true);
    setIsFullscreen(true);
    setIsAutoPlaying(false); // Pause auto-play when in fullscreen

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsModalAnimating(false);
    }, 300);
  };

  const closeFullscreen = () => {
    setIsModalAnimating(true);
    // Delay the actual close to allow exit animation
    setTimeout(() => {
      setIsFullscreen(false);
      setIsModalAnimating(false);
    }, 200);
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

  // Handle body scroll prevention when modal is open
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen]);

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

  const getNextProjectUrl = () => {
    if (!projectNum) return "/projects";
    const currentIndex = Number(projectNum) - 1;
    const nextIndex = currentIndex + 1;
    // Check if next project exists (we have 7 projects total)
    if (nextIndex < 7) {
      return `/projects/${nextIndex + 1}`;
    }
    // If we're at the last project, go back to first
    return "/projects/1";
  };

  const getNextProjectTitle = () => {
    if (!projectNum) return "Next Project";
    const currentIndex = Number(projectNum) - 1;
    const nextIndex = currentIndex + 1;
    if (nextIndex < 7) {
      return "Next Project";
    }
    return "First Project";
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

              </GalleryContent>

              <GalleryNavigation>
                <button onClick={prevImage} title="Previous Image">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>
                <span>{currentImageIndex + 1} / {projectData.sections?.length || 1}</span>
                <button onClick={nextImage} title="Next Image">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </button>
                {projectData.sections && projectData.sections.length > 1 && (
                  <button onClick={toggleAutoPlay} title={isAutoPlaying ? 'Pause Slideshow' : 'Play Slideshow'}>
                    {isAutoPlaying ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5,3 19,12 5,21"></polygon>
                      </svg>
                    )}
                  </button>
                )}
              </GalleryNavigation>
            </GalleryWrapper>
          </ImageGallery>

          <RelatedProjects>
            <nav>
              <a href="/projects">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                INDEX
              </a>
              <a href={getNextProjectUrl()}>
                {getNextProjectTitle()}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </a>
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
              isAnimating={isModalAnimating}
            />
          )}
        </>
      )}
    </ProjectDetailsWrapper>
  );
};

export default ProjectDetails;
