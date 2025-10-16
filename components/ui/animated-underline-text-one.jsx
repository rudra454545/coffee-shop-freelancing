'use client'
import * as React from "react";
import { motion } from "framer-motion";

export function AnimatedText({
  text,
  textClassName = "text-4xl font-bold text-center",
  underlinePath = "M 0,10 Q 75,0 150,10 Q 225,20 300,10",
  underlineHoverPath = "M 0,10 Q 75,20 150,10 Q 225,0 300,10",
  underlineDuration = 1.5,
  className,
  ...props
}) {
  return (
    <div className={className} {...props}>
      <div className="relative">
        <motion.h1
          className={textClassName}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          {text}
        </motion.h1>

        <motion.svg
          width="100%"
          height="20"
          viewBox="0 0 300 20"
          className="absolute -bottom-4 left-0 text-[#ff6b6b]"
        >
          <motion.path
            d={underlinePath}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: underlineDuration }}
            whileHover={{
              d: underlineHoverPath,
              transition: { duration: 0.8 },
            }}
          />
        </motion.svg>
      </div>
    </div>
  );
}