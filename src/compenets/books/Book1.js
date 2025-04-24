import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
function Book1() {
  const data = useContext("mycontext");

  console.log(data);

  return (
    <>
      <h1>Book1</h1>;
      <Outlet
        context={{
          address: "Book1",
        }}
      />
      <h1>{data.name}</h1>
    </>
  );
}

export default Book1;
