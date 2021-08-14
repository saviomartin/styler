import React, { useState } from "react";
import { LeftSideBar, PlayGround } from "../../components";

const app = (props) => {
  const [showLeftBar, setShowLeftBar] = useState(true);

  const appProps = {
    showLeftBar,
    setShowLeftBar,
  };

  return (
    <div className="w-full h-screen overflow-hidden flex bg-[#F7F7FC]">
      <LeftSideBar {...appProps} {...props} />
      <PlayGround {...appProps} {...props} />
    </div>
  );
};

export default app;
