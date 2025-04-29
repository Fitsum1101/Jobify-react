import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const commonStyles = {
    eye: "absolute cursor-pointer right-2 text-xl text-gray-500",
    userLock: "absolute left-4 text-xl text-gray-500",
  };
  return (
    <form className="flex flex-col mt-20 justify-center items-center">
      <FaUser className="text-6xl text-white" />
      <div className="text-white flex flex-col gap-1 justify-center items-center mt-5 mb-8">
        <h2 className="text-3xl">Welcome</h2>
        <p>Login</p>
      </div>
      <div className="">
        <div className="flex justify-center mb-4  relative items-center">
          <FaUser className={commonStyles.userLock} />
          <input
            className="w-[25rem] py-2 pl-10  focus:outline-0  rounded-md"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="flex justify-center relative items-center mb-4">
          <FaLock className={commonStyles.userLock} />
          <input
            className="w-[25rem] pl-10 py-3 focus:outline-0 rounded-md"
            type="password"
            placeholder="Password"
          />
          {!showPassword ? (
            <FaEye
              className={commonStyles.eye}
              onClick={() => setShowPassword(true)}
            />
          ) : (
            <FaEyeSlash
              onClick={() => setShowPassword(false)}
              className={commonStyles.eye}
            />
          )}
        </div>
      </div>
      <button className="text-white w-[25rem] duration-200 text-xl hover:bg-[#0d1c27] rounded-md shadow-md py-3">
        Login
      </button>
    </form>
  );
}

export default Login;
