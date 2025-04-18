"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {navLinks.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize text-xl font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
