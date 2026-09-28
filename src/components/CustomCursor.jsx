// components/CustomCursor.jsx
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Check if device supports hover (not touch)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsVisible(false);
      // Show default cursor on touch devices
      document.body.style.cursor = 'default';
      return;
    }

    setIsVisible(true);

    // Mouse move handler
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
      
      // Update dot position instantly
      if (dotRef.current) {
        dotRef.current.style.left = clientX + 'px';
        dotRef.current.style.top = clientY + 'px';
      }
      
      // Update ring position with slight delay for smoothness
      if (ringRef.current) {
        ringRef.current.style.left = clientX + 'px';
        ringRef.current.style.top = clientY + 'px';
      }
      
      // Update trail position
      if (trailRef.current) {
        trailRef.current.style.left = clientX + 'px';
        trailRef.current.style.top = clientY + 'px';
      }
      
      // Update glow position
      if (glowRef.current) {
        glowRef.current.style.left = clientX + 'px';
        glowRef.current.style.top = clientY + 'px';
      }
    };

    // Hover state handler
    const handleMouseEnter = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('btn') ||
        target.classList.contains('nav-cta') ||
        target.classList.contains('service-card') ||
        target.classList.contains('skill-category') ||
        target.classList.contains('tag') ||
        target.classList.contains('social-link') ||
        target.classList.contains('nav-logo') ||
        target.closest('.nav-links a') ||
        target.classList.contains('filter-btn') ||
        target.classList.contains('project-card') ||
        target.classList.contains('certificate-card') ||
        target.classList.contains('experience-card');
      
      if (isInteractive) {
        setIsHovering(true);
        if (dotRef.current) dotRef.current.classList.add('hover');
        if (ringRef.current) ringRef.current.classList.add('hover');
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('btn') ||
        target.classList.contains('nav-cta') ||
        target.classList.contains('service-card') ||
        target.classList.contains('skill-category') ||
        target.classList.contains('tag') ||
        target.classList.contains('social-link') ||
        target.classList.contains('nav-logo') ||
        target.closest('.nav-links a') ||
        target.classList.contains('filter-btn') ||
        target.classList.contains('project-card') ||
        target.classList.contains('certificate-card') ||
        target.classList.contains('experience-card');
      
      if (isInteractive) {
        setIsHovering(false);
        if (dotRef.current) dotRef.current.classList.remove('hover');
        if (ringRef.current) ringRef.current.classList.remove('hover');
      }
    };

    // Click handlers
    const handleMouseDown = () => {
      setIsClicking(true);
      if (dotRef.current) dotRef.current.classList.add('clicking');
      if (ringRef.current) ringRef.current.classList.add('clicking');
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      if (dotRef.current) dotRef.current.classList.remove('clicking');
      if (ringRef.current) ringRef.current.classList.remove('clicking');
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Dot */}
      <div 
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          left: position.x + 'px',
          top: position.y + 'px',
        }}
      />
      
      {/* Ring */}
      <div 
        ref={ringRef}
        className="custom-cursor-ring"
        style={{
          left: position.x + 'px',
          top: position.y + 'px',
        }}
      />
      
      {/* Trail */}
      <div 
        ref={trailRef}
        className="custom-cursor-trail"
        style={{
          left: position.x + 'px',
          top: position.y + 'px',
        }}
      />
      
      {/* Glow */}
      <div 
        ref={glowRef}
        className="custom-cursor-glow"
        style={{
          left: position.x + 'px',
          top: position.y + 'px',
        }}
      />
    </>
  );
};

export default CustomCursor;