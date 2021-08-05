import React from "react";
import { LeftSideBar, PlayGround } from "../components";

const app = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex bg-[#F7F7FC]">
      <LeftSideBar />
      <PlayGround />
    </div>
  );
};

export default app;
