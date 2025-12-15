// src/data/index.ts
import {
  Home,
  CircleQuestionMark,
  ShieldAlert,
  UserRound,
  Info,
} from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { MdOutlineRestaurant } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";
import { RiSettingsLine } from "react-icons/ri";

export interface SubmenuItem {
  label: string;
  href: string;
  icon?: React.ElementType;
}

export interface MenuItem {
  label: string;
  href?: string;
  icon: React.ElementType;
  submenu?: SubmenuItem[];
}

export interface MenuGroup {
  menu: MenuItem[];
}

export interface MenuData {
  linkData: MenuGroup[];
}

export const menuData: MenuData = {
  linkData: [
    {
      menu: [
        {
          label: "Dashboard",
          href: "/dashboard",
          icon: Home,
        },
        {
          label: "All Users",
          href: "/dashboard/users",
          icon: FaUsers,
        },
        {
          label: "Restaurant",
          href: "/dashboard/restaurant",
          icon: MdOutlineRestaurant,
        },
        {
          label: "Withdraw Request",
          href: "/dashboard/withdraw-request",
          icon: LuCircleDollarSign,
        },
        {
          label: "Setting",
          icon: RiSettingsLine,
          submenu: [
            {
              label: "Personal Information",
              href: "/dashboard/settings/profile",
              icon: UserRound,
            },
            {
              label: "Change Password",
              href: "/dashboard/settings/chenge-password",
              icon: LockKeyhole,
            },
            {
              label: "Privacy Policy",
              href: "/dashboard/settings/privacy-policy",
              icon: ShieldAlert,
            },
            {
              label: "Terms & Condition",
              href: "/dashboard/settings/terms-service",
              icon: Info,
            },

            {
              label: "About Us",
              href: "/dashboard/settings/about-us",
              icon: CircleQuestionMark,
            },
          ],
        },
      ],
    },
  ],
};
