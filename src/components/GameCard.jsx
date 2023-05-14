import React from "react";

const GameCard = ({ game }) => {
  return (
    <div className="max-w-sm rounded-lg border border-component-border-color bg-component-background-color shadow">
      <img className="rounded-t-lg" src={game.background_image} />
    </div>
  );
};

export default GameCard;
