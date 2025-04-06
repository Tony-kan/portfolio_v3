"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { navLinks } from "@/constants";
import { CiMenuFries } from "react-icons/ci";

function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center ">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col text-white">
        {/* Accessible title for screen readers */}
        <SheetHeader>
          <VisuallyHidden>
            <SheetTitle>Mobile Navigation Menu</SheetTitle>
          </VisuallyHidden>
        </SheetHeader>

        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Tony <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {navLinks.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } capitalize text-xl hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
