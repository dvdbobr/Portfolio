import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedText = (props) => {
  //   const text = "Animated Text"; // This would normally be passed into this component as a prop!
  const words = props.text.split(" ");
  const animation = useAnimation();
  // const delayText = props.delay ? props.delay : 0;
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const wordAnimation = {
    hidden: {},
    visible: {},
  };
  const characterAnimation = {
    hidden: {
      opacity: 0,
      // y: `0.25em`,
    },
    visible: {
      opacity: 1,
      // y: `0em`,
      transition: {
        duration: 1,
        easeIn: [0.2, 0.65, 0.8, 0.9],
      },
    },
  };
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [animation, inView]);
  return (
    <>
      {words.map((word, index) => {
        return (
          <motion.span
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={animation}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.2,
              staggerChildren: 0.05,
            }}
            className="whitespace-nowrap inline-block mr-[0.25em]"
          >
            {word.split("").map((char, index) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                  className="italic"
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </>
  );
};

export default AnimatedText;
