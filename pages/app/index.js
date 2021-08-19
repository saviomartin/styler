import React, { useState } from "react";
import { LeftSideBar, PlayGround } from "../../components";
// pages/index.js
import { useUser } from "@auth0/nextjs-auth0";

const app = (props) => {
  const [showLeftBar, setShowLeftBar] = useState(true);
  const { user, error, isLoading } = useUser();

  const appProps = {
    showLeftBar,
    setShowLeftBar,
  };

  const userProps = {
    user,
    error,
    isLoading,
  };

  return (
    <div className="w-full h-screen overflow-hidden flex bg-[#F7F7FC]">
      <LeftSideBar {...appProps} {...props} {...userProps} />
      <PlayGround {...appProps} {...props} {...userProps} />
    </div>
  );
};

export default app;
