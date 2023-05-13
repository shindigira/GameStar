import { beforeEach, describe, expect, test, vi } from "vitest";
import { getPopularGames } from "./rawg.service";
import axios from "axios";

vi.mock("axios");

describe("RAWG Service", () => {
  beforeEach(() => {
    axios.get.mockReset();
    axios.post.mockReset();
  });

  describe("Get Popular Games", () => {
    test("makes a GET request to get the popular games", async () => {
      await getPopularGames();

      expect(axios.get).toHaveBeenCalledWith(
        `${import.meta.env.VITE_RAWG_BASE_URL}/collections/lists/popular?key=${
          import.meta.env.VITE_RAWG_API_KEY
        }`
      );
    });
  });
});
