import React from "react";
import { Btn } from "..";
const AppHeader = () => {
  return (
    <div className="w-full gradient absolute top-0 left-0 px-3 py-2">
      <Btn className="!rounded-md">
        <div className="glassmorphism py-2 px-3 rounded-md">Home</div>
      </Btn>
    </div>
  );
};

export default AppHeader;
