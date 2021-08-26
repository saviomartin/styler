import React, { useEffect, useState } from "react";

// icons
import { FiThumbsUp, FiTwitter } from "react-icons/fi";

// components
import { AppHeader, AppFooter, AdvancedSettings, PopupWrapper, Btn } from "..";

const PlayGround = ({
  showLeftBar,
  CSSCode,
  setChosenElement,
  data,
  iframeSrc,
  user,
}) => {
  const [copied, setCopied] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: "1366px",
    height: "768px",
  });
  const [loaded, setLoaded] = useState(false);

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
    let iframe = document.getElementById("iframe").contentWindow.document;

    if (
      loaded &&
      document.getElementById("iframe") !== null &&
      iframe !== null
    ) {
      resizeCoverImage();

      window.addEventListener("resize", resizeCoverImage);
    } else {
      console.log("iframe is null");
    }
  });

  const props = {
    dimensions,
    setDimensions,
  };

  useEffect(() => {
    let style = document
      .getElementById("iframe")
      .contentWindow.document.getElementById("style"); // get style element with id from Iframe

    if (style) {
      style.innerHTML = CSSCode; // set inerHtml for style element
    }
  }, [CSSCode]);

  useEffect(() => {
    let iframe = document.getElementById("iframe").contentWindow.document;

    if (
      loaded &&
      document.getElementById("iframe") !== null &&
      iframe !== null
    ) {
      iframe.body.onclick = function (e) {
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
    } else {
      console.log("No Iframe");
    }
  });

  let guides = [
    {
      text: "Custom CSS is currenty a ambassador only feature",
    },
    {
      text: "Toggle Custom CSS button from your dashboard under appearence tab",
    },
    {
      text: "You can see an editor, choose which page and add your copied code",
    },
    {
      text: "Once you're done, click publish to make it appear on your site 🎉",
    },
  ];

  return (
    <div
      className={`${
        showLeftBar ? "w-[64%]" : "w-full"
      } h-full bg-[#EDF0F2] relative overflow-hidden`}
    >
      <AppHeader
        CSSCode={CSSCode}
        user={user}
        copied={copied}
        setCopied={setCopied}
      />
      <div className="playground h-full w-full relative flex items-center justify-center">
        <AdvancedSettings {...props} />
        <div className="scale-[.95] lg:scale-[.85] mt-[-5%]">
          <iframe
            src={iframeSrc ? iframeSrc : "/demo/home"}
            id="iframe"
            onLoad={() => setLoaded(true)}
            frameborder="0"
            className="relative select-none shadow-xl overflow-scroll"
            style={{ height: dimensions.height, width: dimensions.width }}
          ></iframe>
        </div>
      </div>
      <AppFooter />
      <PopupWrapper open={copied} setOpen={setCopied}>
        <div className="w-[80vw] h-[80vh] flex items-center justify-center">
          <img src="/assets/laptop.png" alt="Laptop" height="400" width="400" />
          <div className="">
            <h1 className="text-4xl font-extrabold">CSS Copied</h1>
            <p className="text-sm font-semibold w-[350px] text-[#666] mt-2">
              You have copied your CSS code to your clipboard. You can now start
              using it in your site. Here is how 👇
            </p>
            <div className="mt-4">
              {guides.map((item, index) => (
                <div className="flex items-center my-1">
                  <div className="h-[24px] w-[24px] rounded-full gradient mr-2 text-sm flex items-center justify-center font-bold text-white Inter">
                    {index + 1}
                  </div>
                  <p className="continuous-1 text-sm font-semibold text-[#444]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <Btn className="!mt-4" onClick={() => setCopied(!copied)}>
              <div className="relative inline-flex items-center justify-center p-4 px-3 py-2 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#a770ef] rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#cf8bf3] rounded-full blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#ff00bf] rounded-full blur-md"></span>
                </span>
                <span className="relative text-white capitalize flex">
                  <FiThumbsUp className="text-xl mr-2" />
                  Thanks, I'm Good
                </span>
              </div>
            </Btn>
            <div className="flex items-center mt-2 text-[#1DA1F2]">
              <a
                href="https://twitter.com/saviomartin7"
                target="_blank"
                className="text-sm font-semibold"
              >
                Follow @saviomartin7 on Twitter
              </a>
              <FiTwitter className="text-lg ml-2" />
            </div>
          </div>
        </div>
      </PopupWrapper>
    </div>
  );
};

export default PlayGround;
