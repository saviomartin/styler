import React, { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import Btn from "../utils/Btn";
import { BsChevronExpand, BsLaptop, BsPhone, BsTablet } from "react-icons/bs";
import Switch from "@material-ui/core/Switch";

const media = [
  { id: 1, name: "Phone", icon: <BsPhone className="text-xl mr-1" /> },
  { id: 2, name: "Tablet", icon: <BsTablet className="text-xl mr-1" /> },
  { id: 3, name: "Laptop", icon: <BsLaptop className="text-xl mr-1" /> },
];

const AdvancedSettings = ({ dimensions, setDimensions }) => {
  const [selectedMedia, setSelectedMedia] = useState(media[2]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (selectedMedia.id === 1) {
      setDimensions({
        width: "375px",
        height: "667px",
      });
    } else if (selectedMedia.id === 2) {
      setDimensions({
        width: "768px",
        height: "1024px",
      });
    } else {
      setDimensions({
        width: "1366px",
        height: "768px",
      });
    }
  }, [selectedMedia]);

  useEffect(() => {
    let iframe = window.frames[0].document.querySelector(".hashnode-blog-demo");

    if (iframe) {
      if (darkMode) {
        iframe.classList.add("dark");
      } else {
        iframe.classList.remove("dark");
      }
    }
  }, [darkMode]);

  return (
    <div className="absolute top-0 left-0 z-10 bg-[#fff] border border-[#ddd] p-2 rounded-br-md shadow flex">
      <div className="relative w-[120px]">
        <h3 className="text-xs text-[#444]">Media</h3>
        <Listbox value={selectedMedia} onChange={setSelectedMedia}>
          <div className="border border-[#ddd] rounded-md mt-1 absolute bg-white">
            <Listbox.Button>
              <Btn>
                <div className="py-1 px-2 rounded-md text-[#444] flex items-center justify-center">
                  {selectedMedia.icon}
                  {selectedMedia.name}
                  <BsChevronExpand className="text-xl ml-2 text-[#444]" />
                </div>
              </Btn>
            </Listbox.Button>
            <Listbox.Options>
              {media.map(
                (item) =>
                  selectedMedia.id !== item.id && (
                    <>
                      <div className="w-full bg-[#ddd] h-[1px] my-1"></div>
                      <Listbox.Option
                        key={item.id}
                        value={item}
                        disabled={item.unavailable}
                      >
                        <Btn className="!w-full">
                          <div className="text-[#444] w-full flex items-center justify-start m-1 pl-1">
                            {item.icon}
                            {item.name}
                          </div>
                        </Btn>
                      </Listbox.Option>
                    </>
                  )
              )}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>
      <div className="relative flex h-full items-center justify-center border-l border-[#ddd] pl-2  pb-3">
        <div className="relative">
          <h3 className="text-xs text-[#444]">Dark Mode</h3>
          <label
            for="toggleB"
            className="flex items-center cursor-pointer mt-1"
          >
            <div className="relative">
              <input
                type="checkbox"
                id="toggleB"
                className="sr-only"
                onChange={() => setDarkMode(!darkMode)}
              />
              <div className="block bg-[#eee] border border-[#ddd] w-10 h-6 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-[#aaa] w-4 h-4 rounded-full transition"></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSettings;
