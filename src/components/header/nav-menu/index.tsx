/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Link from "next/link";
import { ChevronDown, Circle, CircleDot } from "lucide-react";
import { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";

interface SubmenuItem {
  label: string;
  href: string;
  icon?: React.ElementType;
}

interface NavItemProps {
  href: string;
  icon?: React.ElementType;
  label: string;
  submenu?: SubmenuItem[];
  openSubmenu: string | null;
  handleSubmenuToggle: (label: string) => void;
  closeAllSubmenus: () => void;
  setNavOpened: Dispatch<SetStateAction<boolean>>;
}

export default function NavItem({
  href,
  icon: Icon,
  label,
  submenu,
  openSubmenu,
  handleSubmenuToggle,
  setNavOpened,
  closeAllSubmenus,
}: NavItemProps) {
  const pathname = usePathname();
  const activeClass = "relative bg-primary text-white rounded-md";
  const inactiveClass = "text-black hover:text-[#7b00ff] font-medium ";

  const isSubmenuOpen = openSubmenu === label;

  // Dynamic submenu height
  const submenuRef = useRef<HTMLDivElement>(null);
  const [submenuHeight, setSubmenuHeight] = useState<number>(0);

  useEffect(() => {
    if (submenuRef.current) {
      setSubmenuHeight(isSubmenuOpen ? submenuRef.current.scrollHeight : 0);
    }
  }, [isSubmenuOpen]);

  const handleClick = () => {
    if (!submenu) closeAllSubmenus();
  };

  return (
    <div className="relative w-full">
      {/* Parent item */}
      <div
        onClick={submenu ? () => handleSubmenuToggle(label) : handleClick}
        className={`flex items-center px-4 py-3 cursor-pointer transition-all ${pathname === href ? activeClass : inactiveClass
          }`}
      >
        {!submenu ? (
          <Link
            href={href || "#"}
            className="flex items-center gap-3 w-full text-lg font-medium"
            onClick={() => setNavOpened(false)}
          >
            {Icon && <Icon size={30} />}
            <span>{label}</span>
          </Link>
        ) : (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3 text-lg font-medium ">
              {Icon && <Icon size={30} />}
              <span>{label}</span>
            </div>
            <ChevronDown
              className={`transition-transform ${isSubmenuOpen ? "rotate-180" : ""
                }`}
            />
          </div>
        )}
      </div>

      {/* Submenu */}
      {submenu && (
        <div
          ref={submenuRef}
          style={{ height: `${submenuHeight}px` }}
          className="ml-6 overflow-hidden transition-all duration-300 ease-in-out space-y-3 mt-3"
        >
          {submenu.map((item, index) => {
            const SubIcon = item.icon;
            return (
              <Link
                key={index}
                href={item.href || "#"}
                onClick={() => setNavOpened(false)}
                className={`flex items-center px-6 py-2 gap-2 relative text-lg font-medium rounded-md ${pathname === item.href
                    ? `text-white bg-primary`
                    : "text-black hover:text-[#7b00ff]"
                  }`}
              >
                {SubIcon && <SubIcon size={24} />}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}