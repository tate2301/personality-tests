import ResultsPageTemplate from "@/components/ResultsPageTemplate";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Test() {
  const name = cookies().get("name");

  if (!name?.value) return redirect("/");

  return (
    <main className="min-h-screen p-24 max-w-5xl mx-auto">
      <ResultsPageTemplate name={name.value} />
    </main>
  );
}
