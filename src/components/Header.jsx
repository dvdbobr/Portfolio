import React, { useState, useEffect } from "react";

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";

const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  }, []);

  return (
    <header
      className={`
      ${bg ? "bg-tertiary h-20 " : "h-24"} opacity-90 flex items-center fixed top-0 w-full
    text-white  transition-all duration-300 z-50`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Nav */}
        <div className="hidden lg:block">
          <Nav/>
        </div>
        {/* Socials */}
       <div className="hidden lg:block">
          <Socials/>
        </div>
        {/* NavMobile */}
       <div className="lg:hidden">
          <NavMobile/>
        </div>
      </div>
    </header>
  );
};

export default Header;
