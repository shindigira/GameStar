import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_RAWG_BASE_URL || "https://api.rawg.io/api";

export const getGenres = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/genres?key=${import.meta.env.VITE_RAWG_API_KEY}`,
  );
  return data;
};

export const getPopularGames = async () => {
  return await axios.get(
    `${BASE_URL}/collections/lists/popular?key=${
      import.meta.env.VITE_RAWG_API_KEY
    }`,
  );
};

export const getRecentGames = async () => {
  // await delay();
  const { data } = await axios.get(
    `${BASE_URL}/games/lists/recent-games?discover=true&ordering=-added&page_size=10&page=1&key=${
      import.meta.env.VITE_RAWG_API_KEY
    }`,
  );
  return data;
  // https://rawg.io/api/games/lists/recent-games?discover=true&ordering=-added&page_size=40&page=1&key=c542e67aec3a4340908f9de9e86038af
};

// Delaying requests for debug purposes
function delay(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
