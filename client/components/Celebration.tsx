import React, { useEffect, useState } from 'react';

interface Confetti {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
}

export function Celebration() {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    const generateConfetti = () => {
      const emojis = ['🎉', '✨', '💖', '🌹', '💕', '⭐', '🎊', '💝', '🦋', '🌸'];
      const newConfetti: Confetti[] = [];
      
      for (let i = 0; i < 40; i++) {
        newConfetti.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 0.5,
          duration: 2 + Math.random() * 1,
          size: 16 + Math.random() * 24,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
        });
      }
      setConfetti(newConfetti);
    };

    generateConfetti();
  }, []);

  return (
    <div className="min-h-screen relative z-10 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Confetti falling */}
      {confetti.map((item) => (
        <div
          key={item.id}
          className="fixed pointer-events-none"
          style={{
            left: `${item.left}%`,
            top: '-50px',
            animation: `float ${item.duration}s linear forwards`,
            animationDelay: `${item.delay}s`,
            fontSize: `${item.size}px`,
          }}
        >
          {item.emoji}
        </div>
      ))}

      {/* Main celebration content */}
      <div className="text-center animate-scale-in max-w-2xl mx-auto">
        {/* Animated heart */}
        <div className="mb-8 inline-block">
          <div className="text-7xl animate-heart-beat" style={{ animationIterationCount: 'infinite' }}>
            💖
          </div>
        </div>

        {/* Success message */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="text-gradient-romantic">
            Yay!!!! Yipeee... 💕
          </span>
        </h1>

        {/* Secondary message */}
        <p className="text-2xl sm:text-3xl text-rose-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Satvik khush hua , you said YES!!
        </p>

        {/* Call to action */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl text-gray-800 mb-4">
            <span className="font-bold text-rose-600">Milte hai...</span> I'll choose the time and place and date(datesheet bhej dena, hehehehe), okay💖
          </p>
          <p className="text-lg text-rose-500">
            Ab Raha nhi jaa rha apse milne ke liye 🌹✨
          </p>
        </div>

        {/* Decorative flowers and hearts */}
        <div className="space-y-4 text-center mb-8">
          <div className="text-5xl animate-float inline-block mx-2">
            🌹
          </div>
          <div className="text-5xl animate-float-delayed inline-block mx-2">
            🌸
          </div>
          <div className="text-5xl animate-float-delayed-2 inline-block mx-2">
            💐
          </div>
        </div>

        {/* Glow effect hearts */}
        <div className="mt-12 space-y-2">
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="text-4xl animate-bounce-gentle opacity-70">♥</span>
            <span className="text-4xl animate-bounce-gentle opacity-70" style={{ animationDelay: '0.2s' }}>✨</span>
            <span className="text-4xl animate-bounce-gentle opacity-70" style={{ animationDelay: '0.4s' }}>♥</span>
            <span className="text-4xl animate-bounce-gentle opacity-70" style={{ animationDelay: '0.6s' }}>✨</span>
            <span className="text-4xl animate-bounce-gentle opacity-70" style={{ animationDelay: '0.8s' }}>♥</span>
          </div>
        </div>
      </div>

      {/* Floating background elements */}
      <div className="absolute top-10 left-5 text-6xl opacity-30 animate-float">
        🌹
      </div>
      <div className="absolute bottom-20 right-5 text-5xl opacity-30 animate-float-delayed-2">
        ✨
      </div>
      <div className="absolute top-1/2 left-10 text-5xl opacity-20 animate-bounce-gentle">
        💖
      </div>
      <div className="absolute bottom-1/3 right-10 text-6xl opacity-20 animate-float">
        🌸
      </div>
    </div>
  );
}
