import React from "react";
import MetacriticIcon from "@/assets/images/metacritic.png";

// Hover Animation
// transition duration-300 ease-in-out hover:scale-105 hover:brightness-50 hover:filter

const GameCard = ({ game }) => {
  return (
    <div className="max-w-sm rounded-lg border border-component-border-color bg-component-background-color font-inter shadow">
      <div className="overflow-hidden">
        <img
          className="h-auto rounded-t-lg"
          src={game.background_image}
          alt={`${game.name}`}
        />
      </div>

      <div className="p-3">
        {/* Game Name and Metacritic Rating Container */}
        <div className="flex flex-row items-center justify-between">
          {/* Game Name */}
          <h5 className="text-xl font-medium text-header-color">{game.name}</h5>

          {/* Metacritic Rating */}
          <div className="flex items-center gap-1.5">
            <div className="h-[24px] w-[24px]">
              <img src={MetacriticIcon} alt="" />
            </div>
            <span className="text-base font-normal text-paragraph-color">
              {game.metacritic || game.rating}
            </span>
          </div>
        </div>
        <p className="text-paragraph-color">adsf</p>
      </div>
    </div>
  );
};

export default GameCard;
