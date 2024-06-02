"use client";
import { Question } from "@/types";
import QuestionOptions from "../QuestionOptions/OptionList";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import LinkButton from "./Button";
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
            <LinkButton
              href={`/platform/${props.question.id - 1}`}
              className="aspect-square p-0 bg-[#DBDBDB] border border-white/50"
            >
              <ArrowLeftIcon className="w-6 h-6 mx-auto" />
            </LinkButton>
          )}
        </AnimatePresence>

        <LinkButton
          href={
            props.nextQuestionIdx
              ? `/platform/${props.nextQuestionIdx}`
              : `/platform/results`
          }
          disabled={!selectedOption && selectedOption !== 0}
          className="disabled:!opacity-40 transition-opacity duration-300"
        >
          <AnimatePresence>
            {props.nextQuestionIdx && (
              <>
                Next question <ArrowRightIcon className="w-6 h-6 ml-2" />
              </>
            )}
            {!props.nextQuestionIdx && (
              <>
                Finish test <CheckCircleIcon className="w-6 h-6 ml-2" />
              </>
            )}
          </AnimatePresence>
        </LinkButton>
      </div>
    </motion.div>
  );
};

export default QuestionCard;
