import React, { useState, useRef } from 'react';
import { Music, Volume2 } from 'lucide-react';

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Autoplay might be blocked, that's okay
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        playsInline
        crossOrigin="anonymous"
        src="https://assets.mixkit.co/active_storage/sfx/2747/2747-preview.mp3"
      />
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-rose-500" />
        ) : (
          <Music className="w-6 h-6 text-gray-400" />
        )}
      </button>
    </>
  );
}
