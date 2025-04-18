import Link from "next/link";
import React from "react";
// import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { socialLinks } from "@/constants";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Header() {
  return (
    <header className="py-4 xl:py-4 text-white hidden lg:flex">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* logo  */}
        <Link href="/" className="flex items-center justify-between gap-6">
          <h1 className="text-4xl font-semibold">Tony</h1>
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
                className="text-2xl hover:text-accent hover:bg-ho transition-all"
                target="_blank"
              >
                <div className="bg-white hover:bg-accent-hover w-10 h-8 flex items-center justify-center rounded-sm">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=" flex justify-center items-center group">
                        <Image
                          className="w-6 h-5"
                          src={link.icon}
                          alt={link.name}
                          objectFit="contain"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize text-md">{`Visit ${link.name} page`}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="hidden xl:flex items-center gap-8">
          <Link href="/contact">
            <Button variant="primary" className="font-extrabold">
              Hire Me
            </Button>
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
