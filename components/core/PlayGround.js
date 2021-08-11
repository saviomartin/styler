import React, { useEffect } from "react";
import { AppHeader } from "..";

const PlayGround = ({ showLeftBar, setShowLeftBar }) => {
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

  return (
    <div
      className={`${
        showLeftBar ? "w-[64%]" : "w-full"
      } h-full bg-[#EDF0F2] relative`}
    >
      <AppHeader />
      <div className="playground h-full w-full relative flex items-center justify-center">
        <div className="scale-[.95] lg:scale-[.85] mt-[-20px]">
          <iframe
            src="/demo/home"
            id="iframe"
            frameborder="0"
            className="relative select-none shadow-xl overflow-scroll"
            style={{ height: "672.95px", width: "1366px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
