import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

function SideNavBar() {
  return (
    <header className="py-8 xl:py-12 text-white lg:-rotate-90 lg:fixed lg:-left-40 lg:top-72 lg:z-40">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* logo  */}
        <Link
          href="/"
          className="lg:hidden flex items-center justify-between gap-6"
        >
          <h1 className="text-4xl font-semibold">Tony </h1>
          <span className="text-accent">.</span>
        </Link>

        {/* desktop nav & hire btn  */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
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

export default SideNavBar;
