import React from "react";

const CallOutSummary = ({
  primaryMessage = "Primary Message",
  secondaryMessage = "Secondary Message",
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-md border-l-4 border-component-border-color bg-component-background-color bg-opacity-70 py-3 pl-4 pr-3 font-inter">
      <div className="flex items-start text-white">
        <h4 className="text-lg font-semibold">{primaryMessage}</h4>
      </div>
      <p className="text-md mt-2 overflow-y-auto text-white ">
        {secondaryMessage}
      </p>
    </div>
  );
};

export default CallOutSummary;
