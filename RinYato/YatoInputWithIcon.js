import React from "react";

function YatoInputWithIcon({ type, placeHolder, className, children }) {
  return (
    <div className={`rounded-full flex p-1  ${className}`}>
      <input
        type={type}
        placeHolder={placeHolder}
        className={`py-2 px-4 rounded-full focus:outline-none bg-transparent w-full`}
      />
      {children}
    </div>
  );
}

export default YatoInputWithIcon;
