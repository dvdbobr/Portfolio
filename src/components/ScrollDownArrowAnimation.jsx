import React from "react";
import { Link } from "react-scroll";
import "../style/ScrollDownArrowAnimation.css";
const ScrollDownArrowAnimation = () => {
  return (
    <Link to={"portfolio"} smooth={true}>
      <div className="indicator">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Link>
  );
};

export default ScrollDownArrowAnimation;
