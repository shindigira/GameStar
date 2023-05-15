import React from "react";

const IconContainer = ({ children, className }) => {
  return (
    <div
      className={`flex items-center gap-1.5 rounded-md bg-slate-300 bg-opacity-50 p-1 ${className}`}
    >
      {children}
    </div>
  );
};

export default IconContainer;
