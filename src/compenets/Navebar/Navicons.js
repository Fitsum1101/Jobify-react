import React from "react";
import { FaMoon, FaRegBell, FaRing, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navicons() {
  return (
    <div className="flex gap-5 text-xl  items-center justify-center">
      <Link>
        <FaMoon />
      </Link>
      <Link>
        <FaRegBell />
      </Link>
      <Link>
        <FaUser />
      </Link>
      <Link className="capitalize text-[1rem] text-blue-500">home</Link>
    </div>
  );
}

export default Navicons;
