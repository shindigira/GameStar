import { sample } from "lodash";

export function getRandomGame(results) {
  let randomResult = sample(results);
  if (randomResult.name === "Lust Academy - Season 2") {
    randomResult = getRandomGame(results);
  }

  return randomResult;
}
