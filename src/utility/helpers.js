import { sample } from "lodash";

export function getRandomGame(results) {
  const randomResult = sample(results);
  return randomResult;
}

export function getRandomBG(game) {
  const randomScreenshot =
    sample(game.short_screenshots)?.image || game.background_image;
  return randomScreenshot;
}

// Delaying requests for debug purposes
export function delay(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
