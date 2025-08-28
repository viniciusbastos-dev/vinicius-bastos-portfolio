import React from 'react';

const SCROLL_UP = 'up';
const SCROLL_DOWN = 'down';

type ScrollDirection = typeof SCROLL_UP | typeof SCROLL_DOWN;

interface UseScrollDirectionProps {
  initialDirection?: ScrollDirection;
  thresholdPixels?: number;
  off?: boolean;
}

const useScrollDirection = ({
  initialDirection = SCROLL_UP,
  thresholdPixels = 0,
  off = false,
}: UseScrollDirectionProps = {}): ScrollDirection => {
  const [scrollDir, setScrollDir] = React.useState<ScrollDirection>(initialDirection);

  React.useEffect(() => {
    const threshold = thresholdPixels;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    !off ? window.addEventListener('scroll', onScroll) : setScrollDir(initialDirection);

    return () => window.removeEventListener('scroll', onScroll);
  }, [initialDirection, thresholdPixels, off]);

  return scrollDir;
};

export default useScrollDirection;
