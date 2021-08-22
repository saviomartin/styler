import React, { useEffect } from "react";
import { generateCSS } from "../helper";
// uuid
import { v4 as uuidv4 } from "uuid";

const Template = ({ item, src }) => {
  let randomClassName = `template-${uuidv4()}`;

  const putCSS = () => {
    let CSSCode = generateCSS(item.data, "");
    let style = document
      .querySelector(`.${randomClassName}`)
      .contentWindow.document.getElementById("style");

    style.innerHTML = CSSCode;
  };

  return (
    <div
      className="bg-white p-4 rounded-md border border-[#eee] flex items-center justify-center flex-col"
      id
    >
      <div className="border border-[#ddd] rounded-md shadow-lg">
        <div className="w-full px-3 py-2 rounded-t-md bg-[#2D3748] flex items-center">
          <div className="h-2 w-2 rounded-full bg-[#EF6464]"></div>
          <div className="h-2 w-2 rounded-full bg-[#ECC94B] ml-1"></div>
          <div className="h-2 w-2 rounded-full bg-[#54BB78] ml-1"></div>
        </div>
        <div className="h-[153.6px] w-[273.2px] overflow-hidden relative">
          <iframe
            src={src}
            id="iframe"
            frameborder="0"
            className={`absolute top-0 left-0 origin-top-left select-none ${randomClassName}`}
            style={{
              height: "768px",
              width: "1366px",
              transform: "scale(0.20)",
            }}
            onLoad={() => putCSS()}
          ></iframe>
        </div>
      </div>
      <h3 className="text-lg mt-2 font-medium w-full">{item.name}</h3>
    </div>
  );
};

export default Template;
