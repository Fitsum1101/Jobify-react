import React from "react";
// import Logo from "../../images/313.jpg";

function Job({brandName,Logo,title,status,jobStatus,place,posted}) {
  return (
    <div className="p-4 rounded-lg  shadow-sm shadow-gray-500 max-w-[584px] ">
      <div className="flex items-center  gap-4">
        <img src={Logo} alt="Logo" className="rounded-full w-10 h-10" />
        <span className="capitalize text-2xl  ">{brandName}</span>
      </div>
      <h1 className="text-2xl  capitalize mt-2">{title}</h1>
      <h2 className="text-green-700 capitalize text-xl">{status}</h2>
      <div className="text-gray-500">
        <p>{jobStatus}</p>
        <p>{place}</p>
        <p>Posted on: {posted}</p>
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
