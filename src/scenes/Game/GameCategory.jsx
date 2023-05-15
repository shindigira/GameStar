import React from "react";

import SectionContainer from "@/components/SectionContainer";
import GameCard from "@/scenes/Game/GameCard";
import HTitlePrimary from "@/shared/HTitlePrimary";

const GameCategory = ({
  games: gamesPre,
  setGame,
  gameCategoryName = "Game Category",
}) => {
  const games = gamesPre.filter(
    (game) => game.name !== "Lust Academy - Season 2",
  );
  return (
    <SectionContainer>
      <div className="mx-8">
        <HTitlePrimary>{gameCategoryName}</HTitlePrimary>
        <div className=" mt-5 grid gap-4 grid-auto-fit-[15rem]">
          {games.map((game) => {
            return (
              <div key={`${game.name}`} className="flex justify-center">
                <GameCard game={game} setGame={setGame} />
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default GameCategory;
