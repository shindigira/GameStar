// import { ReactComponent as ReactLogo } from "@/assets/react.svg";
import ControllerImage from "@/assets/images/controller.png";
// bg-gradient-to-br from-slate-950 to-slate-700
function Loading({
  primaryMessage = "Loading...",
  secondaryMessage = "",
  iconSize = 24,
  icon = ControllerImage,
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.4)] text-slate-500">
      <div className="flex h-20 w-20 animate-bounce flex-col items-center justify-center">
        <img src={icon} alt="" />
      </div>
      {primaryMessage && (
        <h1 className="mb-10 mt-10 animate-pulse text-center text-5xl font-bold">
          {primaryMessage}
        </h1>
      )}
      {secondaryMessage && (
        <h2 className="mb-10 animate-pulse text-center text-3xl font-bold">
          {secondaryMessage}
        </h2>
      )}
    </div>
  );
}

export default Loading;
