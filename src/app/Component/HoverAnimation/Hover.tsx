// Updated DynamicAnimatedText for hover effect globally
import React, { useState, useEffect } from 'react';

interface DynamicAnimatedTextProps {
  text: string;
}

const DynamicAnimatedText: React.FC<DynamicAnimatedTextProps> = ({ text }) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [animationTriggered, setAnimationTriggered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    if (!animationTriggered) {
      setIsAnimating(true);
      setAnimationTriggered(true);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setAnimationTriggered(false);
      }, text?.length ? text.length * 50 + 1000 : 1000);

      return () => clearTimeout(timer);
    }
  }, [isAnimating, text?.length]);

  if (!text) return null;

  return (
    <span
      className="dynamic-text"
      onMouseEnter={handleMouseEnter}
      style={{
        display: 'inline-block',
        transition: 'transform 0.5s ease',
      }}
    >
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`letter ${isAnimating ? 'animate' : ''}`}
          style={{
            animationDelay: `${index * 50}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      <style jsx>{`
        .letter {
          display: inline-block;
          transition: transform 0.5s ease;
        }

        .letter.animate {
          animation: letterExit 1s ease forwards;
        }

        @keyframes letterExit {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-120%);
            opacity: 0;
          }
          51% {
            transform: translateY(120%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .dynamic-text:hover .letter {
          animation: letterExit 1s ease forwards;
        }
      `}</style>
    </span>
  );
};

export default DynamicAnimatedText;
