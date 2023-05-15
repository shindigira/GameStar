import React from "react";

import HTitleSecondary from "@/shared/HTitleSecondary";
import MetacriticIcon from "@/assets/images/metacritic.png";

// Hover Animation
// transition duration-300 ease-in-out hover:scale-105 hover:brightness-50 hover:filter

const GameCard = ({ game, setGame }) => {
  return (
    <div
      className="min-h-[20rem] w-full max-w-sm rounded-lg border border-component-border-color bg-component-background-color font-inter shadow"
      tabIndex={0}
    >
      {/* Card Top */}
      <div className="relative h-2/3 overflow-hidden">
        <img
          className="h-full w-full rounded-t-lg object-cover"
          src={game.background_image}
          alt={`${game.name}`}
        />
        {/* Metacritic Rating */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1.5">
          <div className="h-[24px] w-[24px]">
            <img src={MetacriticIcon} alt="" />
          </div>
          <span className="text-base font-normal text-paragraph-color">
            {game.metacritic || game.rating}
          </span>
        </div>
      </div>
      {/* Card Bottom */}
      <div className="mt-auto flex h-1/3 flex-col justify-between px-3 py-1">
        {/* Game Name and Metacritic Rating Container */}
        <div className="flex flex-row items-center justify-between">
          {/* Game Name */}
          <HTitleSecondary>{game.name}</HTitleSecondary>
        </div>
        <button
          className="w-full border-2 border-red-500 py-5"
          onClick={() => setGame(game)}
        ></button>
      </div>
    </div>
  );
};

export default GameCard;
