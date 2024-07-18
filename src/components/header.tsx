import { GoMoon } from "react-icons/go";
import brazilFlag from "../assets/images/flagbrazil.svg";
import EUAFlag from "../assets/images/flagEUA.svg";
import UserProfileIMG from "../assets/images/user-profile.png";

export function Header() {
  return (
    <div className="flex flex-row justify-between items-center w-full p-3 px-4">
      <div className="font-semibold text-xl">Welcome to the Dashboard, Admin</div>
      <div className="flex flex-row gap-3">
        <div className="flex justify-center items-center mr-3">
          <GoMoon size={20} className="cursor-pointer" color="black" />
        </div>
        <div className="flex flex-row gap-2">
          <img src={brazilFlag} alt="" width={22} />
          <img src={EUAFlag} alt="" width={22} />
        </div>
        <div>
          <img src={UserProfileIMG} alt="" width={30} />
        </div>
      </div>
    </div>
  );
}
