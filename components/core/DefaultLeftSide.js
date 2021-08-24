import React from "react";

// icons
import { FaTwitter } from "react-icons/fa";

// components
import { CodeBlock, Btn } from "..";

const DefaultLeftSide = ({ basicStyles, setBasicStyles }) => {
  return (
    <div className="w-full h-full text-[#fafafa] py-6 px-7 flex flex-col items-center justify-center">
      <div className="mb-4 w-full">
        <h1 className="font-bold text-xl mb-1">Quick Start 🚀</h1>
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full gradient mr-2"></div>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="continuous-1 text-base"
          >
            Supported Standard Classes
          </a>
        </div>
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full gradient mr-2"></div>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="continuous-1 text-base"
          >
            Styler Features
          </a>
        </div>
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full gradient mr-2"></div>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="continuous-1 text-base"
          >
            Use Custom CSS [Guide]
          </a>
        </div>
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full gradient mr-2"></div>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="continuous-1 text-base"
          >
            Buy Me A Coffee
          </a>
        </div>

        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full gradient mr-2"></div>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="continuous-1 text-base"
          >
            Star on GitHub
          </a>
        </div>
      </div>
      <div className="mt-4 w-full">
        <h1 className="font-bold text-xl">Add your first styles ✌️</h1>
        <p className="text-[#ccc] mb-2 text-sm">
          Click on any element from the demo to start editing it.
        </p>
        <CodeBlock
          value={basicStyles}
          onChange={(code) => setBasicStyles(code)}
        />
      </div>
      <a
        href="https://twitter.com/saviomartin7"
        target="_blank"
        rel="noreferrer"
        className="gradient w-full p-[1px] rounded-md mt-2"
      >
        <div className="bg-[#1B1F25] h-full p-full p-[10px] rounded-md flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://avatars.githubusercontent.com/saviomartin"
              alt="Savio"
              className="h-[35px] w-[35px] rounded-full"
            />
            <h1 className="text-[17px] ml-2">
              By
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#a770ef] to-[#fdb99b] ml-1">
                Savio Martin
              </span>
            </h1>
          </div>
          <FaTwitter className="text-lg text-[#fdb99b] mr-2" />
        </div>
      </a>
    </div>
  );
};

export default DefaultLeftSide;
