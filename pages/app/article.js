import React, { useState } from "react";
import { LeftSideBar, PlayGround } from "../../components";
// pages/index.js
import { useUser } from "@auth0/nextjs-auth0";

const article = (props) => {
  const [showLeftBar, setShowLeftBar] = useState(true);
  const { user, error, isLoading } = useUser();
  let iframeSrc = "/demo/article";

  const appProps = {
    showLeftBar,
    setShowLeftBar,
  };

  const moreProps = {
    user,
    error,
    isLoading,
    iframeSrc,
  };

  return (
    <div className="w-full h-screen overflow-hidden flex bg-[#F7F7FC]">
      <LeftSideBar {...appProps} {...props} {...moreProps} />
      <PlayGround {...appProps} {...props} {...moreProps} />
    </div>
  );
};

export default article;
