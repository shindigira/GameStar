import React from "react";

const SectionContainer = ({ children, className }) => {
  return (
    <div className={`min-h-5/6 mx-auto max-w-[133rem] ${className}`}>
      {children}
    </div>
  );
};

export default SectionContainer;
