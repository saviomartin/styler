import React, { useEffect, useState } from "react";

// Btns
import { Btn, FancyBtn } from "..";

// link from Next
import Link from "next/link";

// material-ui
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";

// icons
import {
  BsArrowBarLeft,
  BsFillPersonPlusFill,
  BsHouse,
  BsWindow,
} from "react-icons/bs";
import { FiCopy, FiLogOut } from "react-icons/fi";

const AppHeader = ({ CSSCode, user, copied, setCopied }) => {
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
    navigator.clipboard.writeText(CSSCode); // copy to clipboard
    setCopied(!copied);
  };

  return (
    <div className="w-full gradient relative p-2 flex items-center justify-between">
      <Menu>
        <MenuButton>
          <Btn className="!rounded-md">
            <div className="glassmorphism py-2 px-3 rounded-md flex items-center justify-center shadow capitalize">
              {isHomeURL ? (
                <BsHouse className="text-xl mr-2" />
              ) : (
                <BsWindow className="text-xl mr-2" />
              )}
              {isHomeURL ? "Home" : "Article"}
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
      <div className="flex items-center">
        <FancyBtn
          text="Copy CSS"
          onClick={copyCSSCode}
          icon={<FiCopy className="text-xl ml-2" />}
        />
        {user ? (
          <Menu>
            <MenuButton>
              <Btn className="!rounded-md !ml-[10px]">
                <div className="glassmorphism p-[2px] rounded-full">
                  <img
                    src={user.picture}
                    alt="USER"
                    className="h-[40px] rounded-full"
                  />
                </div>
              </Btn>
            </MenuButton>
            <MenuList className="bg-white mt-1 p-1 rounded-md shadow z-[20] relative border border-[#ddd]">
              <MenuItem>
                <a href="/api/auth/logout">
                  <Btn className="!rounded-md">
                    <div className="glassmorphism py-2 px-3 rounded-md flex items-center justify-center shadow">
                      <FiLogOut className="text-xl mr-2" />
                      Logout
                    </div>
                  </Btn>
                </a>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <a href="/api/auth/login">
            <Btn className="!rounded-md !ml-[5px]">
              <div className="border-2 border-white text-white py-[6px] px-3 rounded-md flex items-center justify-center shadow capitalize">
                <BsFillPersonPlusFill className="text-xl mr-2" />
                Sign In
              </div>
            </Btn>
          </a>
        )}
      </div>
    </div>
  );
};

export default AppHeader;
