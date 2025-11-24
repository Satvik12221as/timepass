import React from 'react';

interface LandingProps {
  onContinue: () => void;
}

export function Landing({ onContinue }: LandingProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
      {/* Animated hearts intro */}
      <div className="mb-12 flex gap-4 justify-center flex-wrap max-w-md">
        <span className="text-5xl animate-float" style={{ animationDelay: '0s' }}>
          ♥
        </span>
        <span className="text-4xl animate-float-delayed" style={{ animationDelay: '0.5s' }}>
          ✨
        </span>
        <span className="text-5xl animate-float-delayed-2" style={{ animationDelay: '1s' }}>
          ♥
        </span>
      </div>

      {/* Main heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in-up">
        <span className="text-gradient-romantic">
          Hello!! SHREYA... I made something special for you 💕
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-xl sm:text-2xl text-rose-600 text-center mb-12 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Because there's something I've been wanting to ask you...
      </p>

      {/* Scroll indicator */}
      <button
        onClick={onContinue}
        className="mt-8 px-8 py-4 bg-gradient-to-r from-rose-400 to-red-400 text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl animate-fade-in-up"
        style={{ animationDelay: '0.4s' }}
      >
        <span className="flex items-center gap-2">
          Let me see.......
        </span>
      </button>

      {/* Decorative hearts at bottom */}
      <div className="absolute bottom-20 left-10 text-3xl animate-bounce-gentle opacity-70">
        ♥
      </div>
      <div className="absolute bottom-32 right-10 text-2xl animate-bounce-gentle opacity-60" style={{ animationDelay: '0.5s' }}>
        ✨
      </div>
      <div className="absolute top-32 right-20 text-4xl animate-float opacity-50" style={{ animationDelay: '1s' }}>
        ♥
      </div>
    </div>
  );
}
