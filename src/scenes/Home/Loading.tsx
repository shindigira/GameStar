import { ReactComponent as ReactLogo } from "@/assets/react.svg";

function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#394F68] to-[#183B7E] text-slate-500">
      <div className="h-24 w-24 animate-bounce text-yellow-500" color="yellow">
        <ReactLogo />
      </div>
      <h1 className="mb-10 animate-pulse text-center text-6xl font-bold">
        First Message
      </h1>
      <h2 className="mb-10 animate-pulse text-center text-xl font-bold">
        Second Message
      </h2>
    </div>
  );
}

export default Loading;
