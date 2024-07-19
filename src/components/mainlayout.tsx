import { ReactNode } from "react";
import { CgProfile, CgWebsite } from "react-icons/cg";
import { FaUsers } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdErrorOutline, MdOutlineDashboardCustomize } from "react-icons/md";
import { TbRoute } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { Header } from "./header";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const navigate = useNavigate();

  const isSelected = (path: string) => location.pathname === path;

  const styleForOption = (path: string) =>
    `flex flex-row w-full gap-3 p-4 items-center hover:bg-blue-700 ${
      isSelected(path) && "bg-blue-900"
    }`;

  return (
    <div className="flex flex-row min-h-screen w-full">
      <div className="flex flex-col w-48 bg-blue-800 text-white">
        <div className="text-xl text-left ml-5 mt-5 font-semibold">
          App-Watch
        </div>
        <div className="mt-16">
          <div
            className={styleForOption("/home")}
            onClick={() => navigate("/home")}
          >
            <MdOutlineDashboardCustomize size={20} />
            Overview
          </div>
          <div
            className={styleForOption("/settings")}
            onClick={() => navigate("/settings")}
          >
            <IoSettingsOutline size={20} />
            Settings
          </div>
          <div
            className={styleForOption("/profile")}
            onClick={() => navigate("/profile")}
          >
            <CgProfile size={20} />
            Profile
          </div>
          <div
            className={styleForOption("/error-logs")}
            onClick={() => navigate("/error-logs")}
          >
            <MdErrorOutline size={20} />
            Error Logs
          </div>
          <div
            className={styleForOption("/users")}
            onClick={() => navigate("/users")}
          >
            <FaUsers size={20} />
            Users
          </div>
          <div
            className={styleForOption("/websites")}
            onClick={() => navigate("/websites")}
          >
            <CgWebsite size={20} />
            Websites
          </div>
          <div
            className={styleForOption("/routes")}
            onClick={() => navigate("/routes")}
          >
            <TbRoute size={20} />
            Routes
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-gray-100">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
}
