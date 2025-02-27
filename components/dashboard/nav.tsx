"use client";

import { navItems } from "@/constant/constant-info";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";


const DashbaordNavigation = () => {
  const pathName = usePathname();

  return (
    <aside className="hidden h-full w-full border-r sm:block">
      <nav className="flex flex-col">
        {navItems.map((item) => {
          return (
            <Button
              key={item.title}
              variant={"ghost"}
              className={`flex justify-start font-bold text-base  p-4 w-full h-full ${
                pathName === item.url ? "bg-accent" : ""
              }`}
              asChild
            >
              <Link href={item.url} className="w-full h-full">
                {item.icon && <item.icon className="mr-4" />}
                <p>{item.title}</p>
              </Link>
            </Button>
          );
        })}
      </nav>
    </aside>
  );
};

export default DashbaordNavigation;
