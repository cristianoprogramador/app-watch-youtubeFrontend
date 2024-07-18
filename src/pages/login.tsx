import { ChangeEvent, useState } from "react";
import logoImage from "../assets/images/login.png";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSetEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f3f4f6]">
      <div className="flex flex-row justify-center items-center gap-14">
        <div className="flex flex-col gap-1 bg-white p-10 rounded-lg border">
          <div className="text-4xl font-bold">Access Your Account</div>
          <div className="text-sm mt-3">
            Welcome back, please log in to your account.
          </div>
          <div className="text-sm mt-3">Email:</div>
          <input
            type="text"
            className="bg-blue-50 px-2 py-2 rounded-lg text-sm border border-gray-200"
            placeholder="cristiano@email.com"
            value={email}
            onChange={(value) => handleSetEmail(value)}
          />
          <div className="text-sm mt-3">Password:</div>
          <div className="flex relative">
            <input
              type="password"
              className="bg-blue-50 px-2 py-2 rounded-lg text-sm border border-gray-200 w-full"
              placeholder="test123"
              value={password}
              onChange={(value) => handleSetPassword(value)}
            />
            <div
              className="absolute right-3 top-[10px] cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword === true ? (
                <IoEyeOutline size={20} />
              ) : (
                <IoEyeOffOutline size={20} />
              )}
            </div>
          </div>
          <div className="text-blue-700 font-semibold text-sm text-right my-2 cursor-pointer hover:opacity-80">
            Forgot your password?
          </div>

          <div className="text-center bg-[#0C346E] text-white font-semibold py-3 rounded-lg hover:opacity-80 cursor-pointer">
            Log in
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="w-full h-[1px] bg-gray-400" />
            <div>or</div>
            <div className="w-full h-[1px] bg-gray-400" />
          </div>
          <div className="text-center bg-white border-[#0C346E] border font-semibold py-3 rounded-lg hover:opacity-80 cursor-pointer text-gray-500 flex flex-row gap-4 items-center justify-center">
            <div>
              <FcGoogle size={25} />
            </div>
            Log in with Google
          </div>

          <div className="flex flex-row gap-3 text-sm justify-center items-center mt-5">
            <div>Don't have a account?</div>
            <div className="text-blue-600 font-semibold cursor-pointer hover:opacity-80">
              Register now!
            </div>
          </div>
        </div>
        <div>
          <img src={logoImage} alt="" />
        </div>
      </div>
    </div>
  );
}
