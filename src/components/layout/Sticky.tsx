import React, { useState, useEffect } from 'react';

interface StickyProps {
  children: React.ReactNode;
}

const Sticky: React.FunctionComponent<StickyProps> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header-wrapper ${scrollPosition > 100 ? "fixed fade-in" : ""}`}>
      {children}
    </header>
  );
};

export default Sticky;
