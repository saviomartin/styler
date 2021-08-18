import React from "react";
import { BsLaptop, BsPhone, BsTablet } from "react-icons/bs";
import { Accordion, CodeBlock } from "..";

const EditingLeftSide = ({
  data,
  setData,
  chosenElement,
  setChosenElement,
}) => {
  return (
    <div className="!w-full h-full flex items-center flex-col py-4 text-[#fafafa] overflow-y-scroll">
      <Accordion name="Default" expanded={true}>
        <p className="text-sm text-[#aaa]">
          Add the default styles to appear first.
        </p>
        <div className="border border-[#555] rounded-md mt-2">
          <CodeBlock
            value={`.${chosenElement} {\n}`}
            onChange={(h) => console.log(h)}
          />
        </div>
      </Accordion>
      <Accordion name="Hover Effect">
        <p className="text-sm text-[#aaa]">
          Add the styles that should be applied when hovered.
        </p>
        <div className="border border-[#555] rounded-md mt-2">
          <CodeBlock
            value={`.${chosenElement}:hover {\n}`}
            onChange={(h) => console.log(h)}
          />
        </div>
      </Accordion>
      <Accordion name="Dark Mode">
        <p className="text-sm text-[#aaa]">
          Add the styles that should be applied when the page is in dark mode.
        </p>
        <div className="border border-[#555] rounded-md mt-2">
          <CodeBlock
            value={`.dark .${chosenElement}:hover {\n}`}
            onChange={(h) => console.log(h)}
          />
        </div>
      </Accordion>
      <Accordion name="Media Responsiveness">
        <p className="text-sm text-[#aaa]">
          Add the styles that should be changed according to current media.
        </p>
        <Accordion
          name={
            <p className="font-bold text-[#eee] flex items-center">
              <BsPhone className="text-xl mr-1" />
              Phone (max-width:{" "}
              <span className="Inter text-sm ml-1">640px</span>)
            </p>
          }
          className="!w-full my-3"
        >
          <div className="border border-[#555] rounded-md mt-2">
            <CodeBlock
              value={`.${chosenElement} {\n}`}
              onChange={(h) => console.log(h)}
            />
          </div>
        </Accordion>

        <Accordion
          name={
            <p className="font-bold text-[#eee] flex items-center">
              <BsTablet className="text-xl mr-1" />
              Tablet (max-width:{" "}
              <span className="Inter text-sm ml-1">768px</span>)
            </p>
          }
          className="!w-full my-3"
        >
          <div className="border border-[#555] rounded-md mt-2">
            <CodeBlock
              value={`.${chosenElement} {\n}`}
              onChange={(h) => console.log(h)}
            />
          </div>
        </Accordion>

        <Accordion
          name={
            <p className="font-bold text-[#eee] flex items-center">
              <BsLaptop className="text-xl mr-[5px]" />
              Phone (max-width:{" "}
              <span className="Inter text-sm ml-1">1024px</span>)
            </p>
          }
          className="!w-full my-3"
        >
          <div className="border border-[#555] rounded-md mt-2">
            <CodeBlock
              value={`.${chosenElement} {\n}`}
              onChange={(h) => console.log(h)}
            />
          </div>
        </Accordion>
      </Accordion>
    </div>
  );
};

export default EditingLeftSide;
