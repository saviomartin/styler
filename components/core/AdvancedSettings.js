import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import Btn from "../utils/Btn";
import { BsChevronExpand, BsLaptop, BsPhone, BsTablet } from "react-icons/bs";
import Switch from "@material-ui/core/Switch";

const media = [
  { id: 1, name: "Phone", icon: <BsPhone className="text-xl mr-1" /> },
  { id: 2, name: "Tablet", icon: <BsTablet className="text-xl mr-1" /> },
  { id: 3, name: "Laptop", icon: <BsLaptop className="text-xl mr-1" /> },
];

const AdvancedSettings = () => {
  const [selectedMedia, setSelectedMedia] = useState(media[2]);
  const [darkMode, setDarkMode] = useState(false);

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
      <div className="relative flex">
        <div className="h-full bg-[#ddd] w-[1px] mx-2"></div>
        <div className="relative">
          <h3 className="text-xs text-[#444]">Dark Mode</h3>
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default AdvancedSettings;
