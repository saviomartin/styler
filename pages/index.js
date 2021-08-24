import { useUser } from "@auth0/nextjs-auth0";
import { Btn, FancyBtn, Template } from "../components";
import Link from "next/link";

import {
  BsArrowBarLeft,
  BsFillPersonPlusFill,
  BsHouse,
  BsWindow,
} from "react-icons/bs";

import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import { FiArrowRight, FiGithub, FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";
import { supabase } from "../components/supabaseClient";

export default function Home() {
  const { user, error, isLoading } = useUser();

  const [templates, setTemplates] = useState({
    home: [],
    article: [],
  });

  const fetchHomeTemplates = async () => {
    let { data, error } = await supabase.from("home").select("*");

    return data;
  };

  const fetchArticleTemplates = async () => {
    let { data, error } = await supabase.from("article").select("*");

    return data;
  };

  useEffect(async () => {
    setTemplates({
      home: await fetchHomeTemplates(),
      article: await fetchArticleTemplates(),
    });
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center flex-col bg-[#f7f9fa]">
      <div className="gradient pb-[2px] w-full">
        <header className="w-full flex items-center justify-between p-3 pr-[2rem] bg-[#fff]">
          <div className="flex items-center">
            <h1 className="flex items-center justify-center">
              <span className="text-3xl font-extrabold ml-2 gradient-text bg-app-graient-to-l">
                Styler
              </span>
            </h1>
          </div>
          <div className="flex items-center">
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
                    <Link href="/api/auth/logout">
                      <a>
                        <Btn className="!rounded-md">
                          <div className="glassmorphism py-2 px-3 rounded-md flex items-center justify-center shadow">
                            <FiLogOut className="text-xl mr-2" />
                            Logout
                          </div>
                        </Btn>
                      </a>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Link href="/api/auth/login">
                <a>
                  <Btn className="!rounded-md !ml-[5px]">
                    <div className="border-2 border-[#a770ef] text-[#a770ef] py-[6px] px-3 rounded-md flex items-center justify-center shadow capitalize">
                      <BsFillPersonPlusFill className="text-xl mr-2" />
                      Sign In
                    </div>
                  </Btn>
                </a>
              </Link>
            )}
          </div>
        </header>
      </div>
      <div className="gradient-left w-10/12 rounded-md p-6 mt-4 shadow-lg">
        <h1 className="font-bold text-[1.5em] lg:text-[2.7em] text-[#fff] w-full lg:w-[70%] leading-[1.25em]">
          The Next-Generation CSS Builder{" "}
          <span className="block lg:hidden">in the web for your</span>
          <div className="flex items-center">
            <span className="hidden lg:block">in the web for your</span>
            <a
              href="https://hashnode.com/"
              className="text-[#3068FA] bg-app-graient-to-l relative lg:ml-3"
            >
              hashnode blog
              <div className="absolute bottom-1 left-0 bg-app-graient-to-l h-[3px] w-full"></div>
            </a>
            <img
              src="/assets/hashnode-logo.png"
              alt="Logo"
              className="w-[40px] h-[40px] ml-2"
            />
          </div>
        </h1>
        <p className="text-[#eee] mt-4 text-xs lg:text-base xl:text-base w-9/12 lg:w-[60%]">
          Super Charge your hashnode blog with styler. Write your style in the
          browers, grab the code and start using ⚡️ Wohoo, its that easy!
        </p>
        <div className="mt-5 flex">
          <Link href="/app">
            <FancyBtn
              text="Start from Blank"
              icon={<FiArrowRight className="text-xl ml-2" />}
            />
          </Link>
          <a
            className="ml-2"
            href="https://github.com/saviomartin/styler"
            target="_blank"
          >
            <FancyBtn
              text="Star on Github"
              icon={<FiGithub className="text-xl ml-2" />}
            />
          </a>
        </div>
      </div>
      <div className="bg-[#fff] shadow-lg w-10/12 border border-[#ddd] rounded-md my-4 p-6">
        <h1 className="font-bold text-xl lg:text-3xl text-[#333]">Templates</h1>
        <p className="text-xs lg:text-sm text-[#777] mt-2">
          Start from a scratch or choose a template. Just click on the template
          to choose.
        </p>
        <div className="w-full bg-[#f7f9fa] border border-[#eee] rounded-md my-2 mt-4 p-6">
          <h1 className="font-bold text-lg lg:text-xl text-[#333] flex items-center">
            Home <FiArrowRight className="ml-1 text-lg" />
          </h1>
          <div className="flex w-full mt-3 flex-wrap">
            {templates.home.length > 0 &&
              templates.home.map((item) => (
                <Template item={item} src="/demo/home" />
              ))}
          </div>
        </div>
        <div className="w-full bg-[#f7f9fa] border border-[#eee] rounded-md my-2 mt-4 p-6">
          <h1 className="font-bold text-lg lg:text-xl text-[#333] flex items-center">
            Article <FiArrowRight className="ml-1 text-lg" />
          </h1>
          <div className="flex w-full mt-3 flex-wrap">
            {templates.article.length > 0 &&
              templates.article.map((item) => (
                <Template item={item} src="/demo/article" />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
