import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import screenfull from "screenfull";
import Btn from "../utils/Btn";

const AppFooter = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [starCount, setStarCount] = useState(1);

  const fetchStarCount = () => {
    axios
      .get("https://api.github.com/repos/saviomartin/styler", {
        headers: {},
      })
      .then((response) => {
        setStarCount(response.data.stargazers_count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fetch on load once
  useEffect(() => {
    fetchStarCount();
  }, []);

  const toggleFullScreen = () => {
    screenfull.toggle();
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="absolute bottom-[15px] right-[15px] p-2 rounded-md bg-white shadow-xl z-10 flex items-center">
      <Btn href="https://github.com/saviomartin/styler">
        <div className="p-2 flex items-center">
          <FiGithub className="text-xl mr-1" />
          <span className="Inter">{starCount}</span>
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
