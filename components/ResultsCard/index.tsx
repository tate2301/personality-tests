"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GeistMono } from "geist/font/mono";
import Button from "../QuestionCard/Button";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

const ResultsCard = () => {
  return (
    <motion.div
      layout
      layoutId="results"
      className="p-8 rounded-3xl bg-[#ffffffde]"
    >
      <div className="mb-16">
        <p className="font-semibold text-lg">Personality</p>
        <p className="text-zinc-500">
          Based on the <span className="font-semibold">5 answers</span> you
          gave.
        </p>
      </div>
      <div className="flex justify-between mb-2">
        <div>
          <p className="font-semibold text-indigo-600 text-lg">Introvert</p>
          <p className={cn(GeistMono.className, "text-zinc-500 font-semibold")}>
            74%
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
            26%
          </p>
        </div>
      </div>
      <div className="flex gap-6 mb-8">
        <div className="flex-1 h-[24px] rounded-full bg-indigo-500/50" />
        <div className="w-[26%] h-[24px] rounded-full bg-orange-500/50" />
      </div>
      <div>
        <Button className="bg-zinc-900/10">
          Retake the test <ArrowPathIcon className="w-6 h-6 ml-2" />
        </Button>
      </div>
    </motion.div>
  );
};

export default ResultsCard;
