"use client";
import { ReactNode, createContext, useState } from "react";

type AnswersContext = {
  name: string | null;
  answers: Map<string, number>;
  commitAnswer: (questionId: number, optionIdx: number) => void;
  removeAnswer: (questionId: number, optionIdx: number) => void;
};

const AnswersContext = createContext<AnswersContext>({
  name: null,
  answers: new Map(),
  commitAnswer: () => {},
  removeAnswer: () => {},
});

const AnswersContextProvider = (props: {
  children: ReactNode;
  name: string;
}) => {
  const [answers, setAnswers] = useState<Map<string, number>>(new Map());

  const commitAnswer = (questionId: number, optionIdx: number) => {
    setAnswers((prevAnswers) => {
      const newAnswers = new Map(prevAnswers);
      newAnswers.set(questionId.toString(), optionIdx);
      return newAnswers;
    });
  };
  const removeAnswer = (questionId: number, optionIdx: number) => {
    setAnswers((prevAnswers) => {
      const newAnswers = new Map(prevAnswers);
      newAnswers.delete(questionId.toString());
      return newAnswers;
    });
  };

  return (
    <AnswersContext.Provider
      value={{ name: props.name, answers, commitAnswer, removeAnswer }}
    >
      {props.children}
    </AnswersContext.Provider>
  );
};

export default AnswersContext;
export { AnswersContextProvider };
