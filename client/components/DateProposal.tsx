import React, { useRef, useState } from 'react';

interface DateProposalProps {
  onYes: () => void;
}

export function DateProposal({ onYes }: DateProposalProps) {
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [clicks, setClicks] = useState(0);

  const handleNoHover = () => {
    if (!noButtonRef.current) return;

    // Generate random position
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;

    setNoPosition({ x: randomX, y: randomY });
    setClicks(clicks + 1);
  };

  const handleNoClick = () => {
    handleNoHover();
  };

  // Messages that appear as user clicks NO
  const messages = [
    "Are you sure? 🥺",
    "Think about it... 💭",
    "Come on, just one date? 💕",
    "You're breaking my heart! 💔",
    "Okay, I'll just keep trying... 😄",
  ];

  return (
    <div className="min-h-screen py-20 px-4 relative z-10 flex flex-col items-center justify-center">
      {/* Main question */}
      <div className="mb-12 text-center animate-fade-in-up">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          <span className="text-gradient-romantic">
            Will you go on a date with me , just you and me?
          </span>
        </h1>
        <div className="text-6xl animate-heart-beat inline-block">
          ❤️
        </div>
      </div>

      {/* Funny message when clicking NO */}
      {clicks > 0 && clicks < messages.length && (
        <p className="text-2xl text-rose-600 mb-8 animate-fade-in-up">
          {messages[clicks - 1]}
        </p>
      )}

      {clicks >= messages.length && (
        <p className="text-2xl text-rose-600 mb-8 animate-fade-in-up">
          Babu please HAAN bol do..🥺
        </p>
      )}

      {/* Buttons container */}
      <div className="relative flex gap-8 justify-center items-center mt-12 flex-wrap">
        {/* YES button */}
        <button
          onClick={onYes}
          className="btn-yes relative z-20"
        >
          YES! 🎉
        </button>

        {/* NO button - playful and evasive */}
        <button
          ref={noButtonRef}
          onClick={handleNoClick}
          onMouseEnter={handleNoHover}
          onTouchStart={handleNoHover}
          className="btn-no transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
          }}
        >
          No...
        </button>
      </div>

      {/* Decorative hearts and sparkles */}
      <div className="absolute top-20 left-10 text-5xl opacity-50 animate-float">
        ♥
      </div>
      <div className="absolute bottom-32 right-10 text-4xl opacity-50 animate-float-delayed">
        ✨
      </div>
      <div className="absolute top-1/2 left-20 text-3xl opacity-40 animate-bounce-gentle">
        ♥
      </div>
      <div className="absolute top-1/3 right-20 text-4xl opacity-40 animate-float-delayed-2">
        ✨
      </div>

      {/* Hint text */}
      <p className="text-rose-500 mt-12 text-center text-sm opacity-70 animate-fade-in">
        NO button NHI dabaa sakti... TRY KRO AAP!, hehehe
      </p>
    </div>
  );
}
