"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="w-full h-14 flex items-center justify-between px-4 bg-[#EEF3F7]">
      <SidebarTrigger />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-ring">
            <Avatar className="size-8 cursor-pointer">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="User avatar"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="end" sideOffset={8}>
          {/* User info */}
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Shadcn UI</p>
              <p className="text-xs leading-none text-muted-foreground">
                shadcn@example.com
              </p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          {/* Menu items */}
          <DropdownMenuItem>Profile</DropdownMenuItem>

          <DropdownMenuItem>Settings</DropdownMenuItem>

          <DropdownMenuItem>Subscription</DropdownMenuItem>

          <DropdownMenuItem>Advertiser</DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="text-destructive focus:text-destructive">
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
