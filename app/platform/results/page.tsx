import ResultsPageTemplate from "@/components/ResultsPageTemplate";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Personality test results",
};

export default function Test() {
  const name = cookies().get("name");
  const score = Number((Math.random() * 100).toFixed(0));

  if (!name?.value) return redirect("/");

  return (
    <main className="min-h-screen md:p-24 pt-24 p-4 max-w-5xl mx-auto">
      <ResultsPageTemplate name={name.value} score={score} />
    </main>
  );
}
