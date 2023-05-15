import React, { useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getChatGPTdata } from "@/services/chatgpt/chatgpt.service.js";

import Loading from "@/components/Loading";
import GameCard from "@/scenes/Game/GameCard";
import CallOutSummary from "@/shared/CallOutSummary";

import ControllerImage2 from "@/assets/images/controller2.png";
import ChatGPTIcon from "@/assets/images/chatgpt-icon.svg";

import { getRandomBG } from "@/utility/helpers";

// Darken bottom of background Image
const darkGradient =
  "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.75) 80%, rgba(0, 0, 0, 1) 100%)";

const Hero = ({ game }) => {
  /////* 1. Sets the Background Image of the game */////
  const gameName = game?.name || "";
  const parentRef = useRef();
  useEffect(() => {
    // BUG: Tailwind bug -- doesn't like external URL's in the 'bg-[url]' class, so this is a workaround.
    if (gameName) {
      parentRef.current.style.backgroundImage = `${darkGradient}, url('${getRandomBG(
        game,
      )}')`;
    }
  }, [gameName]);

  /////* 2. Makes a request to CHATGPT for a game summary */////
  const {
    isLoading: isLoadingChatGPTstring,
    error: errorChatGPTstring,
    data: dataChatGPTstring,
  } = useQuery(
    ["chatGPT", gameName],
    ({ signal }) => getChatGPTdata(gameName, signal),
    {
      enabled: Boolean(gameName),
      refetchOnWindowFocus: false,
      onSuccess: (res) => {
        // console.log("chatgpt response:", res);
      },
    },
  );

  return (
    <div
      ref={parentRef}
      className={"mb-10 h-full bg-cover bg-center bg-no-repeat py-36"}
    >
      <div className="flex flex-col justify-center text-white desktop:flex-row">
        {/* game summary */}
        <div className="w-full px-12 desktop:w-[55%]">
          <h2 className="mb-7 text-5xl font-bold">{gameName}</h2>

          {isLoadingChatGPTstring && (
            <Loading
              primaryMessage={""}
              secondaryMessage={"Fetching ChatGPT Summary..."}
              icon={ChatGPTIcon}
              animation={"animate-bounce"}
            />
          )}
          {dataChatGPTstring && (
            <CallOutSummary
              primaryMessage={<ChatGPTHeader />}
              secondaryMessage={dataChatGPTstring}
            ></CallOutSummary>
          )}
        </div>
        {/* game card */}
        <div className="mt-8 flex w-full justify-center p-6 desktop:mt-0 desktop:w-[35%]">
          <div>
            <GameCard game={game} showButton={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

function ChatGPTHeader() {
  return (
    <div className="flex-start flex flex-row items-center gap-3">
      <div className="h-6 w-6">
        <img className="h-full w-full" src={ChatGPTIcon} />
      </div>
      <h4 className="text-lg font-semibold">ChatGPT Summary</h4>
    </div>
  );
}
