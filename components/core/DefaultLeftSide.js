import React from "react";
import { CodeBlock } from "..";

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
            How to Use Styler
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
    </div>
  );
};

export default DefaultLeftSide;
