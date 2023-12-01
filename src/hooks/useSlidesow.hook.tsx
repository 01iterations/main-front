import { useState } from 'react';

// Custom hook for managing a slideshow
const useSlideshow = (components: React.ReactNode[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => ((prevIndex + 1 )% components.length));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
  };

  const getCurrentSlide = () => components[currentIndex];

  return {
    getCurrentSlide,
    currentIndex,
    goToNext,
    goToPrevious,
  };
};

export default useSlideshow;
