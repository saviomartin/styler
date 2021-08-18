import React, { useState } from "react";
import { BsLaptop, BsPhone, BsTablet } from "react-icons/bs";
import { Accordion, CodeBlock } from "..";

const EditingLeftSide = ({
  data,
  setData,
  chosenElement,
  setChosenElement,
}) => {
  const [expanded, setExpanded] = useState("panel1");
  const [tabExpanded, setTabExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleTabChange = (panel) => (event, isExpanded) => {
    setTabExpanded(isExpanded ? panel : false);
  };

  const defaultChange = (code) => {
    setData(
      data.map((item) =>
        item.name === chosenElement ? { ...item, code: code } : item
      )
    );
  };

  const hoverChange = (code) => {
    setData(
      data.map((item) =>
        item.name === chosenElement
          ? { ...item, options: { ...item.options, hover: code } }
          : item
      )
    );
  };

  const darkModeChange = (code) => {
    setData(
      data.map((item) =>
        item.name === chosenElement
          ? { ...item, options: { ...item.options, darkMode: code } }
          : item
      )
    );
  };

  const mediaChange = (code, device) => {
    if (device === "sm") {
      setData(
        data.map((item) =>
          item.name === chosenElement
            ? {
                ...item,
                options: {
                  ...item.options,
                  media: { ...item.options.media, sm: code },
                },
              }
            : item
        )
      );
    } else if (device === "md") {
      setData(
        data.map((item) =>
          item.name === chosenElement
            ? {
                ...item,
                options: {
                  ...item.options,
                  media: { ...item.options.media, md: code },
                },
              }
            : item
        )
      );
    } else {
      setData(
        data.map((item) =>
          item.name === chosenElement
            ? {
                ...item,
                options: {
                  ...item.options,
                  media: { ...item.options.media, lg: code },
                },
              }
            : item
        )
      );
    }
  };

  return (
    <div className="!w-full h-full flex items-center flex-col py-4 text-[#fafafa] overflow-y-scroll">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        name="Default"
      >
        <p className="text-sm text-[#aaa]">
          Add the default styles to appear first.{" "}
          {JSON.stringify(data.filter((item) => item.name === chosenElement))}
        </p>
        <div className="border border-[#555] rounded-md mt-2">
          <CodeBlock
            value={`.${chosenElement} {\n}`}
            onChange={defaultChange}
          />
        </div>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        name="Hover Effect"
      >
        <p className="text-sm text-[#aaa]">
          Add the styles that should be applied when hovered.
        </p>
        <div className="border border-[#555] rounded-md mt-2">
          <CodeBlock
            value={`.${chosenElement}:hover {\n}`}
            onChange={hoverChange}
          />
        </div>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        name="Dark Mode"
      >
        <p className="text-sm text-[#aaa]">
          Add the styles that should be applied when the page is in dark mode.
        </p>
        <div className="border border-[#555] rounded-md mt-2">
          <CodeBlock
            value={`.dark .${chosenElement}:hover {\n}`}
            onChange={darkModeChange}
          />
        </div>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        name="Media Responsiveness"
      >
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
          expanded={tabExpanded === "tab1"}
          onChange={handleTabChange("tab1")}
          className="!w-full my-2"
        >
          <div className="border border-[#555] rounded-md mt-2">
            <CodeBlock
              value={`.${chosenElement} {\n}`}
              onChange={(code) => mediaChange(code, "sm")}
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
          expanded={tabExpanded === "tab2"}
          onChange={handleTabChange("tab2")}
          className="!w-full my-2"
        >
          <div className="border border-[#555] rounded-md mt-2">
            <CodeBlock
              value={`.${chosenElement} {\n}`}
              onChange={(code) => mediaChange(code, "md")}
            />
          </div>
        </Accordion>

        <Accordion
          name={
            <p className="font-bold text-[#eee] flex items-center">
              <BsLaptop className="text-xl mr-[5px]" />
              Laptop (max-width:{" "}
              <span className="Inter text-sm ml-1">1024px</span>)
            </p>
          }
          expanded={tabExpanded === "tab3"}
          onChange={handleTabChange("tab3")}
          className="!w-full my-2"
        >
          <div className="border border-[#555] rounded-md mt-2">
            <CodeBlock
              value={`.${chosenElement} {\n}`}
              onChange={(code) => mediaChange(code, "lg")}
            />
          </div>
        </Accordion>
      </Accordion>
    </div>
  );
};

export default EditingLeftSide;
