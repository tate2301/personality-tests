"use client";
import { Question } from "@/types";
import QuestionOptions from "../QuestionOptions/OptionList";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import Button from "./Button";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { spring } from "@/lib/utils";
import { useState } from "react";

const QuestionCard = (props: {
  question: Question;
  nextQuestionIdx: number | undefined;
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionChange = (option: number) => {
    setSelectedOption(option);
  };

  return (
    <motion.div
      layout
      layoutId="question-card"
      className="mb-24 flex flex-col gap-16"
    >
      <div className="max-w-3xl bg-white/90 rounded-2xl overflow-hidden shadow">
        <div className="h-[56px] px-6 pb-0 bg-zinc-900/5 flex items-center justify-between">
          <p className="text-zinc-500 font-medium">
            <span className="text-[#121212] font-semibold">
              Question {props.question.id}
            </span>{" "}
            of 5
          </p>
          <Link href={"/platform/1"} className="font-semibold">
            Restart session
          </Link>
        </div>
        <div className="p-6 space-y-8">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1, transition: { ...spring } }}
          >
            <h1 className="text-3xl font-semibold tracking-tight leaidng-[1.2rem] mb-2">
              {props.question.question}
            </h1>
            <p className="text-lg text-zinc-500 text-balance">
              {props.question.description}
            </p>
          </motion.div>
          <QuestionOptions
            options={props.question.options}
            onSelectOption={handleOptionChange}
          />
        </div>
      </div>
      <div className="flex gap-8">
        <AnimatePresence mode="wait" initial={false}>
          {props.question.id > 1 && (
            <Button className="aspect-square p-0 bg-[#DBDBDB] border border-white/50">
              <Link
                href={`/platform/${props.question.id - 1}`}
                className="inset-0 z-1 absolute"
              />

              <ArrowLeftIcon className="w-6 h-6 mx-auto" />
            </Button>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait" initial={false}>
          {props.nextQuestionIdx ? (
            <Button
              disabled={!selectedOption}
              className="disabled:!opacity-40 transition-opacity duration-300"
            >
              {selectedOption && (
                <Link
                  href={`/platform/${props.nextQuestionIdx}`}
                  className="inset-0 z-1 absolute"
                />
              )}
              Next question <ArrowRightIcon className="w-6 h-6 ml-2" />
            </Button>
          ) : (
            <Button
              disabled={!selectedOption}
              className="disabled:!opacity-40 transition-opacity duration-300"
            >
              {selectedOption && (
                <Link
                  href={`/platform/results`}
                  className="inset-0 z-1 absolute"
                />
              )}
              Finish test <CheckCircleIcon className="w-6 h-6 ml-2" />
            </Button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default QuestionCard;
