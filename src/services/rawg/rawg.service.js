import axios from "axios";
import { delay } from "@/utility/helpers";

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

// Last Week
export const getRecentGames = async (signal) => {
  // await delay();
  const { data } = await axios.get(
    `${BASE_URL}/games/lists/recent-games?discover=true&ordering=-added&page_size=10&page=1&key=${
      import.meta.env.VITE_RAWG_API_KEY
    }`,
    {
      signal,
    },
  );
  return data;
};

// Last 30 days
export const getlast30DaysGames = async (signal) => {
  // await delay();
  const { data } = await axios.get(
    `${BASE_URL}/games/lists/recent-games-past?discover=true&key=${
      import.meta.env.VITE_RAWG_API_KEY
    }&ordering=-added&page=1&page_size=10`,
    {
      signal,
    },
  );
  return data;
};

// Best games of all time
export const getMostPopular = async (signal) => {
  // await delay();
  const { data } = await axios.get(
    `${BASE_URL}/games/lists/popular?discover=true&key=${
      import.meta.env.VITE_RAWG_API_KEY
    }&page=1&page_size=10`,
    {
      signal,
    },
  );
  return data;
};
