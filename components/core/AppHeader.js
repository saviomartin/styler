import React, { useEffect, useState } from "react";
import { Btn, FancyBtn } from "..";
import Link from "next/link";

import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";

import { BsHouse, BsWindow } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";

const AppHeader = ({ CSSCode }) => {
  const [isHomeURL, setIsHomeURL] = useState(false);

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === "/app") {
      return setIsHomeURL(true);
    } else {
      return setIsHomeURL(false);
    }
  });

  const copyCSSCode = () => {
    navigator.clipboard.writeText(CSSCode);
  };

  return (
    <div className="w-full gradient relative p-2 flex items-center justify-between">
      <Menu>
        <MenuButton>
          <Btn className="!rounded-md">
            <div className="glassmorphism py-2 px-3 rounded-md flex items-center justify-center shadow">
              <BsHouse className="text-xl mr-2" />
              Home
            </div>
          </Btn>
        </MenuButton>
        <MenuList className="bg-white p-2 mt-1 rounded-md shadow z-[20] relative border border-[#ddd]">
          <MenuItem>
            <a href={isHomeURL ? "/app/article/" : ""}>
              <Btn className="!rounded-md">
                <div className="glassmorphism py-2 px-3 rounded-md flex items-center justify-center shadow">
                  <BsWindow className="text-xl mr-2" />
                  Article
                </div>
              </Btn>
            </a>
          </MenuItem>
          <div className="w-full bg-[#ddd] h-[1px] my-1"></div>
          <MenuItem>
            <a href={!isHomeURL ? "/app/" : ""}>
              <Btn className="!rounded-md">
                <div className="glassmorphism py-2 px-3 rounded-md flex items-center justify-center shadow">
                  <BsHouse className="text-xl mr-2" />
                  Home
                </div>
              </Btn>
            </a>
          </MenuItem>
        </MenuList>
      </Menu>
      <FancyBtn
        text="Copy CSS"
        onClick={copyCSSCode}
        icon={<FiCopy className="text-xl ml-2" />}
      />
    </div>
  );
};

export default AppHeader;
