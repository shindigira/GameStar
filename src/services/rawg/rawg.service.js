import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_RAWG_BASE_URL || "https://api.rawg.io/api";

export const getGenres = async () => {
  return await axios.get(
    `${BASE_URL}/genres?key=${import.meta.env.VITE_RAWG_API_KEY}`
  );
};

export const getPopularGames = async () => {
  return await axios.get(
    `${BASE_URL}/collections/lists/popular?key=${
      import.meta.env.VITE_RAWG_API_KEY
    }`
  );
};
