import React from "react";
import { FaKey, FaUser } from "react-icons/fa";
import { FaK } from "react-icons/fa6";

function Login() {
  return (
    <div className="flex flex-col mt-20 justify-center items-center">
      <FaUser className="text-6xl text-white" />
      <div className="text-white flex flex-col gap-1 justify-center items-center mt-5">
        <h2 className="text-3xl">Welcome</h2>
        <p>Login</p>
      </div>
      <div>
        <div className="flex">
          <FaUser />
          <input className="w-64" type="text" />
        </div>
        <div>
          <FaKey />
          <input type="password"  />
        </div>
      </div>
      <button>Login</button>
    </div>
  );
}

export default Login;
