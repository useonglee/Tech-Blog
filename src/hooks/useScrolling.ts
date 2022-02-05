import { useCallback, useEffect, useState } from 'react';

function useScrolling(): ReturnType<() => boolean> {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const handleScrollEvent = useCallback(() => {
    if (window.pageYOffset > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return isScroll;
}

export default useScrolling;
