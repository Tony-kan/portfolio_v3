import Link from "next/link";
import React from "react";
// import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { socialLinks } from "@/constants";
import Image from "next/image";

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white hidden lg:flex">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* logo  */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">Tk</h1>
          <span className="text-accent">.</span>
        </Link>

        {/* desktop nav & hire btn  */}
        {/* <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div> */}

        {/* social links
         */}
        <div className="flex flex-row gap-14 items-center justify-center">
          {socialLinks.map((link, index) => {
            return (
              <Link
                href={link.link}
                key={index}
                className="text-2xl hover:text-accent transition-all"
              >
                <Image
                  className="filter invert size-6  hover:text-accent"
                  src={link.icon}
                  alt={link.name}
                  objectFit="contain"
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden xl:flex items-center gap-8">
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* mobile nav  */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
