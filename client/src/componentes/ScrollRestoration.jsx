import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollRestoration = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [location, navigationType]);

  return null;
};

export default ScrollRestoration;
