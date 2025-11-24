import React from 'react';

interface StoryTimelineProps {
  onContinue: () => void;
}

const storySteps = [
  {
    icon: '👀',
    title: 'The first time I saw you… (15 May 2023)',
    description: 'You were asking for directions to the metro station.',
  },
  {
    icon: '😊',
    title: 'The way you smile…',
    description: 'It lights up everything around you. It\'s my 2nd favorite thing in the world.',
  },
  {
    icon: '🌟',
    title: 'How you make me feel good…',
    description: 'I can be myself around you, and that means something to me',
  },
  {
    icon: '💭',
    title: 'So I thought…',
    description: 'Let\'s meet when I come to Delhi..',
  },
];

export function StoryTimeline({ onContinue }: StoryTimelineProps) {
  return (
    <div className="min-h-screen py-20 px-4 relative z-10 flex flex-col items-center justify-center">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gradient-romantic animate-fade-in-up">
        Our Story ✨
      </h2>

      <div className="max-w-2xl w-full">
        {/* Timeline */}
        <div className="space-y-12">
          {storySteps.map((step, index) => (
            <div
              key={index}
              className={`animate-fade-in-up opacity-0`}
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex gap-6 items-start">
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-red-400 flex items-center justify-center text-white text-xl shadow-lg">
                    {step.icon}
                  </div>
                  {index < storySteps.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-rose-300 to-transparent mt-2" />
                  )}
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-rose-600 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Continue button */}
      <button
        onClick={onContinue}
        className="mt-16 px-8 py-4 bg-gradient-to-r from-rose-400 to-red-400 text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl animate-fade-in-up"
        style={{ animationDelay: '0.6s' }}
      >
        <span className="flex items-center gap-2">
          Continue to My Question 💖
        </span>
      </button>

      {/* Decorative elements */}
      <div className="absolute top-20 left-5 text-4xl opacity-40 animate-float">
        ♥
      </div>
      <div className="absolute bottom-20 right-5 text-3xl opacity-40 animate-float-delayed-2">
        ✨
      </div>
    </div>
  );
}
