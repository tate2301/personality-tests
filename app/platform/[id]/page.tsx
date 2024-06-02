import { Question } from "@/types";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { getQuestion } from "../../../lib/question";
import QuestionOptions from "@/components/QuestionOptions/OptionList";
import QuestionCard from "@/components/QuestionCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personality test",
};

/**
 * TODO: Edge cases:
 * - What if the question is not found?
 * - What if the question is the first or last question?
 */

export default async function PersonalityTest(props: {
  params: {
    id: string;
  };
}) {
  // TODO: Handle the undefined case for the question
  const data = await getQuestion({ id: Number(props.params.id) });
  const question = data?.question as Question;
  const nextQuestionIdx = data?.nextQuestionIdx as number | undefined;
  return (
    <main className="min-h-screen md:p-24 pt-24 p-4 max-w-5xl mx-auto">
      <QuestionCard question={question} nextQuestionIdx={nextQuestionIdx} />
    </main>
  );
}
