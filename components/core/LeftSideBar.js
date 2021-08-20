import React, { useEffect, useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Btn, DefaultLeftSide, EditingLeftSide } from "..";

const LeftSideBar = (props) => {
  let { showLeftBar, setShowLeftBar, chosenElement, user } = props;

  return (
    <div
      className={` ${
        showLeftBar ? "w-[36%]" : "w-0"
      } h-full bg-[#282F38] shadow relative border-r border-[#888] text-white`}
    >
      {chosenElement ? (
        <EditingLeftSide {...props} />
      ) : (
        <DefaultLeftSide {...props} />
      )}
      <div className="absolute top-0 right-[-21.5px] h-full flex items-center justify-center z-10">
        <Btn className="tab" onClick={() => setShowLeftBar(!showLeftBar)}>
          <button className="bg-[#282F38] w-[21px] h-[95px] tab relative p-[1px]">
            <div className="bg-[#282F38] tab h-full w-full flex items-center justify-center">
              <FiChevronLeft
                className="text-[#fafafa] transition-500"
                style={{
                  transform: `rotate(${showLeftBar ? "0" : "180"}deg)`,
                }}
              />
            </div>
          </button>
        </Btn>
      </div>
    </div>
  );
};

export default LeftSideBar;
