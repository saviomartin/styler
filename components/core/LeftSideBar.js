import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Btn } from "..";

const LeftSideBar = () => {
  return (
    <div className="w-[36%] h-full bg-[#fff] shadow relative border-r border-[#ddd]">
      Left
      <div className="absolute top-0 right-[-21px] h-full flex items-center justify-center">
        <Btn className="tab">
          <button className="bg-[#ddd] w-[21px] h-[95px] tab relative p-[1px]">
            <div className="bg-[#fff] tab h-full w-full flex items-center justify-center">
              <FiChevronLeft className="text-[#222]" />
            </div>
          </button>
        </Btn>
      </div>
    </div>
  );
};

export default LeftSideBar;
