"use client";
import { TAnswersContext } from "@/types";
import { ReactNode, createContext, useEffect, useState } from "react";

const AnswersContext = createContext<TAnswersContext>({
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
      localStorage.setItem(props.name, JSON.stringify(Array.from(newAnswers)));
      return newAnswers;
    });
  };

  const removeAnswer = (questionId: number) => {
    setAnswers((prevAnswers) => {
      const newAnswers = new Map(prevAnswers);
      newAnswers.delete(questionId.toString());
      localStorage.setItem(props.name, JSON.stringify(Array.from(newAnswers)));
      return newAnswers;
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedAnswers = localStorage.getItem(props.name);
    if (storedAnswers) {
      setAnswers(new Map(JSON.parse(storedAnswers)));
    }
  }, []);

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
