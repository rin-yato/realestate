import React from "react";

function YatoInput({ type, placeHolder, className }) {
  return (
    <div>
      <input
        type={type}
        placeHolder={placeHolder}
        className={`py-2 px-4 rounded-full focus:outline-none ${className}`}
      />
    </div>
  );
}

export default YatoInput;
