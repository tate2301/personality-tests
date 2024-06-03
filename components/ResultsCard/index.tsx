"use client";
import { cn, spring } from "@/lib/utils";
import { motion } from "framer-motion";
import { GeistMono } from "geist/font/mono";
import Button from "../Button";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ...spring,
    },
  },
};

const ResultsCard = (props: { score: number }) => {
  return (
    <motion.div
      layout
      layoutId="results"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-8 rounded-3xl bg-[#ffffffde]"
    >
      <motion.div variants={containerVariants} className="mb-16">
        <p className="font-semibold text-lg">Personality</p>
        <p className="text-zinc-500">
          Based on the <span className="font-semibold">5 answers</span> you
          gave.
        </p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        className="flex justify-between mb-2"
      >
        <div>
          <p className="font-semibold text-indigo-600 text-lg">Introvert</p>
          <p className={cn(GeistMono.className, "text-zinc-500 font-semibold")}>
            {props.score}%
          </p>
        </div>
        <div>
          <p className="font-semibold text-orange-600 text-lg">Extrovert</p>
          <p
            className={cn(
              GeistMono.className,
              "text-zinc-500 font-semibold text-right"
            )}
          >
            {100 - props.score}%
          </p>
        </div>
      </motion.div>
      <motion.div variants={containerVariants} className="flex gap-2 mb-8">
        <motion.div
          initial={{ minWidth: 0 }}
          animate={{ width: `${props.score}%`, minWidth: "3%" }}
          transition={{ ...spring }}
          className="flex-1 h-[24px] rounded-full bg-indigo-500/50"
        />
        <motion.div
          initial={{ minWidth: 0 }}
          animate={{ width: `${100 - props.score}%`, minWidth: "3%" }}
          transition={{ ...spring }}
          className="w-[26%] h-[24px] rounded-full bg-orange-500/50"
        />
      </motion.div>
      <motion.div variants={containerVariants}>
        <Link href="/">
          <Button className="bg-zinc-900/10">
            Retake the test <ArrowPathIcon className="w-6 h-6 ml-2" />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ResultsCard;
