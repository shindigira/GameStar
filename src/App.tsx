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
  // Initialize -
  const init = "initialize";
  const {
    isLoading: isLoadingRecent,
    error: errorRecent,
    data: dataRecent,
  } = useQuery(["recentGames", init], getRecentGames, {
    enabled: Boolean(init),
  });

  console.log(dataRecent);
  const randomRecentGame = dataRecent ? getRandomGame(dataRecent) : null;
  return (
    <div className="app bg-carbon-fiber-2 font-poppins">
      <div className="mx-auto h-full w-full max-w-[133rem] ">
        {isLoadingRecent && <Loading />}
        {randomRecentGame && <Hero game={randomRecentGame} />}
      </div>
      <div className="h-full bg-carbon-fiber-2 text-white">
        asdklfjlasdjklfasdk asdklfkladsjkad
      </div>
    </div>
  );
}

export default App;
