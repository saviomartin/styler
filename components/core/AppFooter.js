import React, { useState } from "react";
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import screenfull from "screenfull";
import Btn from "../utils/Btn";

const AppFooter = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    screenfull.toggle();
    setIsFullScreen(!isFullScreen);
  };
  return (
    <div className="absolute bottom-[15px] right-[15px] p-2 rounded-md bg-white shadow-xl z-10 flex items-center">
      <Btn href="https://github.com/saviomartin/styler">
        <div className="p-2 flex items-center">
          <FiGithub className="text-xl mr-1" />
          <span className="Inter">23</span>
        </div>
      </Btn>
      <div className="h-[30px] w-[1px] bg-[#ddd]"></div>
      <Btn onClick={toggleFullScreen}>
        <div className="p-2">
          {isFullScreen ? (
            <BsArrowsAngleContract className="text-xl" />
          ) : (
            <BsArrowsAngleExpand className="text-xl" />
          )}
        </div>
      </Btn>
    </div>
  );
};

export default AppFooter;
