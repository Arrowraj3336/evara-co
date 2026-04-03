import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useZoomNavigation = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingPath, setPendingPath] = useState<string | null>(null);

  const navigateWithZoom = useCallback((path: string) => {
    setPendingPath(path);
    setIsTransitioning(true);
  }, []);

  const handleTransitionComplete = useCallback(() => {
    if (pendingPath) {
      navigate(pendingPath);
      window.scrollTo(0, 0);
    }
    setIsTransitioning(false);
    setPendingPath(null);
  }, [navigate, pendingPath]);

  return {
    isTransitioning,
    navigateWithZoom,
    handleTransitionComplete,
  };
};