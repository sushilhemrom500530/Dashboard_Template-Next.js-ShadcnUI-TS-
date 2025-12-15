"use client";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";

export default function Header({ navOpened, setNavOpened }: any) {
  return (
    <div className="sticky inset-y-0 left-0 z-30 w-full  bg-[#EEF3F7] [transition:0.5s]">
      <header className="flex items-center justify-between px-4 lg:px-10 py-2 bg-primary">
        {/* left side  */}
        <div className="flex items-center justify-between w-full h-12">
          <div
            onClick={() => setNavOpened(!navOpened)}
            className="md:hidden flex items-center justify-center cursor-pointer"
          >
            <IoMdMenu className=" w-10 h-10 rounded-full bg-yellow-50 [transition:0.3s] hover:bg-yellow-100 text-center p-1" />
          </div>
          <div></div>
          <div className="flex items-center justify-center gap-2">
            <div
              onClick={() => setNavOpened(!navOpened)}
              className="hidden lg:hidden md:flex items-center justify-center cursor-pointer"
            >
              <IoMdMenu className=" w-10 h-10 rounded-full bg-yellow-50 [transition:0.3s] hover:bg-yellow-100 text-center p-1" />
            </div>
            <Link href="/dashboard/notifications">
              <div className="flex items-center justify-center cursor-pointer relative">
                <h3 className="absolute right-0 top-0 bg-[#FF181F] rounded-full w-4 h-4 flex items-center justify-center text-xs text-white">
                  2
                </h3>
                <div className="w-12 h-12 overflow-hidden">
                  Info
                  {/* <Image
                    src={info_icon2}
                    alt="logo"
                    width={0}
                    height={0}
                    className="w-full h-full rounded-full "
                  /> */}
                </div>
              </div>
            </Link>
            <div className="flex w-10 md:w-14 xl:w-auto flex-1 items-center gap-3 cursor-pointer">
              User Logio
              {/* <Image
                src={user_icon}
                alt="logo"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full "
              /> */}
              <div className="text-white">
                <h1 className="text-lg font-medium hidden xl:block">Dean</h1>
                <h1 className="text-lg hidden xl:block">Admin</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
