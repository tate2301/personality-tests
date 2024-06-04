import { Question } from "@/types";

const questions: Array<Question> = [
  {
    id: 1,
    question:
      "How comfortable do you feel attending large social gatherings or parties?",
    description:
      "Think about how you feel when you attend big events with many people. Do you look forward to these gatherings or do you feel uneasy?",
    options: [
      "Very uncomfortable",
      "Uncomfortable",
      "Neutral",
      "Comfortable",
      "Very comfortable",
    ],
  },
  {
    id: 2,
    question:
      "How energized do you feel after spending time with a group of people?",
    description:
      "Consider your energy levels after being in social settings. Do you feel recharged and happy, or do you feel tired and need some alone time to recover?",
    options: ["Very tired", "Tired", "Neutral", "Energized", "Very energized"],
  },
  {
    id: 3,
    question:
      "How easy is it for you to initiate conversations with strangers or new acquaintances?",
    description:
      "Reflect on your ability to start conversations with people you don't know well. Is it something that comes naturally to you, or do you find it challenging?",
    options: ["Very difficult", "Difficult", "Neutral", "Easy", "Very easy"],
  },
  {
    id: 4,
    question:
      "How much do you enjoy participating in group activities or team projects?",
    description:
      "Think about your experiences with group work or social activities. Do you find these situations enjoyable and engaging, or would you rather avoid them?",
    options: ["Very little", "Little", "Neutral", "A lot", "Very much"],
  },
  {
    id: 5,
    question:
      "How do you feel about being the center of attention in a group setting?",
    description:
      "Consider your preference for alone time versus socializing. Do you often choose to spend time by yourself, or do you usually seek out company?",
    options: [
      "Very uncomfortable",
      "Uncomfortable",
      "Neutral",
      "Comfortable",
      "Very comfortable",
    ],
  },
];

export const getQuestions = (): Array<Question> => {
  return questions;
};

export const getQuestion = async (params: {
  id: number;
}): Promise<
  | {
      question: Question;
      nextQuestionIdx: number | undefined;
    }
  | undefined
> => {
  const questions = getQuestions();
  const question = questions.find((q) => q.id === Number(params.id));

  if (!question) {
    throw new Error("Question not found");
  }

  return {
    question,
    nextQuestionIdx:
      Number(params.id) === questions.length
        ? undefined
        : Number(params.id) + 1,
  };
};

export const getPercentageScore = (answers: Array<number>): number => {
  const scores = [-2, -1, 0, 1, 2];
  const total = answers.reduce((acc, answer) => {
    return acc + scores[answer];
  }, 0);

  const percentage =
    ((total + 2 * answers.length) / (2 * 2 * answers.length)) * 100;

  return Number(percentage.toFixed(0));
};

export const getPersonalityFromScore = (
  score: number
): "Introvert" | "Extrovert" | "Ambivert" => {
  if (score < 50) return "Introvert";
  if (score > 50) return "Extrovert";
  return "Ambivert";
};
