import React from "react";

// material-ui
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

// icons
import { FiChevronDown } from "react-icons/fi";

const Wrapper = ({ children, name, className = "", expanded, onChange }) => {
  return (
    <div
      className={`w-11/12 gradient p-[1px] rounded-[4px] my-[5px] ${className}`}
    >
      <div className="w-full bg-[#1b1f25] !rounded-[4px] overflow-hidden">
        <Accordion
          style={{
            background: "inherit",
          }}
          expanded={expanded}
          onChange={onChange}
        >
          <AccordionSummary
            expandIcon={<FiChevronDown className="text-[#fafafa]" />}
            style={{
              borderBottom: "1px solid #777",
              background: "inherit",
            }}
          >
            <h1 className="font-semibold text-[#fafafa]">{name}</h1>
          </AccordionSummary>
          <AccordionDetails>
            <div className="w-full py-1 mt-2">{children}</div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Wrapper;
