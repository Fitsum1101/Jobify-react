import React from "react";
import Nav from "../../compenets/Navebar/Nav";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Root;
