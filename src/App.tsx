import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// Components
import Loading from "@/components/Loading";
import HeroContainer from "@/scenes/Hero/HeroContainer";
import SectionContainer from "@/components/SectionContainer";
import GameCategory from "@/scenes/Game/GameCategory";

// Services
import {
  getPopularGames,
  getGenres,
  getRecentGames,
} from "@/services/rawg/rawg.service.js";

// Helpers
import { getRandomGame } from "@/utility/helpers";

function App() {
  /////* Initialize */////
  const [game, setGame] = useState(null);
  /////* 1. Fetches latest games */////
  const {
    isLoading: isLoadingRecent,
    error: errorRecent,
    data: dataRecent,
  } = useQuery([getRecentGames.name], getRecentGames, {
    enabled: Boolean(getRecentGames.name),
    refetchOnWindowFocus: false,
    onSuccess: (res) => {
      /////* 2. If no game in the Hero section, select a random game */////
      if (!game) {
        const results = res.results;
        console.log(results);
        setGame(getRandomGame(results || []));
      }
    },
  });

  const recentGames = dataRecent?.results || [];

  const isLoading = isLoadingRecent;

  return (
    <div className="app">
      {/* <div className="border-8 border-red-600 py-5">test navbar</div> */}
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <HeroContainer game={game} />
          <GameCategory games={recentGames} setGame={setGame} />
        </>
      )}

      {/* <div className="text-white">asdklfjlasdjklfasdk asdklfkladsjkad</div>
      <div className="text-white">asdklfjlasdjklfasdk asdklfkladsjkad</div>
      <div className="text-white">asdklfjlasdjklfasdk asdklfkladsjkad</div> */}
    </div>
  );
}

export default App;
