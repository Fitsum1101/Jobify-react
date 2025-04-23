import React from "react";
import Logo from "../../images/313.jpg";

function Job() {
  return (
    <div className="p-4 rounded-lg  shadow-sm shadow-gray-400 max-w-[584px] ">
      <div className="flex items-center  gap-4">
        <img src={Logo} alt="Logo" className="rounded-full w-12 h-12" />
        <span className="capitalize text-3xl  ">niro</span>
      </div>
      <h1 className="text-3xl  capitalize mt-2">Softwere enginner</h1>
      <h2 className="text-green-700 text-2xl">Available</h2>
      <div className="text-gray-500">
        <p>Full time</p>
        <p>Addis ababa</p>
        <p>Posted on: March 22, 2025</p>
      </div>
      <div className="flex gap-3 mt-2  text-white">
        <button className="uppercase hover:bg-gray-200 duration-300  px-4 py-1  rounded-lg text-blue-600">
          see all
        </button>
        <button className="px-4 py-1 uppercase bg-blue-600 duration-300 hover:bg-blue-800 hover:shadow-md hover:shadow-gray-500 font-semibold rounded-lg ">
          apply
        </button>
      </div>
    </div>
  );
}

export default Job;
