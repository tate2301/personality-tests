"use client";
import { AnimatePresence, motion } from "framer-motion";
import HeadingSection from "../HeadingSection";
import { useContext, useEffect, useMemo, useState } from "react";
import ResultsCard from "../ResultsCard";
import { staggeredRevealVariants } from "@/lib/motion";
import AnswersContext from "@/context/AnswersContext";
import { getPercentageScore, getPersonalityFromScore } from "@/lib/question";

type ResultsProps = {
  name: string;
  score: number;
};

const ResultsPageTemplate = (props: ResultsProps) => {
  const context = useContext(AnswersContext);

  const [headingSection, setHeadingSection] = useState({
    title: `Hey ${context.name}`,
    tagline: "We are analyzing your answers, please wait a moment",
    finalState: false,
  });

  const score = useMemo(() => {
    const options = context.answers.values();
    return getPercentageScore(Array.from(options));
  }, [context.answers]);

  useEffect(() => {
    const personality_type = getPersonalityFromScore(score);

    setTimeout(() => {
      setHeadingSection({
        title: `An ${personality_type}`,
        tagline: "That's what we think you are",
        finalState: true,
      });
    }, 1000);
  }, [context.answers]);

  console.log({ score, answers: Array.from(context.answers.values()) });

  return (
    <motion.div
      variants={staggeredRevealVariants}
      initial="hidden"
      animate="visible"
      className="space-y-24"
    >
      <HeadingSection key={headingSection.title} {...headingSection} />
      <motion.div variants={staggeredRevealVariants}>
        <AnimatePresence>
          {headingSection.finalState && <ResultsCard score={score} />}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ResultsPageTemplate;
