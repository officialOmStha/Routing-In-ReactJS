import React from "react";

const Bkground = () => {
  const boxes = Array(200).fill("");

  return (
    <div className="fixed top-0 left-0 w-full min-h-screen -z-10 bg-black 
                    grid grid-cols-10 md:grid-cols-20">
      {boxes.map((_, i) => (
        <div
          key={i}
          className="aspect-square border border-gray-700 bg-gray-800/30 glow-box"
        ></div>
      ))}
    </div>
  );
};

export default Bkground;