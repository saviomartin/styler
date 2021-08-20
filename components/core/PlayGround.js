import React, { useEffect, useState } from "react";
import { AppHeader, AppFooter, AdvancedSettings, PopupWrapper, Btn } from "..";

const PlayGround = ({
  showLeftBar,
  CSSCode,
  setChosenElement,
  data,
  iframeSrc,
  user,
}) => {
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

  useEffect(() => {
    let iframe = window.frames[0].document;

    data.forEach((item) => {
      let element = iframe.querySelector(`.${item.name}`);

      if (element) {
        element.onclick = (e) => {
          let path0 = e.path[0].className;
          let path1 = e.path[1].className;
          let path2 = e.path[2].className;
          let path3 = e.path[3].className;
          let path4 = e.path[4].className;

          let finalElement;

          let checkIsStartingWith = (text) => {
            if (text && text !== undefined && text.length > 0) {
              return text.startsWith("blog-");
            }
          };

          if (path0 && checkIsStartingWith(path0)) {
            finalElement = path0;
          } else if (path1 && checkIsStartingWith(path1)) {
            finalElement = path1;
          } else if (path2 && checkIsStartingWith(path2)) {
            finalElement = path2;
          } else if (path3 && checkIsStartingWith(path3)) {
            finalElement = path3;
          } else if (path4 && checkIsStartingWith(path4)) {
            finalElement = path4;
          }

          if (
            finalElement &&
            finalElement !== undefined &&
            finalElement.length > 0
          ) {
            setChosenElement(
              data.filter(
                (item) => item.name === finalElement.replace(/ .*/, "")
              )[0].name
            );
          }
        };
      }
    });
  }, []);

  useEffect(() => {
    let iframe = window.frames[0].document;

    let style = document.createElement("style");
    style.innerHTML = CSSCode;
    iframe.body.appendChild(style);
  }, [CSSCode]);

  return (
    <div
      className={`${
        showLeftBar ? "w-[64%]" : "w-full"
      } h-full bg-[#EDF0F2] relative overflow-hidden`}
    >
      <AppHeader CSSCode={CSSCode} user={user} />
      <div className="playground h-full w-full relative flex items-center justify-center">
        <AdvancedSettings {...props} />
        <div className="scale-[.95] lg:scale-[.85] mt-[-5%]">
          <iframe
            src={iframeSrc ? iframeSrc : "/demo/home"}
            id="iframe"
            frameborder="0"
            className="relative select-none shadow-xl overflow-scroll"
            style={{ height: dimensions.height, width: dimensions.width }}
          ></iframe>
        </div>
      </div>
      <AppFooter />
      {/* <PopupWrapper open={showAsFullScreen} setOpen={setShowAsFullScreen}>
        hello wrold
      </PopupWrapper> */}
    </div>
  );
};

export default PlayGround;
