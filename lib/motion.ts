import { spring } from "./utils";

export const staggeredRevealVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ...spring,
    },
  },
};
