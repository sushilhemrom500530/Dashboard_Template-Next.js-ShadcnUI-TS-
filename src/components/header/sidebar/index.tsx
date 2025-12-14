"use client";

import { useState } from "react";
import { menuData } from "../../../data";
import NavItem from "../nav-menu";
import logo_image from "../../../assets/logo.png";
import logout_image from "../../../assets/log out.png";
import Image from "next/image";
import { useAuthService } from "@/src/hooks/auth";

export default function Sidebar({ navOpened, setNavOpened }: any) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { logoutUser } = useAuthService();

  const menuLinks = menuData?.linkData ?? [];

  const closeAllSubmenus = (): void => {
    setOpenSubmenu(null);
  };

  const handleSubmenuToggle = (label: string): void => {
    setOpenSubmenu((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={`fixed inset-0 bg-black/50 z-20 lg:hidden transition-opacity ${navOpened ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        onClick={() => setNavOpened(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 z-30 h-screen w-[330px] bg-[#F3E8FF] overflow-y-auto transition-transform duration-300 
          ${navOpened ? "translate-x-0 pt-24" : "-translate-x-full"}
          lg:translate-x-0  
        `}
      >
        <div className="flex items-center flex-col gap-5 h-full">
          <div className="pt-10 px-2">
            <Image src={logo_image} alt="logo" width={120} height={120} />
          </div>

          <div className="pt-10 px-2 flex justify-between flex-col h-full">
            <nav>
              {menuLinks?.map((section, sIndex) => (
                <div key={sIndex} className="space-y-4">
                  {section?.menu?.map((item, index) => (
                    <NavItem
                      key={index}
                      href={item?.href || "#"}
                      icon={item?.icon}
                      label={item?.label}
                      submenu={item?.submenu}
                      openSubmenu={openSubmenu}
                      handleSubmenuToggle={handleSubmenuToggle}
                      setNavOpened={setNavOpened}
                      closeAllSubmenus={closeAllSubmenus}
                    />
                  ))}
                </div>
              ))}
            </nav>
            <button
              onClick={logoutUser}
              className="text-xl font-medium flex items-center gap-3 my-4 px-6 py-3 text-black cursor-pointer hover:text-red-600 transition "
            >
              <Image src={logout_image} alt="icon" width={30} height={30} />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}