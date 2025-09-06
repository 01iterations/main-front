import { useState, useCallback } from 'react';

// Custom hook for managing a slideshow
const useSlideshow = (components: React.ReactNode[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => ((prevIndex + 1) % components.length));
  }, [components.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
  }, [components.length]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < components.length) {
      setCurrentIndex(index);
    }
  }, [components.length]);

  const getCurrentSlide = useCallback(() => components[currentIndex], [components, currentIndex]);

  const getTotalSlides = useCallback(() => components.length, [components.length]);

  return {
    getCurrentSlide,
    currentIndex,
    goToNext,
    goToPrevious,
    goToSlide,
    getTotalSlides,
  };
};

export default useSlideshow;
