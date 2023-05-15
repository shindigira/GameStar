// import { ReactComponent as ReactLogo } from "@/assets/react.svg";
import ControllerImage from "@/assets/images/controller.png";
// bg-gradient-to-br from-slate-950 to-slate-700
function Loading({
  primaryMessage = "Loading...",
  secondaryMessage = "",
  iconSize = 20,
  icon = ControllerImage,
  animation = "animate-bounce",
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.4)] p-3 text-slate-500">
      <div
        className={`flex h-16 w-16 ${animation} flex-col items-center justify-center`}
      >
        <img src={icon} alt="loading icon" />
      </div>
      {primaryMessage && (
        <h1 className="mb-10 mt-10 animate-pulse text-center text-5xl font-bold">
          {primaryMessage}
        </h1>
      )}
      {secondaryMessage && (
        <h2 className="mb-10 animate-pulse text-center text-2xl font-bold">
          {secondaryMessage}
        </h2>
      )}
    </div>
  );
}

export default Loading;
