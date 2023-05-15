import React from "react";
import HeroMain from "@/scenes/Hero/HeroMain";
import SectionContainer from "@/components/SectionContainer";

const HeroContainer = ({ game }) => {
  return (
    <SectionContainer>{game && <HeroMain game={game} />}</SectionContainer>
  );
};

export default HeroContainer;
