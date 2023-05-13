import Loading from "@/scenes/Home/Loading";
import { getPopularGames, getGenres } from "@/services/rawg/rawg.service.js";
import { getChatGPTdata } from "@/services/chatgpt/chatgpt.service.js";

window.getPopularGames = getPopularGames;
window.getGenres = getGenres;
window.getChatGPTdata = getChatGPTdata;

function App() {
  return (
    <div className="min-h-screen bg-carbon-fiber-2 font-poppins">
      key: {import.meta.env.VITE_RAWG_API_KEY}
      <Loading />
    </div>
  );
}

export default App;
