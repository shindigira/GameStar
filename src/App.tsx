import React, { useState } from "react";
import Loading from "@/components/Loading";
import Hero from "@/scenes/Hero/Hero";
import {
  getPopularGames,
  getGenres,
  getRecentGames,
} from "@/services/rawg/rawg.service.js";
import { getChatGPTdata } from "@/services/chatgpt/chatgpt.service.js";
import { useQuery } from "@tanstack/react-query";

import { getRandomGame } from "@/utility/helpers";
// window.getPopularGames = getPopularGames;
// window.getGenres = getGenres;
// window.getChatGPTdata = getChatGPTdata;

function App() {
  /////* Initialize */////
  const [game, setGame] = useState(null);
  /////* 1. Fetches latest games */////
  const init = "initialize";
  const {
    isLoading: isLoadingRecent,
    error: errorRecent,
    data: dataRecent,
  } = useQuery(["recentGames", init], getRecentGames, {
    enabled: Boolean(init),
    onSuccess: (res) => {
      /////* 2. If no game in the Hero section, select a random game */////
      if (!game) {
        const results = res.results;
        setGame(getRandomGame(results || []));
      }
    },
  });

  return (
    <div className="app bg-carbon-fiber-2">
      <div className="border-8 border-red-600 py-5">test navbar</div>
      {isLoadingRecent && <Loading />}
      <div className="mx-auto h-full max-w-[133rem]">
        {game && <Hero game={game} />}
      </div>
      <div className="bg-carbon-fiber-2 text-white">
        asdklfjlasdjklfasdk asdklfkladsjkad
      </div>
    </div>
  );
}

export default App;
