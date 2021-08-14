import React, { useEffect, useState } from "react";
import { AppHeader, AppFooter, AdvancedSettings } from "..";

const PlayGround = ({ showLeftBar, setShowLeftBar }) => {
  const [dimensions, setDimensions] = useState({
    width: "1366px",
    height: "672.95px",
  });

  // resize cover image to fit the view
  const resizeCoverImage = () => {
    const iframe = document.querySelector("#iframe");
    const container = document.querySelector(".playground");

    // get width and height of iframe
    const maxWidth = iframe.offsetWidth;
    const maxHeight = iframe.offsetHeight;

    // get width and height of window
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    let scale; // scale to be used

    // early exit
    if (width >= maxWidth && height >= maxHeight) {
      iframe.style.transform = "";
      return;
    }

    scale = Math.min(width / maxWidth, height / maxHeight); // trick to get scale

    iframe.style.transform = `scale(${scale})`; // transform scale applied
  };

  // useEffect to control window resize and all
  useEffect(() => {
    resizeCoverImage();

    window.addEventListener("resize", resizeCoverImage);
  });

  const props = {
    dimensions,
    setDimensions,
  };

  return (
    <div
      className={`${
        showLeftBar ? "w-[64%]" : "w-full"
      } h-full bg-[#EDF0F2] relative`}
    >
      <AppHeader />
      <div className="playground h-full w-full relative flex items-center justify-center">
        <AdvancedSettings {...props} />
        <div className="scale-[.95] lg:scale-[.85] mt-[-5%]">
          <iframe
            src="/demo/home"
            id="iframe"
            frameborder="0"
            className="relative select-none shadow-xl overflow-scroll"
            style={{ height: dimensions.height, width: dimensions.width }}
          ></iframe>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default PlayGround;
