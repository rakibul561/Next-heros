'use client';

import React, { useState, useEffect } from "react";

const MouseTrail: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="mouse-trail"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <style jsx>{`
        .mouse-trail {
          position: fixed;
          width: 40px;
          height: 40px;
         background: radial-gradient(circle, rgba(255, 99, 71, 0.8) 0%, rgba(255, 165, 0, 0.4) 60%, rgba(255, 255, 255, 0) 100%);
          border-radius: 50%;
          pointer-events: none; /* Mouse pointer won't be blocked */
          transform: translate(-50%, -50%);
          animation: pulse 1.5s infinite ease-in-out;
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default MouseTrail;
