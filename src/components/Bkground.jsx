import React, { useState, useEffect, useRef } from "react";

const noBoxes = 120;

const Bkground = () => {
  const boxes = Array(noBoxes).fill("");
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const boxRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const maxDistance = 80;

  return (
    <div className="fixed top-0 left-0 w-full min-h-screen -z-10 bg-black grid grid-cols-6 md:grid-cols-12 gap-0 pointer-events-none">
      {boxes.map((_, index) => {
        return (
          <div
            key={index}
            ref={(el) => (boxRefs.current[index] = el)}
            className="w-full aspect-square border border-gray-700 bg-gray-800/30 transition-all"
            style={{
              boxShadow: (() => {
                const box = boxRefs.current[index];
                if (!box) return "0 0 0px rgba(0,0,0,0)";
                const rect = box.getBoundingClientRect();
                const boxCenterX = rect.left + rect.width / 2;
                const boxCenterY = rect.top + rect.height / 2;
                const dx = mousePos.x - boxCenterX;
                const dy = mousePos.y - boxCenterY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const glow = distance < maxDistance ? (1 - distance / maxDistance) * 25 : 0;
                return glow > 0
                  ? `0 0 ${glow}px ${glow / 2}px rgba(0,255,255,0.7)`
                  : "0 0 0px rgba(0,0,0,0)";
              })(),
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Bkground;