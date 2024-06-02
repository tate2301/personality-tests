"use client";
import { staggeredRevealVariants } from "@/lib/motion";
import { motion } from "framer-motion";

type HeadingSectionProps = {
  title: string;
  tagline?: string;
};

const HeadingSection = (props: HeadingSectionProps) => {
  return (
    <motion.div variants={staggeredRevealVariants} className="mb-16">
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
