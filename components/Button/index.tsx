"use client";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import Link from "next/link";

const Button: FC<HTMLMotionProps<"button">> = (props) => {
  return (
    <>
      <motion.button
        layout="position"
        initial={{
          scale: 0.9,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            weight: 10,
            stiffness: 200,
            damping: 25,
          },
        }}
        exit={{
          scale: 0,
          opacity: 0,
          transition: {
            type: "spring",
            weight: 5,
            stiffness: 200,
            damping: 1,
          },
        }}
        {...props}
        className={cn(
          "h-[48px] rounded-full relative font-semibold bg-white/80 px-6 flex items-center",
          props.className
        )}
      >
        {props.children}
      </motion.button>
    </>
  );
};

export default Button;
