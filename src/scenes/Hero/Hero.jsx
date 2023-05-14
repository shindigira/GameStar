import React, { useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getChatGPTdata } from "@/services/chatgpt/chatgpt.service.js";

import Loading from "@/components/Loading";

import ControllerImage2 from "@/assets/images/controller2.png";
import ChatGPTIcon from "@/assets/images/chatgpt-icon.svg";

const Hero = ({ game }) => {
  /////* 1. Sets the Background Image of the game */////
  const gameName = game?.name || "";
  const parentRef = useRef();
  useEffect(() => {
    // BUG: Tailwind bug -- doesn't like external URL's in the 'bg-[url]' class, so this is a workaround.
    if (gameName) {
      parentRef.current.style.backgroundImage = `url('${game.background_image}')`;
    }
  }, [gameName]);

  /////* 2. Makes a request to CHATGPT for a game summary */////
  const {
    isLoading: isLoadingChatGPTstring,
    error: errorChatGPTstring,
    data: dataChatGPTstring,
  } = useQuery(["chatGPT", gameName], () => getChatGPTdata(gameName), {
    enabled: Boolean(gameName),
  });

  return (
    <div
      ref={parentRef}
      className={"relative h-full bg-cover bg-center bg-no-repeat px-10 py-36"}
    >
      {/* Darken image */}
      <div className="absolute left-0 top-0 h-full w-full bg-[rgba(0,0,0,0.4)]"></div>
      {/* Linearly darken the bottom more */}
      <div className="absolute bottom-0 left-0 h-full w-full bg-darken-bottom"></div>

      <div className="relative flex flex-col items-center justify-center text-white desktop:flex-row">
        <div className="relative w-full px-12 desktop:w-[55%]">
          <h2 className="mb-7 text-5xl">{gameName}</h2>

          {isLoadingChatGPTstring && (
            <Loading
              primaryMessage={""}
              secondaryMessage={"Loading ChatGPT..."}
              icon={ChatGPTIcon}
            />
          )}
          {dataChatGPTstring && <p className="text-lg">{dataChatGPTstring}</p>}
        </div>
        <div className="desktop:w-[35%] ">asdf</div>
      </div>
    </div>
  );
};

export default Hero;
