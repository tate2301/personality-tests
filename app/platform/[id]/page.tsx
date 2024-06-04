import { Question } from "@/types";
import { getQuestion } from "../../../lib/question";
import QuestionCard from "@/components/QuestionCard";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Personality test",
};

export default async function PersonalityTest(props: {
  params: {
    id: string;
  };
}) {
  const data = await getQuestion({ id: Number(props.params.id) });

  if (!data) {
    return notFound();
  }

  const question = data.question as Question;
  const nextQuestionIdx = data.nextQuestionIdx as number | undefined;
  return (
    <main className="min-h-screen md:p-24 pt-24 p-4 max-w-5xl mx-auto">
      <QuestionCard question={question} nextQuestionIdx={nextQuestionIdx} />
    </main>
  );
}
