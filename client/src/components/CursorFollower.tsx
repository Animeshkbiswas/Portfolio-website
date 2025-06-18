import React, { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' || 
                           target.tagName === 'INPUT' ||
                           target.tagName === 'TEXTAREA' ||
                           target.getAttribute('role') === 'button' ||
                           target.classList.contains('cursor-pointer') ||
                           getComputedStyle(target).cursor === 'pointer';
      setIsHovering(isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-3 h-3 bg-white rounded-full transition-all duration-150 ${
            isClicking ? 'scale-75' : 'scale-100'
          } ${isHovering ? 'opacity-80' : 'opacity-100'}`}
        />
      </div>

      {/* Following ring */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`border-2 border-white rounded-full transition-all duration-300 ${
            isHovering ? 'w-12 h-12 border-opacity-60' : 'w-8 h-8 border-opacity-30'
          } ${isClicking ? 'scale-150' : 'scale-100'}`}
        />
      </div>

      {/* Ripple effect on click */}
      {isClicking && (
        <div
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-16 h-16 border-2 border-primary rounded-full animate-ping opacity-50" />
        </div>
      )}
    </>
  );
};

export default CursorFollower;