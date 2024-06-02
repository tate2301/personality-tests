"use client";
import { motion } from "framer-motion";
import HeadingSection from "../HeadingSection";
import { useEffect, useState } from "react";
import ResultsCard from "../ResultsCard";

type ResultsProps = {
  name: string;
};

const ResultsPageTemplate = (props: ResultsProps) => {
  const [headingSection, setHeadingSection] = useState({
    title: `Hey ${props.name}`,
    tagline: "We are analyzing your answers, please wait a moment",
    finalState: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setHeadingSection({
        title: "An introvert",
        tagline: "That's what we think you are",
        finalState: true,
      });
    }, 3000);
  }, []);

  return (
    <motion.div className="space-y-24">
      <HeadingSection key={headingSection.title} {...headingSection} />
      {headingSection.finalState && <ResultsCard />}
    </motion.div>
  );
};

export default ResultsPageTemplate;
