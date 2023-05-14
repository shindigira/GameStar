import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// Components
import Loading from "@/components/Loading";
import HeroContainer from "@/scenes/Hero/HeroContainer";

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
        console.log("recent games:", results);
        setGame(getRandomGame(results || []));
      }
    },
  });

  return (
    <div className="app bg-gray-900">
      {/* <div className="border-8 border-red-600 py-5">test navbar</div> */}
      {isLoadingRecent && <Loading />}
      <HeroContainer game={game} />
      <div className="bg-gray-900 text-white">
        asdklfjlasdjklfasdk asdklfkladsjkad
      </div>
      <div className="bg-gray-900 text-white">
        asdklfjlasdjklfasdk asdklfkladsjkad
      </div>
      <div className="bg-gray-900 text-white">
        asdklfjlasdjklfasdk asdklfkladsjkad
      </div>
      <div className="bg-gray-900 text-white">
        asdklfjlasdjklfasdk asdklfkladsjkad
      </div>
    </div>
  );
}

export default App;
