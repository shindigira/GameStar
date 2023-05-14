import React from "react";
import HeroMain from "@/scenes/Hero/HeroMain";

const HeroContainer = ({ game }) => {
  return (
    <div className="mx-auto min-h-full max-w-[133rem]">
      {game && <HeroMain game={game} />}
    </div>
  );
};

export default HeroContainer;
