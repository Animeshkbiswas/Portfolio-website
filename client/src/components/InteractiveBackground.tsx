import React, { useEffect, useRef, useState, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const lastMouseMoveRef = useRef(Date.now());

  const PARTICLE_COUNT = 50;
  const MAX_DISTANCE = 150;

  // Initialize particles
  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    particlesRef.current = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        hue: Math.random() * 60 + 200, // Blue to purple range
      });
    }
  }, []);

  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    setIsMouseMoving(true);
    lastMouseMoveRef.current = Date.now();

    // Reset mouse moving state after 500ms
    setTimeout(() => {
      if (Date.now() - lastMouseMoveRef.current > 450) {
        setIsMouseMoving(false);
      }
    }, 500);
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas with a slight trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const particles = particlesRef.current;

    particles.forEach((particle, index) => {
      // Update particle position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

      // Mouse interaction
      if (isMouseMoving) {
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MAX_DISTANCE) {
          const force = (MAX_DISTANCE - distance) / MAX_DISTANCE;
          const angle = Math.atan2(dy, dx);
          
          // Attract particles to mouse
          particle.vx += Math.cos(angle) * force * 0.02;
          particle.vy += Math.sin(angle) * force * 0.02;
          
          // Increase opacity and size near mouse
          particle.opacity = Math.min(0.8, particle.opacity + force * 0.01);
          particle.size = Math.min(4, particle.size + force * 0.5);
        }
      } else {
        // Return to normal state
        particle.opacity = Math.max(0.1, particle.opacity - 0.005);
        particle.size = Math.max(1, particle.size - 0.02);
        particle.vx *= 0.98;
        particle.vy *= 0.98;
      }

      // Draw particle
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = `hsl(${particle.hue}, 70%, 60%)`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add glow effect
      ctx.shadowBlur = 10;
      ctx.shadowColor = `hsl(${particle.hue}, 70%, 60%)`;
      ctx.fill();
      ctx.restore();

      // Draw connections to nearby particles
      particles.slice(index + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 80) {
          ctx.save();
          ctx.globalAlpha = (80 - distance) / 80 * 0.2;
          ctx.strokeStyle = `hsl(${(particle.hue + otherParticle.hue) / 2}, 70%, 60%)`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
          ctx.restore();
        }
      });
    });

    // Draw mouse cursor effect
    if (isMouseMoving) {
      ctx.save();
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.beginPath();
      ctx.arc(mousePosition.x, mousePosition.y, 30, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.globalAlpha = 0.6;
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(mousePosition.x, mousePosition.y, 40, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [mousePosition, isMouseMoving]);

  // Setup canvas and event listeners
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    document.addEventListener('mousemove', handleMouseMove);

    // Start animation
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleMouseMove, animate, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(15,23,42,0.9) 100%)',
      }}
    />
  );
};

export default InteractiveBackground;