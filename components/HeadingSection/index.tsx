"use client";
import { motion } from "framer-motion";

type HeadingSectionProps = {
  title: string;
  tagline?: string;
};

const HeadingSection = (props: HeadingSectionProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3,
        },
      }}
      className="mb-16"
    >
      <motion.h1 className="text-3xl md:text-5xl font-medium leading-[1.2] tracking-tight">
        {props.title}
      </motion.h1>
      <motion.p className="text-3xl md:text-5xl leading-[1.2] tracking-tight text-zinc-500">
        {props.tagline}
      </motion.p>
    </motion.div>
  );
};

export default HeadingSection;
