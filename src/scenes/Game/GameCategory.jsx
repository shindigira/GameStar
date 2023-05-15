import React from "react";

import { useQuery } from "@tanstack/react-query";

import SectionContainer from "@/components/SectionContainer";
import GameCard from "@/scenes/Game/GameCard";
import HTitlePrimary from "@/shared/HTitlePrimary";

const GameCategory = ({
  setGame,
  gameCategoryName = "Game Category",
  axiosRequest,
  gcIndex,
}) => {
  const { isLoading, error, data } = useQuery(
    [axiosRequest.name],
    ({ signal }) => axiosRequest(signal),
    {
      // enabled: gamesPre,
      refetchOnWindowFocus: false,
      onSuccess: (res) => {
        // console.log("chatgpt response:", res);
      },
    },
  );

  return (
    <SectionContainer className={`${gcIndex ? "mt-5" : ""}`}>
      <div className="mx-8">
        <HTitlePrimary>{gameCategoryName}</HTitlePrimary>
        <div className=" mt-5 grid gap-4 grid-auto-fit-[13rem]">
          {data &&
            data.results.map((game) => {
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
