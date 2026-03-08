import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const visible = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleEnter = () => {
      visible.current = true;
      if (cursorRef.current) cursorRef.current.style.opacity = "0.7";
    };

    const handleLeave = () => {
      visible.current = false;
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeave);

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.08;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.08;

      if (cursorRef.current && visible.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-10 h-10 rounded-full pointer-events-none z-50 blur-md
      bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mix-blend-screen
      transition-opacity duration-300 opacity-0"
    ></div>
  );
};

export default Cursor;