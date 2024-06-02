import HeadingSection from "@/components/HeadingSection";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Welcome - Personality Test",
};

async function handleSubmit(formData: FormData) {
  "use server";

  const rawData = {
    name: formData.get("name"),
  };

  if (!rawData.name) return "Please enter your name.";

  cookies().set("name", rawData.name as string);

  redirect(`/platform/start`);
}

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-24 pt-24 max-w-5xl mx-auto">
      <HeadingSection title="Welcome" tagline="Let us get started!" />
      <form action={handleSubmit}>
        <input
          required
          name="name"
          autoComplete="off"
          type="text"
          placeholder="What's your name?"
          className="border-b-2 text-2xl md:text-5xl font-medium border-zinc-400/10 bg-transparent focus:border-zinc-400/50 outline-none text-zinc-500"
          autoFocus
        />
      </form>
    </main>
  );
}
