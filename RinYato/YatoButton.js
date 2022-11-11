import React from "react";

function YatoButton({ children, onClick, className }) {
  const onClickHandler = () => {
    onClick();
  };
  return (
    <div>
      <button
        onClick={onClickHandler}
        className={`flex items-center justify-center w-full active:scale-90 duration-200 bg-slate-100 rounded-2xl px-4 py-2 ${className}`}
      >
        {children}
      </button>
    </div>
  );
}

export default YatoButton;
