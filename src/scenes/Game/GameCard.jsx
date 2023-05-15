import React from "react";

import HTitleSecondary from "@/shared/HTitleSecondary";
import MetacriticIcon from "@/assets/images/metacritic.png";
import IconContainer from "@/components/IconContainer";

import AndroidIcon from "@/assets/images/android.svg";
import IOSIcon from "@/assets/images/ios.svg";
import NintendoIcon from "@/assets/images/nintendo.svg";
import PCIcon from "@/assets/images/pc.svg";
import PlaystationIcon from "@/assets/images/playstation.svg";
import XboxIcon from "@/assets/images/xbox.svg";

// Hover Animation
// transition duration-300 ease-in-out hover:scale-105 hover:brightness-50 hover:filter

const platformMap = {
  android: AndroidIcon,
  ios: IOSIcon,
  mac: IOSIcon,
  nintendo: NintendoIcon,
  pc: PCIcon,
  playstation: PlaystationIcon,
  xbox: XboxIcon,
};

const GameCard = ({ game, setGame, showButton = true }) => {
  function getPlatforms(game) {
    const platforms = !game.parent_platforms
      ? []
      : game.parent_platforms.map((obj) => obj.platform.slug);

    return platforms;
  }

  console.log(getPlatforms(game));
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
        <IconContainer className="absolute bottom-2 right-2">
          <div className="h-[24px] w-[24px]">
            <img src={MetacriticIcon} alt="" />
          </div>
          <span className="text-base font-normal text-slate-800">
            {game.metacritic || game.rating}
          </span>
        </IconContainer>
        {/* Platform Icons */}
        <IconContainer className="absolute left-2 top-2">
          {getPlatforms(game).map((platformName) => (
            <img
              key={platformName}
              src={platformMap[platformName]}
              alt={platformName + "icon"}
            />
          ))}
        </IconContainer>
      </div>

      {/* Card Bottom */}
      <div className="mt-auto flex h-1/3 flex-col justify-between px-3 py-1 text-paragraph-color">
        {/* Game Name and Metacritic Rating Container */}
        <div className="flex flex-row items-center justify-between">
          {/* Game Name */}
          <HTitleSecondary>{game.name}</HTitleSecondary>
        </div>
        <div>
          {/* <span className="inline-flex items-center justify-center rounded-full border-2 border-green-700 bg-green-200 px-1 py-1 text-green-500">
            <span className="text-xs font-semibold">8.5</span>
          </span> */}
        </div>

        {showButton && (
          <button
            className="w-full rounded-md border-2 border-[#0D766E] bg-green-200 py-2 font-semibold text-[#0D766E]"
            onClick={() => setGame(game)}
          >
            ChatGPT Summary
          </button>
        )}
      </div>
    </div>
  );
};

export default GameCard;
