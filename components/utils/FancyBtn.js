import React from "react";
import { Btn } from "..";

const FancyBtn = ({ text, className, icon, onClick }) => {
  return (
    <Btn onClick={onClick}>
      <div
        class={`relative px-5 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 rounded-md shadow-inner group ${className}`}
      >
        <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
        <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
        <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#282F38] shadow-sm rounded-md opacity-0 group-hover:opacity-100"></span>
        <span class="capitalize relative transition-colors duration-300 delay-200 group-hover:text-[white] ease flex items-center">
          {text} {icon}
        </span>
      </div>
    </Btn>
  );
};

export default FancyBtn;
