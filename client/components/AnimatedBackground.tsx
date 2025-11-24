import React, { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  type: 'heart' | 'sparkle';
}

export function AnimatedBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = [];
      for (let i = 0; i < 20; i++) {
        newElements.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 3 + Math.random() * 2,
          size: 8 + Math.random() * 12,
          type: Math.random() > 0.5 ? 'heart' : 'sparkle',
        });
      }
      setElements(newElements);
    };
    generateElements();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-romantic" />
      
      {/* Floating elements */}
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.left}%`,
            bottom: '-50px',
            animation: `float ${element.duration}s ease-in-out infinite`,
            animationDelay: `${element.delay}s`,
            opacity: 0.6,
          }}
        >
          {element.type === 'heart' ? (
            <div
              className="text-rose-300 animate-bounce-gentle"
              style={{
                fontSize: `${element.size}px`,
                filter: 'drop-shadow(0 0 8px rgba(244, 63, 94, 0.6))',
              }}
            >
              ♥
            </div>
          ) : (
            <div
              className="text-rose-200 animate-pulse-glow"
              style={{
                fontSize: `${element.size}px`,
              }}
            >
              ✨
            </div>
          )}
        </div>
      ))}

      {/* Subtle glow effect */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '1s' }} />
    </div>
  );
}
