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

// New hook for home page that only loads on refresh
export const useHomeLoading = (delay = 4000) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if this is a page refresh (not navigation)
    // We can detect this by checking the navigation type
    const navigationEntries = window.performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const navigationEntry = navigationEntries[0];

    // Only show loading if it's a page reload/refresh
    const isPageRefresh = navigationEntry && navigationEntry.type === 'reload';

    if (isPageRefresh) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay]);

  return loading;
};

export default useLoading;
