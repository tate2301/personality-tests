import { motion } from "framer-motion";
import HeadingSection from "../HeadingSection";

type ResultsProps = {
  name: string;
};

const ResultsPageTemplate = (props: ResultsProps) => {
  return (
    <motion.div>
      <HeadingSection
        title={`Hey ${name}`}
        tagline="We are analyzing your answers, please wait a moment"
      />
    </motion.div>
  );
};

export default ResultsPageTemplate;
