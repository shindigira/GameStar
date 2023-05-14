import React, { useRef, useEffect } from "react";

const Hero = ({ game }) => {
  const gameName = game?.name || "";
  const ref = useRef();
  useEffect(() => {
    ref.current.style.backgroundImage = `url('${game.background_image}')`;
  }, [gameName]);
  return (
    <div
      ref={ref}
      className={
        "relative h-full w-full bg-cover bg-center bg-no-repeat px-10 py-36"
      }
    >
      {/* Darken image */}
      <div className="absolute left-0 top-0 h-full w-full bg-[rgba(0,0,0,0.6)]"></div>
      {/* Linearly darken the bottom more */}
      <div className="absolute bottom-0 left-0 h-full w-full bg-darken-bottom"></div>

      <div className="relative flex flex-col items-center justify-center text-white desktop:flex-row">
        <div className="desktop:width-[55%] relative w-full px-12">
          <h2 className="text-5xl">{gameName}</h2>
          <p className="mt-7 text-lg">asdkfjl;</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
