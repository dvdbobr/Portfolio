import React, { useState, useEffect } from "react";

import { navigation } from "../data";

import { Link } from "react-scroll";
import "../style/activeLink.css";
const Nav = () => {
  const [ContactLink, setContactLink] = useState(false);
  const handleClickActive = (name) => {
    if (name === "contact") setContactLink(true);
    else setContactLink(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setContactLink(true);
      }
      else setContactLink(false);
    });
  }, []);
  return (
    <nav>
      <ul
        className={`${
          ContactLink ? "contactActive" : ""
        } flex space-x-8 capitalize text-[32px]`}
      >
        {navigation.map((item, index) => {
          return (
            <li
              className="text-white hover:text-accent cursor-pointer"
              key={index}
            >
              <Link
                to={item.href}
                activeClass={ContactLink ? "deactivateLink" : "activeClass"}
                spy={true}
                smooth={true}
                onClick={() => {
                  handleClickActive(item.name);
                }}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
