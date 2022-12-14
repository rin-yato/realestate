import React from "react";

function YatoButton({ children, className }) {
  return (
    <div>
      <button
        className={`flex items-center justify-center w-full active:scale-90 duration-200 rounded-2xl px-4 py-2 ${className}`}
      >
        {children}
      </button>
    </div>
  );
}

export default YatoButton;
