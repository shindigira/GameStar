import { sample } from "lodash";

export function getRandomGame(dataRecent) {
  const results = dataRecent.results;
  const randomResult =
    sample(results).name === "Lust Academy - Season 2"
      ? getRandomGame(dataRecent)
      : sample(results);

  return randomResult;
}
