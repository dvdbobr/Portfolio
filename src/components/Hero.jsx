import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import ReactLogoAnimation from "./ReactLogoAnimation";
import ScrollDownArrowAnimation from "./ScrollDownArrowAnimation";
import bgVideo from "../assets/video/backgroundVideo.mp4";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative lg:h-[90vh] flex items-center bg-primary bg-blend-soft-light bg-cover bg-center bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute z-1 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="lg:max-w-[485px] flex-1 flex flex-col items-center lg:items-start z-20">
            <h1 className="text-4xl text-center leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] lg:text-left">
              <AnimatedText text={"Hey, I'm David A Full Stack Developer"} />
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left"></p>
            <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all">
              <Link to={"contact"} spy={true} smooth={true}>
                Work with me
              </Link>
            </button>
          </div>
          <div
            className={
              "hidden lg:flex flex-1 justify-end items-center " //w-[80%] h-[80%]
            }
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <ReactLogoAnimation />
            </motion.div>
          </div>
        </div>
        <ScrollDownArrowAnimation />
      </div>
    </section>
  );
};

export default Hero;
