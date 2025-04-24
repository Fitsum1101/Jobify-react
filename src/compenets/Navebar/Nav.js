import React from "react";
import Navicons from "./Navicons";

const Nav = () => {
  return (
    <div className="bg-[#002A47] p-3 text-center w-[100%] fixed top-0 left-0 border-b-1 shadow-cyan-800 shadow-sm ">
      <div className="flex max-w-[1098px] m-auto justify-between text-white align-middle">
        <h1 className="text-2xl capitalize font-bold ">Jobify</h1>
        <Navicons />
      </div>
    </div>
  );
};

export default Nav;
