import React, { useState } from "react";
import { LeftSideBar, PlayGround } from "../components";

const app = () => {
  const [showLeftBar, setShowLeftBar] = useState(true);

  const appProps = {
    showLeftBar,
    setShowLeftBar,
  };

  return (
    <div className="w-full h-screen overflow-hidden flex bg-[#F7F7FC]">
      <LeftSideBar {...appProps} />
      <PlayGround {...appProps} />
    </div>
  );
};

export default app;
