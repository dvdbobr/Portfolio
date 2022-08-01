import React from "react";
import { motion } from "framer-motion";
const JavaScriptLogoAnimation = () => {
  return (
    <motion.p
      initial={{ x: -300, opacity: 0, scale: 0, rotate: 0 }}
      animate={{ x: 0, opacity: 1, scale: 1, rotate: 360 }}
      transition={{ delay: 2.5, duration: 1.5 }}
      className="w-[200px] h-[200px] top-[80%] right-[85%] rounded-3xl bg-yellow-400 text-primary absolute text-[140px] text-right pt-[35%]"
    >
      JS
    </motion.p>
  );
};

export default JavaScriptLogoAnimation;
