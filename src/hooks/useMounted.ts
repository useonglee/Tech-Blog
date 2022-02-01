import { useState, useEffect } from 'react';

function useMounted() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}

export default useMounted;
