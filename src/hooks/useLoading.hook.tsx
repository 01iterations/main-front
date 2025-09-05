import { useState, useEffect } from 'react';

export const useLoading = (delay = 0) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return loading;
};

// New hook for home page that waits for all images to load
export const useHomeLoading = (imageUrls: string[], minDelay = 2000) => {
  const [loading, setLoading] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    // Only show loading screen on first load or page refresh
    if (hasLoadedOnce) {
      setLoading(false);
      return;
    }

    setLoading(true);

    // Track when each image loads
    const imagePromises = imageUrls.map((url) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => reject(url);
        img.src = url;
      });
    });

    // Wait for all images to load or timeout after 10 seconds
    const timeoutPromise = new Promise<string[]>((resolve) => {
      setTimeout(() => resolve([]), 10000);
    });

    Promise.race([
      Promise.all(imagePromises),
      timeoutPromise
    ]).then(() => {
      // Ensure minimum loading time for smooth UX
      setTimeout(() => {
        setLoading(false);
        setHasLoadedOnce(true);
      }, minDelay);
    });

  }, [imageUrls, minDelay, hasLoadedOnce]);

  return loading;
};

export default useLoading;
