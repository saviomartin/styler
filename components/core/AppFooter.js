import React, { useState } from "react";
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
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
      <Btn href="/fullscreen/home">
        <div className="p-2">
          <FiExternalLink className="text-xl" />
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
