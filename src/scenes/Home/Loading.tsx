// import { ReactComponent as ReactLogo } from "@/assets/react.svg";
import ControllerImage from "@/assets/images/controller.png";

function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#394F68] to-[#183B7E] text-slate-500">
      <div className="flex h-24 w-24 animate-bounce flex-col items-center justify-center text-yellow-500">
        <img src={ControllerImage} alt="" />
      </div>
      <h1 className="mb-10 animate-pulse text-center text-6xl font-bold">
        First Message
      </h1>
      <h2 className="mb-10 animate-pulse text-center text-2xl font-bold">
        Second Message
      </h2>
    </div>
  );
}

export default Loading;
