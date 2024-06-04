"use client";
import { Question } from "@/types";
import QuestionOptions from "../QuestionOptions/OptionList";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import Button from "../Button";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { spring } from "@/lib/utils";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import AnswersContext from "@/context/AnswersContext";

const QuestionCard = (props: {
  question: Question;
  nextQuestionIdx: number | undefined;
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const router = useRouter();
  const context = useContext(AnswersContext);

  const handleOptionChange = (option: number) => {
    setSelectedOption(option);
  };

  const restartSession = () => {
    new Array(5).fill(null).forEach((_, idx) => {
      context.removeAnswer(idx + 1);
    });
    router.push("/platform/1");
  };

  const previous = () => {
    if (props.question.id === 1) return;
    new Array(props.question.id - 1).fill(null).forEach((_, idx) => {
      context.removeAnswer(idx + 1);
    });
    router.push(`/platform/${props.question.id - 1}`);
  };

  const next = (isFinal?: boolean) => {
    if (!selectedOption && selectedOption !== 0) return;
    context.commitAnswer(props.question.id, selectedOption);
    if (isFinal) {
      router.push("/platform/results");
    } else {
      router.push(`/platform/${props.nextQuestionIdx}`);
    }
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
            <span
              data-testid="question-index"
              className="text-[#121212] font-semibold"
            >
              Question {props.question.id}
            </span>{" "}
            of 5
          </p>
          <button
            id="restart-session"
            onClick={restartSession}
            className="font-semibold"
          >
            Restart session
          </button>
        </div>
        <div className="p-6 space-y-8">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1, transition: { ...spring } }}
          >
            <h1
              data-testid="question-title"
              className="text-3xl font-semibold tracking-tight leaidng-[1.2rem] mb-2"
            >
              {props.question.question}
            </h1>
            <p
              data-testid="question-description"
              className="text-lg text-zinc-500 text-balance"
            >
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
            <Button
              data-testid="prev"
              onClick={previous}
              className="aspect-square p-0 bg-[#DBDBDB] border border-white/50"
            >
              <ArrowLeftIcon className="w-6 h-6 mx-auto" />
            </Button>
          )}
        </AnimatePresence>

        <Button
          data-testid="next"
          onClick={() => next(!props.nextQuestionIdx)}
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
        </Button>
      </div>
    </motion.div>
  );
};

export default QuestionCard;
