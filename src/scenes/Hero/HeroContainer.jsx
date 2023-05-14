import React from "react";
import HeroMain from "@/scenes/Hero/HeroMain";

const HeroContainer = ({ game }) => {
  return (
    <div className="min-h-3/4 mx-auto max-w-[133rem]">
      {game && <HeroMain game={game} />}
    </div>
  );
};

export default HeroContainer;
