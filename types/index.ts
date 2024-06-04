export type Question = {
  id: number;
  question: string;
  description: string;
  options: string[];
};

export type TAnswersContext = {
  name: string | null;
  answers: Map<string, number>;
  commitAnswer: (questionId: number, optionIdx: number) => void;
  removeAnswer: (questionId: number) => void;
};
