"use client";
import { AnimatePresence, motion } from "framer-motion";
import HeadingSection from "../HeadingSection";
import { useEffect, useMemo, useState } from "react";
import ResultsCard from "../ResultsCard";
import { staggeredRevealVariants } from "@/lib/motion";

type ResultsProps = {
  name: string;
};

const ResultsPageTemplate = (props: ResultsProps) => {
  const score = useMemo(() => {
    let rand = Number((Math.random() * 100).toFixed(0));

    // Edge case: we have a 50, we just want to balance it out
    if (rand === 50) rand += 1;

    return rand;
  }, []);

  const [headingSection, setHeadingSection] = useState({
    title: `Hey ${props.name}`,
    tagline: "We are analyzing your answers, please wait a moment",
    finalState: false,
  });

  const personality_type = useMemo(() => {
    return Number(score) < 50 ? "Extrovert" : "Introvert";
  }, [score]);

  useEffect(() => {
    setTimeout(() => {
      setHeadingSection({
        title: `An ${personality_type}`,
        tagline: "That's what we think you are",
        finalState: true,
      });
    }, 1000);
  }, []);

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
          {headingSection.finalState && <ResultsCard score={Number(score)} />}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ResultsPageTemplate;
