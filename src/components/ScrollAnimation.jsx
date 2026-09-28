import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  threshold = 0.1,
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(elementRef.current);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`scroll-animation ${animation} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        transform: getInitialTransform(animation)
      }}
    >
      {children}
    </div>
  );
};

// Helper function to get initial transform based on animation type
const getInitialTransform = (animation) => {
  switch(animation) {
    case 'fade-up':
      return 'translateY(30px)';
    case 'fade-down':
      return 'translateY(-30px)';
    case 'fade-left':
      return 'translateX(30px)';
    case 'fade-right':
      return 'translateX(-30px)';
    case 'zoom-in':
      return 'scale(0.8)';
    case 'zoom-out':
      return 'scale(1.2)';
    default:
      return 'translateY(30px)';
  }
};

export default ScrollAnimation;