import React from "react";

const Button = () => {
  return (
    <button
      className="group relative flex items-center overflow-hidden rounded-2xl border border-purple-500 bg-[#a370f0] px-5 pr-14 py-2.5 text-white text-base font-semibold tracking-wide shadow-[inset_0_0_1.6em_-0.6em_#714da6] transition-all duration-300 cursor-pointer leading-none"
    >
      <span>Get started</span>

      <span
        className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md transition-all duration-300 group-hover:w-[calc(100%-8px)]"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 text-purple-600 transition-transform duration-300 group-hover:translate-x-1"
          fill="currentColor"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
        </svg>
      </span>
    </button>
  );
};

export default Button;